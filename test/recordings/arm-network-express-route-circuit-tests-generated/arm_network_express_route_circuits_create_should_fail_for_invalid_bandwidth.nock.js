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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidBandwidthName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cba9feab-160e-4fad-97d8-5c32038af578',
  'x-ms-correlation-request-id': 'cba9feab-160e-4fad-97d8-5c32038af578',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130229Z:cba9feab-160e-4fad-97d8-5c32038af578',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Jul 2017 13:02:28 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidBandwidthName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cba9feab-160e-4fad-97d8-5c32038af578',
  'x-ms-correlation-request-id': 'cba9feab-160e-4fad-97d8-5c32038af578',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130229Z:cba9feab-160e-4fad-97d8-5c32038af578',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Jul 2017 13:02:28 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider Equinix specified for Express Route Circuit /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7779497b-49f0-4774-b0d4-47e3df9ece9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd6cfbdec-ce72-43d6-82e2-d15d38cd510c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130237Z:d6cfbdec-ce72-43d6-82e2-d15d38cd510c',
  date: 'Wed, 12 Jul 2017 13:02:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider Equinix specified for Express Route Circuit /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidBandwidthName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7779497b-49f0-4774-b0d4-47e3df9ece9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd6cfbdec-ce72-43d6-82e2-d15d38cd510c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130237Z:d6cfbdec-ce72-43d6-82e2-d15d38cd510c',
  date: 'Wed, 12 Jul 2017 13:02:37 GMT',
  connection: 'close' });
 return result; }]];