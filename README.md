# puzzle-hunt

[View the live site!](https://cmu-puzzle-hunt.web.app)

## Development

You need the api key from firebase in your
.env file to connect, it is a secret though :)

Other than that you should be good to go.
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
