import {DataSource} from 'typeorm'
import User from '../auth/domain/user.model';
import { Post } from '../post/domain/post.model';

import 'dotenv/config';

 var AppDataSource: any;

  if(process.env.TS_NODE_DEV){
      AppDataSource  = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "*123",
        database: 'dbblog_node',
        entities:[User , Post],
        synchronize: true,
        logging: true,
       })
  }
  else {
    AppDataSource =  new DataSource({
      type: "postgres",
      host: "dpg-cg17d9t269vfsnreqqn0-a.ohio-postgres.render.com",
      port: 5432,
      username: "dbblog_node_user",
      password: "LcWK1N1HNkABcul7Pc4MauqQNndIiYXO",
      database: 'dbblog_node',
      entities:[User , Post],
      synchronize: true,
      logging: true,
      ssl : {
         rejectUnauthorized: true
       }
     })
  }



 export const dbconnet =  AppDataSource.initialize().then(() => {
     console.log("db Runing");
}).catch((error: any) => {
    console.log(error);
})

export default AppDataSource;