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
  .post('/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '740bedef-6ace-4e31-ad4c-6fbe62532068',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '5728a3d1-039e-45ac-bc95-f2517e9d6e91',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling',
  date: 'Mon, 12 Sep 2016 23:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '740bedef-6ace-4e31-ad4c-6fbe62532068',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '5728a3d1-039e-45ac-bc95-f2517e9d6e91',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling',
  date: 'Mon, 12 Sep 2016 23:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_1-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z\",\"state\":\"offline\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-12T23:35:48.0610989Z\",\"lastBootTime\":\"2016-09-08T18:29:42.3920502Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.172.87\",\"affinityId\":\"TVM:tvm-3850571994_1-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-09-08T18:29:44.4090618Z\",\"endTime\":\"2016-09-08T18:29:44.6060647Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ccadbdac-e63e-4217-a0d5-09d5db1600f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c89bf4dc-d5d8-42d7-bd17-a52b56520d1a',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_1-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z\",\"state\":\"offline\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-12T23:35:48.0610989Z\",\"lastBootTime\":\"2016-09-08T18:29:42.3920502Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.172.87\",\"affinityId\":\"TVM:tvm-3850571994_1-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-09-08T18:29:44.4090618Z\",\"endTime\":\"2016-09-08T18:29:44.6060647Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ccadbdac-e63e-4217-a0d5-09d5db1600f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c89bf4dc-d5d8-42d7-bd17-a52b56520d1a',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:50 GMT',
  connection: 'close' });
 return result; }]];