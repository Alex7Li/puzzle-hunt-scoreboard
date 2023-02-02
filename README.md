# puzzle-hunt

[View the live site!](https://cmu-puzzle-hunt.web.app)

## Development

[Firebase project](https://console.firebase.google.com/u/0/project/cmu-puzzle-hunt/database/cmu-puzzle-hunt-default-rtdb/data)

If you want to add new files,
make sure to edit the webpack.config.js to link them correctly, or it
will not work.

#### Local testing

```bash
npm install
npm run build
npm start
```

#### Deploy to cloud

```bash
npm run build_prod
npm run deploy
```
