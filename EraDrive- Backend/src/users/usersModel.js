import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const UsersSchema = new Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
       required: true, 
    },
    email: {
        type: String,
      required: true, 
    },
    password: {
        type: String,
    },
    photo: {
      type: String,
      required: false 
  },

});

export const User = mongoose.model("users", UsersSchema)