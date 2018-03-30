# Docker Express Sequilize  app

This is a test application using all five of the technologies above with a mysql db.

`

## Running

1. Make sure you have mongo running locally. If you dont the comment out the mongoose connection stuff in server.js
2. `npm start`

`npm start` will run nodemon, if you dont have it installed globally then you can do so via

```javascript

npm install nodemon -g

```

If you don't want nodemon then you can change the start command in the package.json file to `node server.js` or whatever you want.