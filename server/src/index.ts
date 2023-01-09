
import express from 'express';
import connectionMongoDb from './db/connect';
import routerAuth from './router/auth.router';
import userrouter from './router/user.router';

const app = express();

const PORT = 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', routerAuth)
app.use('/user', userrouter)

app.listen(PORT ,() => {
  connectionMongoDb();
  console.log(`server Runnig port ${PORT}`);
});
