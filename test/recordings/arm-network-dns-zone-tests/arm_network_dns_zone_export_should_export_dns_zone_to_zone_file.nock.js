// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-ee39-c8aaad07d301\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '472',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-ee39-c8aaad07d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '38c3d9f8-cc9c-4f25-87e4-012c5c11234e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f715868d-f8ea-4c47-88ee-8cb57a1bacc2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T142748Z:f715868d-f8ea-4c47-88ee-8cb57a1bacc2',
  date: 'Fri, 28 Jul 2017 14:27:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-ee39-c8aaad07d301\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '472',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-ee39-c8aaad07d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '38c3d9f8-cc9c-4f25-87e4-012c5c11234e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f715868d-f8ea-4c47-88ee-8cb57a1bacc2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T142748Z:f715868d-f8ea-4c47-88ee-8cb57a1bacc2',
  date: 'Fri, 28 Jul 2017 14:27:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"c4c74208-726b-4b05-8636-6b7c798915dd\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"c0720cad-1e11-423c-bef1-03b73b082a50\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.exampledns.com.\",\"expireTime\":1814400,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"0dde53fc-51a2-48f3-9318-7c756a581899\",\"properties\":{\"fqdn\":\"default.exampledns.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cedcb6e2-c038-4baf-a468-f54f336487b5\",\"properties\":{\"fqdn\":\"tc.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.exampledns.com.\"}}}]}", { 'cache-control': 'private',
  'content-length': '1721',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7cafdf42-671a-4542-bcc2-6a52cab95deb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b099c805-4e4e-4a86-89d9-a2a65d1c673d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T142749Z:b099c805-4e4e-4a86-89d9-a2a65d1c673d',
  date: 'Fri, 28 Jul 2017 14:27:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"c4c74208-726b-4b05-8636-6b7c798915dd\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"c0720cad-1e11-423c-bef1-03b73b082a50\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.exampledns.com.\",\"expireTime\":1814400,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"0dde53fc-51a2-48f3-9318-7c756a581899\",\"properties\":{\"fqdn\":\"default.exampledns.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cedcb6e2-c038-4baf-a468-f54f336487b5\",\"properties\":{\"fqdn\":\"tc.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.exampledns.com.\"}}}]}", { 'cache-control': 'private',
  'content-length': '1721',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7cafdf42-671a-4542-bcc2-6a52cab95deb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b099c805-4e4e-4a86-89d9-a2a65d1c673d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T142749Z:b099c805-4e4e-4a86-89d9-a2a65d1c673d',
  date: 'Fri, 28 Jul 2017 14:27:49 GMT',
  connection: 'close' });
 return result; }]];