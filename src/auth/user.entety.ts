import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  surename:String,
  email: String,
  password:String
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  surename:String,
  email: string;
  password:String
}



