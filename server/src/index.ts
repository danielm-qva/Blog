
import express from 'express';
import 'reflect-metadata';
import userRouter from './auth/infrastructure/router/user.router';
import{ dbconnet } from './db/data-source';
import routerPost from './post/infrastructure/router/post.router';

const app = express();

const PORT = 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRouter)
app.use('/api' ,routerPost)

app.listen(PORT, () => {
     dbconnet.then().catch();
  console.log(`server Runnig port ${PORT}`);
});