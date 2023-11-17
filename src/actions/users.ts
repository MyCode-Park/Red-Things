import { connectDB } from "../config/dbConfig";
import UserModel from "../model/user-model";
import { currentUser } from "@clerk/nextjs/server";
connectDB();

export const handleNewUserRegistration = async () => {
  try {
    const loggedInUser = await currentUser();

    //    check if user is already registered
    const userExists = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });
    if (userExists) return userExists;

    // create a new user
    const newUser = new UserModel({
      userName: loggedInUser?.username,
      email: loggedInUser?.emailAddresses[0].emailAddress,
      clerkUserId: loggedInUser?.id,
    });

    await newUser.save();
    return newUser;
  } catch (error: any) {
    // throw new Error(error);
    console.log("err", error);
    
  }
};

export const getMongoDBUserLoggedInUser = async () => {
  try {
    const loggedInUser = await currentUser();
    const userInMongoDb = await UserModel.findOne({
        userName: loggedInUser?.username,
    });
    console.log("log", userInMongoDb);
    
    if (userInMongoDb) return userInMongoDb._id;
  } catch (error: any) {
    throw new Error(error)
  }
};
