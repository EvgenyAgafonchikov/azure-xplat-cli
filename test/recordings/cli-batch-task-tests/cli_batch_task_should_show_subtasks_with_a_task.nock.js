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
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67DB8E2CB9\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:30.1014201Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9063636Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.2637811Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:52:28.2637811Z\",\"endTime\":\"2016-09-12T23:52:31.9063636Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-1695681911_1-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_1-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:30 GMT',
  etag: '0x8D3DB67DB8E2CB9',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1fe35deb-e075-458f-8bcb-5a99f1436d9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c23410e2-a81c-4fa5-ab5e-037e4d14ec24',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67DB8E2CB9\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:30.1014201Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9063636Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.2637811Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:52:28.2637811Z\",\"endTime\":\"2016-09-12T23:52:31.9063636Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-1695681911_1-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_1-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:30 GMT',
  etag: '0x8D3DB67DB8E2CB9',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1fe35deb-e075-458f-8bcb-5a99f1436d9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c23410e2-a81c-4fa5-ab5e-037e4d14ec24',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67DB8E2CB9\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:30.1014201Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9063636Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.2637811Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:52:28.2637811Z\",\"endTime\":\"2016-09-12T23:52:31.9063636Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-1695681911_1-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_1-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:30 GMT',
  etag: '0x8D3DB67DB8E2CB9',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '15d8878d-288e-41c8-b298-6081a5dde3f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3fc0efd6-a8b1-4ad5-9aca-adea21030c5f',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67DB8E2CB9\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:30.1014201Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9063636Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.2637811Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-09-12T23:52:28.2637811Z\",\"endTime\":\"2016-09-12T23:52:31.9063636Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-1695681911_1-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_1-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_1-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:30 GMT',
  etag: '0x8D3DB67DB8E2CB9',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '15d8878d-288e-41c8-b298-6081a5dde3f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3fc0efd6-a8b1-4ad5-9aca-adea21030c5f',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask/subtasksinfo?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    {\r\n      \"id\":1,\"startTime\":\"2016-09-12T23:52:28.406175Z\",\"endTime\":\"2016-09-12T23:52:31.9439987Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9439987Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.406175Z\",\"exitCode\":0,\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-1695681911_3-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_3-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_3-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\1\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_3-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/1\"\r\n      }\r\n    },{\r\n      \"id\":2,\"startTime\":\"2016-09-12T23:52:28.1421244Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-09-12T23:52:28.1421244Z\",\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-1695681911_2-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_2-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_2-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\2\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_2-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/2\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9cb27a9f-74f5-4a32-967e-3a258da765d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'af4ab85f-8b13-468b-a45e-89afcae72a09',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask/subtasksinfo?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    {\r\n      \"id\":1,\"startTime\":\"2016-09-12T23:52:28.406175Z\",\"endTime\":\"2016-09-12T23:52:31.9439987Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-09-12T23:52:31.9439987Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-09-12T23:52:28.406175Z\",\"exitCode\":0,\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-1695681911_3-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_3-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_3-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\1\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_3-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/1\"\r\n      }\r\n    },{\r\n      \"id\":2,\"startTime\":\"2016-09-12T23:52:28.1421244Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-09-12T23:52:28.1421244Z\",\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-1695681911_2-20160912t234752z\",\"nodeUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_2-20160912t234752z\",\"poolId\":\"xplatTestPool\",\"nodeId\":\"tvm-1695681911_2-20160912t234752z\",\"taskRootDirectory\":\"\\\\workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\2\",\"taskRootDirectoryUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1695681911_2-20160912t234752z/files//workitems/xplatjobfortasktests/job-1/xplattask/2\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9cb27a9f-74f5-4a32-967e-3a258da765d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'af4ab85f-8b13-468b-a45e-89afcae72a09',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:34 GMT',
  connection: 'close' });
 return result; }]];