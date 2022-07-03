const app = require('./app');
const favicon = require('serve-favicon');
const path = require('path');

const port = '8887';

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
