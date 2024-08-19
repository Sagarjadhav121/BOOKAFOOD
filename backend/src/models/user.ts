import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
  auth0Id:{
    type: 'string',
    required: true
  },
  email:{
    type: 'string',
    required: true
  },
  name:{type: 'string'},
  addressLine1:{type: 'string'},
  city:{type: 'string'},
  country:{type: 'string'},
})
const User=mongoose.model('User',userSchema);
export default User;