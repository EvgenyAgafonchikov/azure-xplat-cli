/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var routeTables = network.category('route-table')
    .description($('Commands to manage route tables'));
  var routes = routeTables.category('route')
    .description($('Commands to manage routes'));

  var nextHopTypeVirtualAppliance = 'VirtualAppliance';
  routes.command('create [resource-group] [route-table-name] [name] [address-prefix] [next-hop-type]')
    .description($('Create a route'))
    .usage('[options] <resource-group> <route-table-name> <name> <address-prefix> <next-hop-type>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-r, --route-table-name <route-table-name>', $('the route table name'))
    .option('-n, --name <name>', $('the name of the route'))
    .option('-a, --address-prefix <address-prefix>', $('the destination CIDR to which the route' +
      '\n     applies'))
    .option('-y, --next-hop-type <next-hop-type>', $('the type of Azure hop the packet should' +
      '\n     be sent to. Possible values are: \'VirtualNetworkGateway\', \'VnetLocal\',' +
      '\n     \'Internet\', \'VirtualAppliance\', and \'None\''))
    .option('-p, --next-hop-ip-address [next-hop-ip-address]', $('the IP address packets should be' +
      '\n     forwarded to. Next hop values are only allowed in routes where the next hop' +
      '\n     type is VirtualAppliance'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, routeTableName, name, addressPrefix, nextHopType, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      routeTableName = cli.interaction.promptIfNotGiven($('route table name : '), routeTableName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.addressPrefix = cli.interaction.promptIfNotGiven($('address prefix : '), addressPrefix, _);
      options.nextHopType = cli.interaction.promptIfNotGiven($('next hop type : '), nextHopType, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var route;
      var progress = cli.interaction.progress(util.format($('Looking up the route "%s"'), name));
      try {
        route = networkManagementClient.routes.get(resourceGroup, routeTableName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          route = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (route) {
        throw new Error(util.format($('route with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.addressPrefix) {
        parameters.addressPrefix = options.addressPrefix;
      }

      if(options.nextHopType) {
        parameters.nextHopType = validation.isIn(options.nextHopType, ['VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', 'None'], '--next-hop-type');
        if(options.nextHopType.toLowerCase() != nextHopTypeVirtualAppliance.toLowerCase()) {
          delete parameters.nextHopIpAddress;
        }
      }

      if(options.nextHopIpAddress) {
        parameters.nextHopIpAddress = options.nextHopIpAddress;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating route "%s"'), name));
      try {
        route = networkManagementClient.routes.createOrUpdate(resourceGroup, routeTableName, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(route, generatorUtils.traverse);
    });

  routes.command('set [resource-group] [route-table-name] [name]')
    .description($('Update a route'))
    .usage('[options] <resource-group> <route-table-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-r, --route-table-name <route-table-name>', $('the route table name'))
    .option('-n, --name <name>', $('the name of the route'))
    .option('-a, --address-prefix [address-prefix]', $('the destination CIDR to which the route' +
      '\n     applies'))
    .option('-y, --next-hop-type [next-hop-type]', $('the type of Azure hop the packet should' +
      '\n     be sent to. Possible values are: \'VirtualNetworkGateway\', \'VnetLocal\',' +
      '\n     \'Internet\', \'VirtualAppliance\', and \'None\''))
    .option('-p, --next-hop-ip-address [next-hop-ip-address]', $('the IP address packets should be' +
      '\n     forwarded to. Next hop values are only allowed in routes where the next hop' +
      '\n     type is VirtualAppliance'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, routeTableName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      routeTableName = cli.interaction.promptIfNotGiven($('route table name : '), routeTableName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var route;
      var progress = cli.interaction.progress(util.format($('Looking up the route "%s"'), name));
      try {
        route = networkManagementClient.routes.get(resourceGroup, routeTableName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          route = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!route) {
        throw new Error(util.format($('route with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = route;
      if(options.addressPrefix) {
        parameters.addressPrefix = options.addressPrefix;
      }

      if(options.nextHopType) {
        parameters.nextHopType = validation.isIn(options.nextHopType, ['VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', 'None'], '--next-hop-type');
        if(options.nextHopType.toLowerCase() != nextHopTypeVirtualAppliance.toLowerCase()) {
          delete parameters.nextHopIpAddress;
        }
      }

      if(options.nextHopIpAddress) {
        parameters.nextHopIpAddress = options.nextHopIpAddress;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating route "%s"'), name));
      try {
        route = networkManagementClient.routes.createOrUpdate(resourceGroup, routeTableName, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(route, generatorUtils.traverse);
    });

  routes.command('delete [resource-group] [route-table-name] [name]')
    .description($('Delete a route'))
    .usage('[options] <resource-group> <route-table-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-r, --route-table-name <route-table-name>', $('the route table name'))
    .option('-n, --name <name>', $('the name of the route'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, routeTableName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      routeTableName = cli.interaction.promptIfNotGiven($('route table name : '), routeTableName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var route;
      var progress = cli.interaction.progress(util.format($('Looking up the route "%s"'), name));
      try {
        route = networkManagementClient.routes.get(resourceGroup, routeTableName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          route = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!route) {
        throw new Error(util.format($('route with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete route "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('route "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting route "%s"'), name));
      try {
        route = networkManagementClient.routes.deleteMethod(resourceGroup, routeTableName, name, _);
        cli.output.info(util.format($('route "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  routes.command('show [resource-group] [route-table-name] [name]')
    .description($('Show a route'))
    .usage('[options] <resource-group> <route-table-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-r, --route-table-name <route-table-name>', $('the route table name'))
    .option('-n, --name <name>', $('the name of the route'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, routeTableName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      routeTableName = cli.interaction.promptIfNotGiven($('route table name : '), routeTableName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var route;
      var progress = cli.interaction.progress(util.format($('Looking up the route "%s"'), name));
      try {
        route = networkManagementClient.routes.get(resourceGroup, routeTableName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          route = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!route) {
        cli.output.warn(util.format($('route with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(route, generatorUtils.traverse);
    });

  routes.command('list [resource-group] [route-table-name]')
    .description($('List routes'))
    .usage('[options] <resource-group> <route-table-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-r, --route-table-name <route-table-name>', $('the route table name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, routeTableName, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var route = null;
      var progress;
      try {
        if(typeof networkManagementClient.routes.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          routeTableName = cli.interaction.promptIfNotGiven($('route table : '), routeTableName, _);
          progress = cli.interaction.progress($('Getting the routes'));
          route = networkManagementClient.routes.list(resourceGroup, routeTableName,  _);
        } else {
          if(options.resourceGroup) {
            routeTableName = cli.interaction.promptIfNotGiven($('route table : '), routeTableName, _);
            progress = cli.interaction.progress($('Getting the routes'));
            route = networkManagementClient.routes.list(resourceGroup, routeTableName,  _);
          } else {
            routeTableName = cli.interaction.promptIfNotGiven($('route table : '), routeTableName, _);
            progress = cli.interaction.progress($('Getting the routes'));
            route = networkManagementClient.routes.listAll(routeTableName, _);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(route, function(route) {
        if (route.length === 0) {
          cli.output.warn($('No routes found'));
        } else {
          cli.output.table(route, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
