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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '056d9f47-50dd-4f3d-bfeb-d0db4bb284b9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b7837105-cb28-47c7-a935-c24fb4656fef',
  'x-ms-routing-request-id': 'CANADAEAST:20170323T071628Z:b7837105-cb28-47c7-a935-c24fb4656fef',
  date: 'Thu, 23 Mar 2017 07:16:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '056d9f47-50dd-4f3d-bfeb-d0db4bb284b9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b7837105-cb28-47c7-a935-c24fb4656fef',
  'x-ms-routing-request-id': 'CANADAEAST:20170323T071628Z:b7837105-cb28-47c7-a935-c24fb4656fef',
  date: 'Thu, 23 Mar 2017 07:16:27 GMT',
  connection: 'close' });
 return result; }]];