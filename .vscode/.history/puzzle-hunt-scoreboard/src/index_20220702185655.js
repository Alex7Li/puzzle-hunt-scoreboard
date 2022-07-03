const app = require('./app');
var favicon = require('serve-favicon');

const port = '8888';
app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico'))); 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
