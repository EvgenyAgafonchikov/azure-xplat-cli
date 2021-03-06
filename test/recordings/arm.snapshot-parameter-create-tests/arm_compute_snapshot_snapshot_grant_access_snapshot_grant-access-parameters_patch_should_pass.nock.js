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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate9810?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810\",\"name\":\"xTestDiskCreate9810\",\"location\":\"southeastasia\",\"tags\":{\"arm.snapshot-parameter-create-tests\":\"2017-06-02T17:17:13.699Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '11b715e9-8cce-494d-b189-cc32141fb9e1',
  'x-ms-correlation-request-id': '11b715e9-8cce-494d-b189-cc32141fb9e1',
  'x-ms-routing-request-id': 'WESTUS:20170602T171901Z:11b715e9-8cce-494d-b189-cc32141fb9e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:19:00 GMT',
  connection: 'close',
  'content-length': '272' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate9810?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810\",\"name\":\"xTestDiskCreate9810\",\"location\":\"southeastasia\",\"tags\":{\"arm.snapshot-parameter-create-tests\":\"2017-06-02T17:17:13.699Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '11b715e9-8cce-494d-b189-cc32141fb9e1',
  'x-ms-correlation-request-id': '11b715e9-8cce-494d-b189-cc32141fb9e1',
  'x-ms-routing-request-id': 'WESTUS:20170602T171901Z:11b715e9-8cce-494d-b189-cc32141fb9e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:19:00 GMT',
  connection: 'close',
  'content-length': '272' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate9810?api-version=2016-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810\",\"name\":\"xTestDiskCreate9810\",\"location\":\"southeastasia\",\"tags\":{\"arm.snapshot-parameter-create-tests\":\"2017-06-02T17:19:00.560Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '699dffcc-c672-4c2b-b824-7c8306a9258e',
  'x-ms-correlation-request-id': '699dffcc-c672-4c2b-b824-7c8306a9258e',
  'x-ms-routing-request-id': 'WESTUS:20170602T171904Z:699dffcc-c672-4c2b-b824-7c8306a9258e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:19:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate9810?api-version=2016-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810\",\"name\":\"xTestDiskCreate9810\",\"location\":\"southeastasia\",\"tags\":{\"arm.snapshot-parameter-create-tests\":\"2017-06-02T17:19:00.560Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '699dffcc-c672-4c2b-b824-7c8306a9258e',
  'x-ms-correlation-request-id': '699dffcc-c672-4c2b-b824-7c8306a9258e',
  'x-ms-routing-request-id': 'WESTUS:20170602T171904Z:699dffcc-c672-4c2b-b824-7c8306a9258e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:19:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '1c08ea72-a823-44c0-9c64-adbbf6801f24',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'b1162485-15f1-44ca-aada-ce3acf870e82',
  'x-ms-routing-request-id': 'WESTUS:20170602T171907Z:b1162485-15f1-44ca-aada-ce3acf870e82',
  date: 'Fri, 02 Jun 2017 17:19:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '1c08ea72-a823-44c0-9c64-adbbf6801f24',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'b1162485-15f1-44ca-aada-ce3acf870e82',
  'x-ms-routing-request-id': 'WESTUS:20170602T171907Z:b1162485-15f1-44ca-aada-ce3acf870e82',
  date: 'Fri, 02 Jun 2017 17:19:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:19:06.1859611+00:00\",\r\n  \"endTime\": \"2017-06-02T17:19:16.6368101+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:19:06.1859611+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/snapshots\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193\",\"name\":\"xplatSnapshot2193\"}\r\n  },\r\n  \"name\": \"1c08ea72-a823-44c0-9c64-adbbf6801f24\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '760',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '75c2d8fc-4524-46d9-98f6-7a3ee147b23f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0b4ddce6-0d90-4355-8e2a-da0ce553a048',
  'x-ms-routing-request-id': 'WESTUS:20170602T171938Z:0b4ddce6-0d90-4355-8e2a-da0ce553a048',
  date: 'Fri, 02 Jun 2017 17:19:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/1c08ea72-a823-44c0-9c64-adbbf6801f24?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:19:06.1859611+00:00\",\r\n  \"endTime\": \"2017-06-02T17:19:16.6368101+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:19:06.1859611+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/snapshots\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193\",\"name\":\"xplatSnapshot2193\"}\r\n  },\r\n  \"name\": \"1c08ea72-a823-44c0-9c64-adbbf6801f24\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '760',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '75c2d8fc-4524-46d9-98f6-7a3ee147b23f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0b4ddce6-0d90-4355-8e2a-da0ce553a048',
  'x-ms-routing-request-id': 'WESTUS:20170602T171938Z:0b4ddce6-0d90-4355-8e2a-da0ce553a048',
  date: 'Fri, 02 Jun 2017 17:19:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:19:06.1859611+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/snapshots\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193\",\r\n  \"name\": \"xplatSnapshot2193\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '673',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'e860da79-5373-4919-acf5-c2de047eeb61',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1922db62-3429-405c-a7e1-cec856ec978a',
  'x-ms-routing-request-id': 'WESTUS:20170602T171939Z:1922db62-3429-405c-a7e1-cec856ec978a',
  date: 'Fri, 02 Jun 2017 17:19:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:19:06.1859611+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/snapshots\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193\",\r\n  \"name\": \"xplatSnapshot2193\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '673',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'e860da79-5373-4919-acf5-c2de047eeb61',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1922db62-3429-405c-a7e1-cec856ec978a',
  'x-ms-routing-request-id': 'WESTUS:20170602T171939Z:1922db62-3429-405c-a7e1-cec856ec978a',
  date: 'Fri, 02 Jun 2017 17:19:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193/beginGetAccess?api-version=2017-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '83109b91-cc78-4f81-ad23-5139df787f3a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '660f86ff-aa20-4678-9350-c370b3e54e29',
  'x-ms-routing-request-id': 'WESTUS:20170602T171940Z:660f86ff-aa20-4678-9350-c370b3e54e29',
  date: 'Fri, 02 Jun 2017 17:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193/beginGetAccess?api-version=2017-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '83109b91-cc78-4f81-ad23-5139df787f3a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '660f86ff-aa20-4678-9350-c370b3e54e29',
  'x-ms-routing-request-id': 'WESTUS:20170602T171940Z:660f86ff-aa20-4678-9350-c370b3e54e29',
  date: 'Fri, 02 Jun 2017 17:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:19:39.7287808+00:00\",\r\n  \"endTime\": \"2017-06-02T17:19:39.9630932+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\r\n  \"accessSAS\": \"https://md-lwm0sdb52sv3.blob.core.windows.net/lj20qx2xnq0w/abcd?sv=2016-05-31&sr=b&si=61dcedfc-83c6-4450-ba15-3befb12ea172&sig=AsmEv1QpKALRq%2BFN0jHFV5VUEsC5e0wFb2%2FirufJxgs%3D\"\r\n}\r\n  },\r\n  \"name\": \"83109b91-cc78-4f81-ad23-5139df787f3a\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'f956288f-b13e-4a31-985b-b0bc682097b1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0542f77d-d655-47a3-a867-662915c51e32',
  'x-ms-routing-request-id': 'WESTUS:20170602T172011Z:0542f77d-d655-47a3-a867-662915c51e32',
  date: 'Fri, 02 Jun 2017 17:20:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/83109b91-cc78-4f81-ad23-5139df787f3a?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:19:39.7287808+00:00\",\r\n  \"endTime\": \"2017-06-02T17:19:39.9630932+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\r\n  \"accessSAS\": \"https://md-lwm0sdb52sv3.blob.core.windows.net/lj20qx2xnq0w/abcd?sv=2016-05-31&sr=b&si=61dcedfc-83c6-4450-ba15-3befb12ea172&sig=AsmEv1QpKALRq%2BFN0jHFV5VUEsC5e0wFb2%2FirufJxgs%3D\"\r\n}\r\n  },\r\n  \"name\": \"83109b91-cc78-4f81-ad23-5139df787f3a\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'f956288f-b13e-4a31-985b-b0bc682097b1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0542f77d-d655-47a3-a867-662915c51e32',
  'x-ms-routing-request-id': 'WESTUS:20170602T172011Z:0542f77d-d655-47a3-a867-662915c51e32',
  date: 'Fri, 02 Jun 2017 17:20:11 GMT',
  connection: 'close' });
 return result; }]];