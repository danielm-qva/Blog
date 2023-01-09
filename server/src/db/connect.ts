import mongosse from 'mongoose';

mongosse.set('strictQuery' , false);
const connectionMongoDb = async () => { 
   const db = await mongosse.connect('mongodb://localhost:33017/test' , {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
   console.log("Db running" );
}
    
export default connectionMongoDb;