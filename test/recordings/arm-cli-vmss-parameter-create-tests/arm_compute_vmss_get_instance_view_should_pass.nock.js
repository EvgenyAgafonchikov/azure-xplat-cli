// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9920/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 10\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/creating\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-01-29T09:17:25.4944109+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'ef7c4458-d4b8-4f7b-bbee-692daf42cecb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '0a981864-1436-4234-8ce8-9b56f399e6e0',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T091802Z:0a981864-1436-4234-8ce8-9b56f399e6e0',
  date: 'Sun, 29 Jan 2017 09:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9920/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 10\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"statusesSummary\": [\r\n        {\r\n          \"code\": \"ProvisioningState/creating\",\r\n          \"count\": 10\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-01-29T09:17:25.4944109+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'ef7c4458-d4b8-4f7b-bbee-692daf42cecb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '0a981864-1436-4234-8ce8-9b56f399e6e0',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T091802Z:0a981864-1436-4234-8ce8-9b56f399e6e0',
  date: 'Sun, 29 Jan 2017 09:18:02 GMT',
  connection: 'close' });
 return result; }]];