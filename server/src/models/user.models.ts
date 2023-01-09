
import  mongoose ,{ model, Schema } from "mongoose";

export interface UserInterface extends mongoose.Document{
       name: string,
       last_name: string,
       email: string,
       isValid: boolean,
       password: string,
}

 const User = new Schema({
    name: {
        type: String,
    },
    last_name: {
       type: String
    },
    email: {
        type: String,
        unique: true
    },
    isValid: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String
    }
 })
 export default model<UserInterface>('User',User);