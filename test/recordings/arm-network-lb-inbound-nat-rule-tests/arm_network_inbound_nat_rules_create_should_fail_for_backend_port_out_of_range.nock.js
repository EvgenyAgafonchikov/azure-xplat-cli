// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5c743de7-8107-43a6-938f-9cda105f4219\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"15c21339-d447-4f9a-b135-cbab40a04d5f\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"5c743de7-8107-43a6-938f-9cda105f4219\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5c743de7-8107-43a6-938f-9cda105f4219"',
  'x-ms-request-id': 'c8f5d43b-d730-4488-b115-fce5401b5207',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '24edbee5-674d-40b6-8d40-b969b1fe705e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T140908Z:24edbee5-674d-40b6-8d40-b969b1fe705e',
  date: 'Thu, 09 Feb 2017 14:09:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5c743de7-8107-43a6-938f-9cda105f4219\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"15c21339-d447-4f9a-b135-cbab40a04d5f\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"5c743de7-8107-43a6-938f-9cda105f4219\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5c743de7-8107-43a6-938f-9cda105f4219"',
  'x-ms-request-id': 'c8f5d43b-d730-4488-b115-fce5401b5207',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '24edbee5-674d-40b6-8d40-b969b1fe705e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T140908Z:24edbee5-674d-40b6-8d40-b969b1fe705e',
  date: 'Thu, 09 Feb 2017 14:09:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource BackendPortOutOfRangeName has invalid value of BackendPort (65536). The value must be between 1 and 65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '215',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61212fdb-ddc9-4951-8979-b6085cf68451',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '131fd57e-f165-4e61-9924-9c7ed8007f8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T140909Z:131fd57e-f165-4e61-9924-9c7ed8007f8f',
  date: 'Thu, 09 Feb 2017 14:09:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource BackendPortOutOfRangeName has invalid value of BackendPort (65536). The value must be between 1 and 65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '215',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61212fdb-ddc9-4951-8979-b6085cf68451',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '131fd57e-f165-4e61-9924-9c7ed8007f8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T140909Z:131fd57e-f165-4e61-9924-9c7ed8007f8f',
  date: 'Thu, 09 Feb 2017 14:09:09 GMT',
  connection: 'close' });
 return result; }]];