// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '21466899-20b2-463c-8c30-b8fb28a43248',
    name: 'Core-RP Alpha Subscription-11',
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
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xplatTestGAvailCreate4781/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail4755?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xplatTestGAvailCreate4781/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail4755\",\r\n  \"name\": \"xplatTestaAvail4755\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '308aaa92-93da-4b8b-84a4-0e571e1a068d_131303607812456041',
  'x-ms-request-id': 'b3dd9ab3-3f1d-4195-9a56-4a9c35fafa92',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd714b7b2-6e00-4533-b3f2-dd09e714ba60',
  'x-ms-routing-request-id': 'CENTRALUS:20170131T224653Z:d714b7b2-6e00-4533-b3f2-dd09e714ba60',
  date: 'Tue, 31 Jan 2017 22:46:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xplatTestGAvailCreate4781/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail4755?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xplatTestGAvailCreate4781/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail4755\",\r\n  \"name\": \"xplatTestaAvail4755\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '308aaa92-93da-4b8b-84a4-0e571e1a068d_131303607812456041',
  'x-ms-request-id': 'b3dd9ab3-3f1d-4195-9a56-4a9c35fafa92',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd714b7b2-6e00-4533-b3f2-dd09e714ba60',
  'x-ms-routing-request-id': 'CENTRALUS:20170131T224653Z:d714b7b2-6e00-4533-b3f2-dd09e714ba60',
  date: 'Tue, 31 Jan 2017 22:46:53 GMT',
  connection: 'close' });
 return result; }]];