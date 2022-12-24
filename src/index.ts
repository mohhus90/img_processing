import express from 'express';
import routes from './routes';
import logger from './util/logger';

const app = express();
const port = 3000;

app.use(logger);
app.use(routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
export default app;
