
import express from 'express';
import 'reflect-metadata';
import userRouter from './auth/infrastructure/router/user.router';
import{ dbconnet } from './db/data-source';
import routerPost from './post/infrastructure/router/post.router';
import cors from 'cors';
import { isAutorizado } from './auth/infrastructure/middleware/authHandle';

const app = express();

const PORT = 3000

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRouter)
app.use('/api', isAutorizado,routerPost)

app.listen(PORT, () => {
     dbconnet.then().catch();
  console.log(`server Runnig port ${PORT}`);
});