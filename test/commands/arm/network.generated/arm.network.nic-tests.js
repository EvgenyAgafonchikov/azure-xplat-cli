﻿/**
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

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-nic-tests',
  groupName = 'xplat-test-nic',
  location;
var index = 0;

var networkInterfaces = {
  privateIPAddress: '10.0.0.42',
  privateIPAddressVersion: 'IPv4',
  ipConfigurationName: 'createipconf',
  internalDnsNameLabel: 'internal-dns-foo',
  internalDnsNameLabelNew: 'internal-dns-bar',
  enableAcceleratedNetworking: 'false',
  enableAcceleratedNetworkingNew: 'true',
  enableIPForwarding: 'false',
  enableIPForwardingNew: 'true',
  location: 'westus',
  name: 'networkInterfaceName'
};

networkInterfaces.virtualNetworkName = 'virtualNetworkName';
networkInterfaces.subnetName = 'subnetName';
networkInterfaces.publicIPAddressName = 'publicIPAddressName';
networkInterfaces.networkSecurityGroupName = 'networkSecurityGroupName';
networkInterfaces.networkInterfaceName = 'networkInterfaceName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var networkSecurityGroup = {
  location: 'westus'
};
var publicIPAddress = {
  location: 'westus'
};
var invalidPrivateIPAddress = {
  privateIPAddress: '10.11.12.13.14',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'InvalidPrivateIPAddressName',
  group: groupName
};
var ipVersionOutOfRange = {
  privateIPAddressVersion: 'IP',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'IPVersionOutOfRangeName',
  group: groupName
};
var invalidIPForwarding = {
  enableIPForwarding: 'Disable',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'InvalidIPForwardingName',
  group: groupName
};
var attachNsgToNic = {
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'AttachNsgToNicName',
  group: groupName
};
var detachNsgFromNic = {
  location: 'westus',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'AttachNsgToNicName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      this.timeout(hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = networkInterfaces.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        networkInterfaces.location = location;
        networkInterfaces.group = groupName;
        networkInterfaces.name = suite.isMocked ? networkInterfaces.name : suite.generateId(networkInterfaces.name, null);
        if (!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              invalidPrivateIPAddress.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(invalidPrivateIPAddress.virtualNetworkId, null);
              ipVersionOutOfRange.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(ipVersionOutOfRange.virtualNetworkId, null);
              invalidIPForwarding.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(invalidIPForwarding.virtualNetworkId, null);
              attachNsgToNic.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(attachNsgToNic.virtualNetworkId, null);
              detachNsgFromNic.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(detachNsgFromNic.virtualNetworkId, null);
              var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                invalidPrivateIPAddress.subnetId = suite.isMocked ? output.id : suite.generateId(invalidPrivateIPAddress.subnetId, null);
                ipVersionOutOfRange.subnetId = suite.isMocked ? output.id : suite.generateId(ipVersionOutOfRange.subnetId, null);
                invalidIPForwarding.subnetId = suite.isMocked ? output.id : suite.generateId(invalidIPForwarding.subnetId, null);
                attachNsgToNic.subnetId = suite.isMocked ? output.id : suite.generateId(attachNsgToNic.subnetId, null);
                detachNsgFromNic.subnetId = suite.isMocked ? output.id : suite.generateId(detachNsgFromNic.subnetId, null);
                var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  invalidPrivateIPAddress.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(invalidPrivateIPAddress.publicIPAddressId, null);
                  ipVersionOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(ipVersionOutOfRange.publicIPAddressId, null);
                  invalidIPForwarding.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(invalidIPForwarding.publicIPAddressId, null);
                  attachNsgToNic.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(attachNsgToNic.publicIPAddressId, null);
                  detachNsgFromNic.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(detachNsgFromNic.publicIPAddressId, null);
                  var cmd = 'network nsg create -g {1} -n networkSecurityGroupName --location {location} --json'.formatArgs(networkSecurityGroup, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    invalidPrivateIPAddress.networkSecurityGroupId = suite.isMocked ? output.id : suite.generateId(invalidPrivateIPAddress.networkSecurityGroupId, null);
                    ipVersionOutOfRange.networkSecurityGroupId = suite.isMocked ? output.id : suite.generateId(ipVersionOutOfRange.networkSecurityGroupId, null);
                    invalidIPForwarding.networkSecurityGroupId = suite.isMocked ? output.id : suite.generateId(invalidIPForwarding.networkSecurityGroupId, null);
                    attachNsgToNic.networkSecurityGroupId = suite.isMocked ? output.id : suite.generateId(attachNsgToNic.networkSecurityGroupId, null);
                    detachNsgFromNic.networkSecurityGroupId = suite.isMocked ? output.id : suite.generateId(detachNsgFromNic.networkSecurityGroupId, null);
                    done();
                  });
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          invalidPrivateIPAddress.virtualNetworkId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'virtualNetworks', invalidPrivateIPAddress.virtualNetworkName) : suite.generateId(invalidPrivateIPAddress.virtualNetworkId, null)
          invalidPrivateIPAddress.subnetId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'subnets', invalidPrivateIPAddress.subnetName) : suite.generateId(invalidPrivateIPAddress.subnetId, null)
          invalidPrivateIPAddress.publicIPAddressId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'publicIPAddresses', invalidPrivateIPAddress.publicIPAddressName) : suite.generateId(invalidPrivateIPAddress.publicIPAddressId, null)
          ipVersionOutOfRange.virtualNetworkId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'virtualNetworks', ipVersionOutOfRange.virtualNetworkName) : suite.generateId(ipVersionOutOfRange.virtualNetworkId, null)
          ipVersionOutOfRange.subnetId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'subnets', ipVersionOutOfRange.subnetName) : suite.generateId(ipVersionOutOfRange.subnetId, null)
          ipVersionOutOfRange.publicIPAddressId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'publicIPAddresses', ipVersionOutOfRange.publicIPAddressName) : suite.generateId(ipVersionOutOfRange.publicIPAddressId, null)
          invalidIPForwarding.virtualNetworkId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'virtualNetworks', invalidIPForwarding.virtualNetworkName) : suite.generateId(invalidIPForwarding.virtualNetworkId, null)
          invalidIPForwarding.subnetId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'subnets', invalidIPForwarding.subnetName) : suite.generateId(invalidIPForwarding.subnetId, null)
          invalidIPForwarding.publicIPAddressId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'publicIPAddresses', invalidIPForwarding.publicIPAddressName) : suite.generateId(invalidIPForwarding.publicIPAddressId, null)
          attachNsgToNic.virtualNetworkId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'virtualNetworks', attachNsgToNic.virtualNetworkName) : suite.generateId(attachNsgToNic.virtualNetworkId, null)
          attachNsgToNic.subnetId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'subnets', attachNsgToNic.subnetName) : suite.generateId(attachNsgToNic.subnetId, null)
          attachNsgToNic.publicIPAddressId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'publicIPAddresses', attachNsgToNic.publicIPAddressName) : suite.generateId(attachNsgToNic.publicIPAddressId, null)
          attachNsgToNic.networkSecurityGroupId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'networkSecurityGroups', attachNsgToNic.networkSecurityGroupName) : suite.generateId(attachNsgToNic.networkSecurityGroupId, null)
          detachNsgFromNic.networkSecurityGroupId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'networkSecurityGroups', detachNsgFromNic.networkSecurityGroupName) : suite.generateId(detachNsgFromNic.networkSecurityGroupId, null)
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('network interfaces', function () {
      this.timeout(hour);
      it('create should create network interfaces', function (done) {
        var cmd = 'network nic create -g {group} -n {name} --private-ip-address {privateIPAddress} --private-ip-version {privateIPAddressVersion} --ip-config-name {ipConfigurationName} --internal-dns-name-label {internalDnsNameLabel} --enable-accelerated-networking {enableAcceleratedNetworking} --enable-ip-forwarding {enableIPForwarding} --location {location} --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(networkInterfaces.name);
          output.ipConfigurations[index].privateIPAddress.toLowerCase().should.equal(networkInterfaces.privateIPAddress.toLowerCase());
          output.ipConfigurations[index].privateIPAddressVersion.toLowerCase().should.equal(networkInterfaces.privateIPAddressVersion.toLowerCase());
          output.ipConfigurations[index].name.toLowerCase().should.equal(networkInterfaces.ipConfigurationName.toLowerCase());
          output.dnsSettings.internalDnsNameLabel.toLowerCase().should.equal(networkInterfaces.internalDnsNameLabel.toLowerCase());
          output.enableAcceleratedNetworking.should.equal(utils.parseBool(networkInterfaces.enableAcceleratedNetworking));
          output.enableIPForwarding.should.equal(utils.parseBool(networkInterfaces.enableIPForwarding));
          done();
        });
      });
      it('show should display network interfaces details', function (done) {
        var cmd = 'network nic show -g {group} -n {name} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(networkInterfaces.name);
          output.ipConfigurations[index].privateIPAddress.toLowerCase().should.equal(networkInterfaces.privateIPAddress.toLowerCase());
          output.ipConfigurations[index].privateIPAddressVersion.toLowerCase().should.equal(networkInterfaces.privateIPAddressVersion.toLowerCase());
          output.ipConfigurations[index].name.toLowerCase().should.equal(networkInterfaces.ipConfigurationName.toLowerCase());
          output.dnsSettings.internalDnsNameLabel.toLowerCase().should.equal(networkInterfaces.internalDnsNameLabel.toLowerCase());
          output.enableAcceleratedNetworking.should.equal(utils.parseBool(networkInterfaces.enableAcceleratedNetworking));
          output.enableIPForwarding.should.equal(utils.parseBool(networkInterfaces.enableIPForwarding));
          done();
        });
      });
      it('set should update network interfaces', function (done) {
        var cmd = 'network nic set -g {group} -n {name} --internal-dns-name-label {internalDnsNameLabelNew} --enable-accelerated-networking {enableAcceleratedNetworkingNew} --enable-ip-forwarding {enableIPForwardingNew} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(networkInterfaces.name);
          output.dnsSettings.internalDnsNameLabel.toLowerCase().should.equal(networkInterfaces.internalDnsNameLabelNew.toLowerCase());
          output.enableAcceleratedNetworking.should.equal(utils.parseBool(networkInterfaces.enableAcceleratedNetworkingNew));
          output.enableIPForwarding.should.equal(utils.parseBool(networkInterfaces.enableIPForwardingNew));
          done();
        });
      });
      it('list should display all network interfaces in resource group', function (done) {
        var cmd = 'network nic list -g {group} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === networkInterfaces.name;
          }).should.be.true;
          done();
        });
      });
      it('effective-route-table should fail to perform get effective route table operation successfully', function (done) {
        var cmd = 'network nic effective-route-table show -g {group} --nic-name {networkInterfaceName} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('effective-nsg should fail to perform list effective network security groups operation successfully', function (done) {
        var cmd = 'network nic effective-nsg list -g {group} --nic-name {networkInterfaceName} --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('delete should delete network interfaces', function (done) {
        var cmd = 'network nic delete -g {group} -n {name} --quiet --json'.formatArgs(networkInterfaces);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nic show -g {group} -n {name} --json'.formatArgs(networkInterfaces);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;
            done();
          });
        });
      });
      it('create should fail for invalid private ip address', function (done) {
        var cmd = 'network nic create -g {group} -n {name} --private-ip-address {privateIPAddress} --location {location} --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(invalidPrivateIPAddress);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for ip version out of range', function (done) {
        var cmd = 'network nic create -g {group} -n {name} --private-ip-version {privateIPAddressVersion} --location {location} --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(ipVersionOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid ip forwarding', function (done) {
        var cmd = 'network nic create -g {group} -n {name} --enable-ip-forwarding {enableIPForwarding} --location {location} --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(invalidIPForwarding);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('attach nsg to nic should pass', function (done) {
        var cmd = 'network nic create -g {group} -n {name} --location {location} --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(attachNsgToNic);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(attachNsgToNic.name);
          output.ipConfigurations[index].subnet.id.should.containEql(attachNsgToNic.subnetName);
          output.ipConfigurations[index].publicIPAddress.id.should.containEql(attachNsgToNic.publicIPAddressName);

          cmd = 'network nic set -g {group} -n {name} --network-security-group-name {networkSecurityGroupName} --json'.formatArgs(attachNsgToNic);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(attachNsgToNic.name);
            output.networkSecurityGroup.id.should.containEql(attachNsgToNic.networkSecurityGroupName);
            done();
          });
        });
      });
      it('detach nsg from nic should pass', function (done) {
        var cmd = 'network nic set -g {group} -n {name} --network-security-group-name --json'.formatArgs(detachNsgFromNic);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(detachNsgFromNic.name);
          should.not.exist(output.networkSecurityGroup);

          cmd = 'network nic delete -g {group} -n {name} --quiet --json'.formatArgs(detachNsgFromNic);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
    });
  });
});