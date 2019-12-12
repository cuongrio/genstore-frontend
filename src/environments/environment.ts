// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '0.0.1',
  build: 27,
  apiBaseUrl: 'http://localhost:9000/v1',
  apiProxy: '',
  sellerUrl: 'http://localhost:9000',
  platform: 'web',
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
  showBuild: true
};
