// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Mon, 12 Sep 2016 23:52:38 GMT',
  etag: '0x8D3DB67E0CECB76',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '725f5ecc-7a23-4573-9e8f-823fbd0aa6a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ebd4cf94-d692-408e-a111-30cd1e38ee71',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate',
  date: 'Mon, 12 Sep 2016 23:52:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate?api-version=2016-07-01.3.1&timeout=30')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Mon, 12 Sep 2016 23:52:38 GMT',
  etag: '0x8D3DB67E0CECB76',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '725f5ecc-7a23-4573-9e8f-823fbd0aa6a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ebd4cf94-d692-408e-a111-30cd1e38ee71',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate',
  date: 'Mon, 12 Sep 2016 23:52:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask1?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask1\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\",\"eTag\":\"0x8D3DB67E0CECB76\",\"creationTime\":\"2016-09-12T23:52:38.6209661Z\",\"lastModified\":\"2016-09-12T23:52:38.9135222Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:38.9135222Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-09-12T23:52:38.6209661Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"endTime\":\"2016-09-12T23:52:38.9135222Z\",\"schedulingError\":{\r\n      \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n    },\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:38 GMT',
  etag: '0x8D3DB67E0CECB76',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c3ef6d77-be1b-4f54-ac91-3865e2e56ac1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ab26faf7-9d92-49fb-b588-b6cc710051ff',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask1?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask1\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\",\"eTag\":\"0x8D3DB67E0CECB76\",\"creationTime\":\"2016-09-12T23:52:38.6209661Z\",\"lastModified\":\"2016-09-12T23:52:38.9135222Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:38.9135222Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-09-12T23:52:38.6209661Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"endTime\":\"2016-09-12T23:52:38.9135222Z\",\"schedulingError\":{\r\n      \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n    },\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:38 GMT',
  etag: '0x8D3DB67E0CECB76',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c3ef6d77-be1b-4f54-ac91-3865e2e56ac1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ab26faf7-9d92-49fb-b588-b6cc710051ff',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:39 GMT',
  connection: 'close' });
 return result; }]];