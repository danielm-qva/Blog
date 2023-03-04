
import express from 'express';
import 'reflect-metadata';
import{ dbconnet } from './db/data-source';

const app = express();

const PORT = 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api', routerAuth)
// app.use('/user', userrouter)

app.listen(PORT, () => {
     dbconnet.then().catch();
  console.log(`server Runnig port ${PORT}`);
});