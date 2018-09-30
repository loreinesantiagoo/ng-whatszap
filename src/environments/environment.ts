// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBhsJKujKhAkUPLoW5FeE2yMrstT8vTM30",
    authDomain: "chat-app-acea7.firebaseapp.com",
    databaseURL: "https://chat-app-acea7.firebaseio.com",
    projectId: "chat-app-acea7",
    storageBucket: "chat-app-acea7.appspot.com",
    messagingSenderId: "189475517778"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.