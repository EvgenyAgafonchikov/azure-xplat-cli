// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'x-ms-correlation-request-id': 'dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122540Z:dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:25:40 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'x-ms-correlation-request-id': 'dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122540Z:dd36ab1d-3c03-4343-89a5-455f217cc5f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:25:40 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"b59c43f0-c60d-4303-90e0-58f9c667059e\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '0ca4891f-b06e-4e76-a002-7e808f4fe77d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/0ca4891f-b06e-4e76-a002-7e808f4fe77d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ae96a61e-91bb-4054-b491-25ab8797b413',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122544Z:ae96a61e-91bb-4054-b491-25ab8797b413',
  date: 'Mon, 18 Sep 2017 12:25:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"b59c43f0-c60d-4303-90e0-58f9c667059e\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '0ca4891f-b06e-4e76-a002-7e808f4fe77d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/0ca4891f-b06e-4e76-a002-7e808f4fe77d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ae96a61e-91bb-4054-b491-25ab8797b413',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122544Z:ae96a61e-91bb-4054-b491-25ab8797b413',
  date: 'Mon, 18 Sep 2017 12:25:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/0ca4891f-b06e-4e76-a002-7e808f4fe77d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd331b0e2-c37a-44c1-b692-dce78d643892',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '704ef080-8349-4f44-a18c-1e5e8fd5b93f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122614Z:704ef080-8349-4f44-a18c-1e5e8fd5b93f',
  date: 'Mon, 18 Sep 2017 12:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/0ca4891f-b06e-4e76-a002-7e808f4fe77d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd331b0e2-c37a-44c1-b692-dce78d643892',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '704ef080-8349-4f44-a18c-1e5e8fd5b93f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122614Z:704ef080-8349-4f44-a18c-1e5e8fd5b93f',
  date: 'Mon, 18 Sep 2017 12:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8"',
  'x-ms-request-id': '4191ffff-d6ea-4ce1-9229-3352f02e1d98',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'ba8be216-27a9-448f-83d9-73109aa0ecf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122615Z:ba8be216-27a9-448f-83d9-73109aa0ecf2',
  date: 'Mon, 18 Sep 2017 12:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8"',
  'x-ms-request-id': '4191ffff-d6ea-4ce1-9229-3352f02e1d98',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'ba8be216-27a9-448f-83d9-73109aa0ecf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122615Z:ba8be216-27a9-448f-83d9-73109aa0ecf2',
  date: 'Mon, 18 Sep 2017 12:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8"',
  'x-ms-request-id': '18a99db7-ea6a-4106-9c48-c22cc12e4548',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '215b12f8-1458-4c03-9f13-b1f88ee1a2a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122616Z:215b12f8-1458-4c03-9f13-b1f88ee1a2a7',
  date: 'Mon, 18 Sep 2017 12:26:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName\",\r\n  \"etag\": \"W/\\\"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71c10887-73c4-4dc5-9beb-0f61e6f60b52\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cf81ef5-7740-4d1b-b564-9cd5a7db8bf8"',
  'x-ms-request-id': '18a99db7-ea6a-4106-9c48-c22cc12e4548',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '215b12f8-1458-4c03-9f13-b1f88ee1a2a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122616Z:215b12f8-1458-4c03-9f13-b1f88ee1a2a7',
  date: 'Mon, 18 Sep 2017 12:26:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operationResults/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '4ecb819f-77e7-4533-8854-8e02f1767cc8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f62773b5-581e-404f-8be5-9c9334c3f5b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122618Z:f62773b5-581e-404f-8be5-9c9334c3f5b9',
  date: 'Mon, 18 Sep 2017 12:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressesDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operationResults/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '4ecb819f-77e7-4533-8854-8e02f1767cc8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f62773b5-581e-404f-8be5-9c9334c3f5b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122618Z:f62773b5-581e-404f-8be5-9c9334c3f5b9',
  date: 'Mon, 18 Sep 2017 12:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64e2d5dc-df71-4330-95e6-07b5dfcb5b2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '89e60d1b-d85b-423f-a060-9f4fc0e88cf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122648Z:89e60d1b-d85b-423f-a060-9f4fc0e88cf9',
  date: 'Mon, 18 Sep 2017 12:26:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/4ecb819f-77e7-4533-8854-8e02f1767cc8?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64e2d5dc-df71-4330-95e6-07b5dfcb5b2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '89e60d1b-d85b-423f-a060-9f4fc0e88cf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122648Z:89e60d1b-d85b-423f-a060-9f4fc0e88cf9',
  date: 'Mon, 18 Sep 2017 12:26:47 GMT',
  connection: 'close' });
 return result; }]];