// ! Don't convert require into import
require('module-alias/register');
const moduleAlias = require('module-alias');

moduleAlias.addAlias('@', __dirname);

import { createApp } from './app';
import { connectDB } from './db';
import { startServer } from './server';

(async () => {
  await connectDB();
  const app = createApp();

  app.get('/', (req, res) => {
    res.send(
      `Hello World from ${process.env.NODE_ENV} ${process.env.SERVICE_NAME}`
    );
  });

  startServer(app);
})().catch((err) => {
  console.error(err);
});
