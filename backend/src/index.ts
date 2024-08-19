import express, {Request,Response} from 'express'; //Request,Response is type come from express
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from "./routes/myUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log('connected to DB !'))

const app=express();

//middleware
app.use(express.json()); // automatically convert body of any req to json 
app.use(cors());
app.use("/api/my/user",myUserRoute); // any request start with "/api/my/user" forwarded to myUserRoute

app.listen(7000,()=>console.log('backend server started'));
