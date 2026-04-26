import express from 'express';
import { handleRequest } from './router';

const app = express();
app.use(express.json());
app.all('*', handleRequest);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Gateway listening on port ${port}`);
});