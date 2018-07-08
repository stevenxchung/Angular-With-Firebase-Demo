// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCkilEFP5yLB2RQKKEezAqHNflPImPi0GM",
    authDomain: "angular-with-firebase-demo.firebaseapp.com",
    databaseURL: "https://angular-with-firebase-demo.firebaseio.com",
    projectId: "angular-with-firebase-demo",
    storageBucket: "angular-with-firebase-demo.appspot.com",
    messagingSenderId: "568462320620"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
