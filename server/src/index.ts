import express from 'express';
import routerAuth from './router/auth.router';

const app = express();

const PORT = 3000

app.use(express.json());
app.use('/api',routerAuth)

app.listen(PORT , () => {
  console.log(`server Runnig port ${PORT}`);
});
