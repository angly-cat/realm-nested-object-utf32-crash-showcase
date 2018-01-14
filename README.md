# Bug with Realm and UTF-32 in debug mode that causes app crashes on Android (at least)

## How to reproduce.

1. Clone this repo.
2. `npm install`
3. `npm start && npm run android`
4. Open the app.
5. Select "Debug JS Remotely" and the app should crash!
