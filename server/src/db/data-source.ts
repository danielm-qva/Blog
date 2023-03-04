import {DataSource} from 'typeorm'
import User from '../auth/domain/user.model';
import { Post } from '../post/domain/post.model';


 const AppDataSource = new DataSource({
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

 export const dbconnet =  AppDataSource.initialize().then(() => {
     console.log("db Runing");
}).catch(error => {
    console.log(error);
})

export default AppDataSource;