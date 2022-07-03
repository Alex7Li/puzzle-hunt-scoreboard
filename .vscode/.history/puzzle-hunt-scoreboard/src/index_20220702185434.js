const app = require('./app');

const port = '8888';
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
