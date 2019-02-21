// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDCn10Ltqw4VaIzEBwrjSjYmPc5J6avnGk',
    authDomain: 'rajat-portfolio.firebaseapp.com',
    databaseURL: 'https://rajat-portfolio.firebaseio.com',
    projectId: 'rajat-portfolio',
    storageBucket: 'rajat-portfolio.appspot.com',
    messagingSenderId: '839794858247'
  }
};
