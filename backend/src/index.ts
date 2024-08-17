import express, {Request,Response} from 'express'; //Request,Response is type come from express
import cors from 'cors';
import "dotenv/config";

const app=express();

//middleware
app.use(express.json()) // automatically convert body of any req to json 
app.use(cors())


app.get("/test",async (req:Request, res:Response) => {
  res.json({msg:"HEllo"})
})

app.listen(7000,()=>console.log('backend server started'));
