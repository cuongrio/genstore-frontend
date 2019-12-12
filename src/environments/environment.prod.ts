export const environment = {
  production: true,
  version: '0.0.1',
  build: 27,
  platform: 'web',
  apiBaseUrl: 'http://localhost:9000/v1',
  apiProxy: '/api/v1',
  sellerUrl: 'http://localhost:9000',
  googleClientId: '917195124089-hp1m6g5fbotlkbipmrejrapt9uh0lhhl.apps.googleusercontent.com',
  facebookAppId: '113570925979091',
  paymentRedirectSuccessUrl: 'http://localhost:4200/cart/checkout/success',
  paymentRedirectCancelUrl: 'http://localhost:4200/cart/checkout/cancel',
  stripeKey: 'pk_test_Z3rf3HSfsokHl4lLFTBxhZrZ',
  pusher: {
    appId: 591974,
    key: '8cbf727dad3c8ce84888',
    cluster: 'ap1'
  },
  showBuild: false
};

