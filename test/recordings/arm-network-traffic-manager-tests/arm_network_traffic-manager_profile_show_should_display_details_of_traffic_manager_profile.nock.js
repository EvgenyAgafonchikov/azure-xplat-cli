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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8dcf47ed-5e56-4996-8749-3920a6cfa3e1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'd6dc596e-59d6-4396-9abc-28f22f0c3d54',
  'x-ms-routing-request-id': 'CANADAEAST:20170323T071458Z:d6dc596e-59d6-4396-9abc-28f22f0c3d54',
  date: 'Thu, 23 Mar 2017 07:14:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8dcf47ed-5e56-4996-8749-3920a6cfa3e1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'd6dc596e-59d6-4396-9abc-28f22f0c3d54',
  'x-ms-routing-request-id': 'CANADAEAST:20170323T071458Z:d6dc596e-59d6-4396-9abc-28f22f0c3d54',
  date: 'Thu, 23 Mar 2017 07:14:58 GMT',
  connection: 'close' });
 return result; }]];