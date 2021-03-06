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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.1.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.1.65235\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.5.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.5.65235\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '611',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '18af378b-0cf3-4a75-9fd3-38d90bcdb5a7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14885',
  'x-ms-correlation-request-id': 'd1bd5a09-da8d-4b84-bd9d-3df6c5395abc',
  'x-ms-routing-request-id': 'WESTUS:20170602T151912Z:d1bd5a09-da8d-4b84-bd9d-3df6c5395abc',
  date: 'Fri, 02 Jun 2017 15:19:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.1.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.1.65235\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.5.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.5.65235\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '611',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '18af378b-0cf3-4a75-9fd3-38d90bcdb5a7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14885',
  'x-ms-correlation-request-id': 'd1bd5a09-da8d-4b84-bd9d-3df6c5395abc',
  'x-ms-routing-request-id': 'WESTUS:20170602T151912Z:d1bd5a09-da8d-4b84-bd9d-3df6c5395abc',
  date: 'Fri, 02 Jun 2017 15:19:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions/11.1.65235?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.1.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.1.65235\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '5f559bbb-21bf-4432-aea9-9c4ac00e8880',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-correlation-request-id': 'ca9dc4e5-9650-4488-b72e-df49eeb7cddb',
  'x-ms-routing-request-id': 'WESTUS:20170602T151913Z:ca9dc4e5-9650-4488-b72e-df49eeb7cddb',
  date: 'Fri, 02 Jun 2017 15:19:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions/11.1.65235?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.1.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.1.65235\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '5f559bbb-21bf-4432-aea9-9c4ac00e8880',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-correlation-request-id': 'ca9dc4e5-9650-4488-b72e-df49eeb7cddb',
  'x-ms-routing-request-id': 'WESTUS:20170602T151913Z:ca9dc4e5-9650-4488-b72e-df49eeb7cddb',
  date: 'Fri, 02 Jun 2017 15:19:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions/11.5.65235?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.5.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.5.65235\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '37c764b9-bd76-42b4-b3fb-2ef50dd81136',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': 'f275af5a-1765-440b-b2b0-991a08e3348f',
  'x-ms-routing-request-id': 'WESTUS:20170602T151913Z:f275af5a-1765-440b-b2b0-991a08e3348f',
  date: 'Fri, 02 Jun 2017 15:19:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Enterprise/versions/11.5.65235?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.5.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise/Versions/11.5.65235\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416',
  'x-ms-request-id': '37c764b9-bd76-42b4-b3fb-2ef50dd81136',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': 'f275af5a-1765-440b-b2b0-991a08e3348f',
  'x-ms-routing-request-id': 'WESTUS:20170602T151913Z:f275af5a-1765-440b-b2b0-991a08e3348f',
  date: 'Fri, 02 Jun 2017 15:19:12 GMT',
  connection: 'close' });
 return result; }]];
