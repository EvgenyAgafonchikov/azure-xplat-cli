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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/536121f3-e0b6-4583-9341-a676f0c32d80?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/536121f3-e0b6-4583-9341-a676f0c32d80?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '536121f3-e0b6-4583-9341-a676f0c32d80',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': 'ef770bbb-d7f9-4a4b-9cae-c53fa38405f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081308Z:ef770bbb-d7f9-4a4b-9cae-c53fa38405f9',
  date: 'Tue, 16 Aug 2016 08:13:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/536121f3-e0b6-4583-9341-a676f0c32d80?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:13:07.291716+00:00\",\r\n  \"endTime\": \"2016-08-16T08:13:07.7760723+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"536121f3-e0b6-4583-9341-a676f0c32d80\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '60f12538-e96a-428e-902b-c0efa11d193b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': 'ac7903d7-1af6-4f62-8815-4a18dd3fefa8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081339Z:ac7903d7-1af6-4f62-8815-4a18dd3fefa8',
  date: 'Tue, 16 Aug 2016 08:13:38 GMT' });
 return result; }]];