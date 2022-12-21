import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hola soy nueva');
  res.end();
}).listen(process.env.PORT);
