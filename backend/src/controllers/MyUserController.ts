import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  //1. if the user exists
  //2. create user if the user doesn't exists
  //3. return the object to the calling client

  try {
    const { auth0Id } = req.body;
    //1. if the user exists
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      res.status(200).send();
    }
    //2. create user if the user doesn't exists
    const newUser = new User(req.body);
    await newUser.save();

    //3. return the object to the calling client
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error Creating User" });
  }
};

export default {
  createCurrentUser,
};
