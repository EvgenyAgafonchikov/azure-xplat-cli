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
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:52:37 GMT',
  etag: '0x8D3DB67E03E2113',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e7045599-f639-4d97-b7c1-87f59ee175f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '05141feb-3219-41c2-8d80-1de34b32d5b9',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  date: 'Mon, 12 Sep 2016 23:52:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:52:37 GMT',
  etag: '0x8D3DB67E03E2113',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e7045599-f639-4d97-b7c1-87f59ee175f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '05141feb-3219-41c2-8d80-1de34b32d5b9',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  date: 'Mon, 12 Sep 2016 23:52:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"aaa\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa\",\"eTag\":\"0x8D3DB67E03E2113\",\"creationTime\":\"2016-09-12T23:52:37.9654419Z\",\"lastModified\":\"2016-09-12T23:52:37.9654419Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:52:37.9654419Z\",\"commandLine\":\"echo hello\",\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:37 GMT',
  etag: '0x8D3DB67E03E2113',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '95c872c5-61cc-4629-bf7d-055260b43455',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '42b98e6d-682a-4dfe-a94d-79dabdcd0e3c',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"aaa\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa\",\"eTag\":\"0x8D3DB67E03E2113\",\"creationTime\":\"2016-09-12T23:52:37.9654419Z\",\"lastModified\":\"2016-09-12T23:52:37.9654419Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:52:37.9654419Z\",\"commandLine\":\"echo hello\",\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:37 GMT',
  etag: '0x8D3DB67E03E2113',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '95c872c5-61cc-4629-bf7d-055260b43455',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '42b98e6d-682a-4dfe-a94d-79dabdcd0e3c',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6154d2c0-8e98-49c8-b066-670128ec7ca1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7aeba162-5ab1-4b92-bfe2-7c1262d48301',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6154d2c0-8e98-49c8-b066-670128ec7ca1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7aeba162-5ab1-4b92-bfe2-7c1262d48301',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:37 GMT',
  connection: 'close' });
 return result; }]];