const app = require('./app');
const favicon = require('serve-favicon');
const path = require('path');

const port = '8888';
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
