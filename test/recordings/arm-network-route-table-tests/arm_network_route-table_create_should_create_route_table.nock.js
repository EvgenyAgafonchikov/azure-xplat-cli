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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '7f14d7d7-5e37-4481-ae82-203a556f6251',
  'x-ms-correlation-request-id': '7f14d7d7-5e37-4481-ae82-203a556f6251',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113055Z:7f14d7d7-5e37-4481-ae82-203a556f6251',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:55 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '7f14d7d7-5e37-4481-ae82-203a556f6251',
  'x-ms-correlation-request-id': '7f14d7d7-5e37-4481-ae82-203a556f6251',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113055Z:7f14d7d7-5e37-4481-ae82-203a556f6251',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:55 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table\",\"name\":\"xplat-test-route-table\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'x-ms-correlation-request-id': '7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113058Z:7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table\",\"name\":\"xplat-test-route-table\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'x-ms-correlation-request-id': '7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113058Z:7f767cb5-ea78-4afe-b1bb-1a934db9699a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'x-ms-correlation-request-id': 'cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113059Z:cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:59 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'x-ms-correlation-request-id': 'cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113059Z:cb377b10-4bc8-4630-9ea5-d6f40d6e629c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Feb 2016 11:30:59 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"0bb2a466-c972-41c6-a162-d52e8c2d6068\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"fe2a00f3-8252-4d6a-8425-9247d3ca8229\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '519',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9d6cb6e1-2b36-4b0d-94c7-907c315e49f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/9d6cb6e1-2b36-4b0d-94c7-907c315e49f0?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1187a374-90e3-47fa-ab27-597b02d706fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113105Z:1187a374-90e3-47fa-ab27-597b02d706fb',
  date: 'Mon, 15 Feb 2016 11:31:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"0bb2a466-c972-41c6-a162-d52e8c2d6068\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"fe2a00f3-8252-4d6a-8425-9247d3ca8229\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '519',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9d6cb6e1-2b36-4b0d-94c7-907c315e49f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/9d6cb6e1-2b36-4b0d-94c7-907c315e49f0?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1187a374-90e3-47fa-ab27-597b02d706fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113105Z:1187a374-90e3-47fa-ab27-597b02d706fb',
  date: 'Mon, 15 Feb 2016 11:31:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/9d6cb6e1-2b36-4b0d-94c7-907c315e49f0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4a5c8f0-0f06-450b-b823-6fa0c30247d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a0fac8c3-131e-47ea-a615-59a27c9db546',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113136Z:a0fac8c3-131e-47ea-a615-59a27c9db546',
  date: 'Mon, 15 Feb 2016 11:31:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/9d6cb6e1-2b36-4b0d-94c7-907c315e49f0?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4a5c8f0-0f06-450b-b823-6fa0c30247d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a0fac8c3-131e-47ea-a615-59a27c9db546',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113136Z:a0fac8c3-131e-47ea-a615-59a27c9db546',
  date: 'Mon, 15 Feb 2016 11:31:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"f47d371e-6dcc-4b25-a367-b7e02db1d502\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe2a00f3-8252-4d6a-8425-9247d3ca8229\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '520',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f47d371e-6dcc-4b25-a367-b7e02db1d502"',
  'x-ms-request-id': '8c9e7742-ce7d-4b23-a8a9-798c3cfbd56a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0a03bc51-b944-42e6-af13-ff86f10a2cc3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113138Z:0a03bc51-b944-42e6-af13-ff86f10a2cc3',
  date: 'Mon, 15 Feb 2016 11:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"f47d371e-6dcc-4b25-a367-b7e02db1d502\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fe2a00f3-8252-4d6a-8425-9247d3ca8229\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '520',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f47d371e-6dcc-4b25-a367-b7e02db1d502"',
  'x-ms-request-id': '8c9e7742-ce7d-4b23-a8a9-798c3cfbd56a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0a03bc51-b944-42e6-af13-ff86f10a2cc3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160215T113138Z:0a03bc51-b944-42e6-af13-ff86f10a2cc3',
  date: 'Mon, 15 Feb 2016 11:31:38 GMT',
  connection: 'close' });
 return result; }]];