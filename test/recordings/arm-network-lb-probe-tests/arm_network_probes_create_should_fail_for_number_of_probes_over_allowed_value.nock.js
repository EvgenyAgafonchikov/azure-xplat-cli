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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"60be1ccc-4259-48f1-a925-1029aea11b1e\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8f53bfc0-c7c2-4f6d-9706-571290fcb975\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"60be1ccc-4259-48f1-a925-1029aea11b1e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1342',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"60be1ccc-4259-48f1-a925-1029aea11b1e"',
  'x-ms-request-id': 'ae0e0054-8b9c-4380-9554-af23e250bcf4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '476b8c29-1162-4196-8fc7-9e29e927f927',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T135606Z:476b8c29-1162-4196-8fc7-9e29e927f927',
  date: 'Thu, 09 Feb 2017 13:56:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"60be1ccc-4259-48f1-a925-1029aea11b1e\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8f53bfc0-c7c2-4f6d-9706-571290fcb975\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"60be1ccc-4259-48f1-a925-1029aea11b1e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1342',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"60be1ccc-4259-48f1-a925-1029aea11b1e"',
  'x-ms-request-id': 'ae0e0054-8b9c-4380-9554-af23e250bcf4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '476b8c29-1162-4196-8fc7-9e29e927f927',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T135606Z:476b8c29-1162-4196-8fc7-9e29e927f927',
  date: 'Thu, 09 Feb 2017 13:56:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NumberOfProbesIsOutOfRange\",\r\n    \"message\": \"NumberOfProbes value for probe NumberOfProbesOverAllowedValueName is out of range. When IntervalInSeconds is 15, the value must be between 1 and 143165576.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1c85d836-2a78-4fef-ab15-1c575cffd0f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8a9e21a3-3a71-4e24-be15-d318262cf6ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T135607Z:8a9e21a3-3a71-4e24-be15-d318262cf6ed',
  date: 'Thu, 09 Feb 2017 13:56:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NumberOfProbesIsOutOfRange\",\r\n    \"message\": \"NumberOfProbes value for probe NumberOfProbesOverAllowedValueName is out of range. When IntervalInSeconds is 15, the value must be between 1 and 143165576.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1c85d836-2a78-4fef-ab15-1c575cffd0f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8a9e21a3-3a71-4e24-be15-d318262cf6ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170209T135607Z:8a9e21a3-3a71-4e24-be15-d318262cf6ed',
  date: 'Thu, 09 Feb 2017 13:56:07 GMT',
  connection: 'close' });
 return result; }]];