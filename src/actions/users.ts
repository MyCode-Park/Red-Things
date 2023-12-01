import { connectDB } from "../config/dbConfig";
import UserModel from "../model/user-model";
import { currentUser } from "@clerk/nextjs/server";
connectDB();

export const handleNewUserRegistration = async () => {
  try {
    const loggedInUser = await currentUser();
    // console.log("current user data", loggedInUser);

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

    // console.log("CCN", newUser);

    await newUser.save();
    return newUser;
  } catch (error: any) {
    // throw new Error(error);
    console.log("err", error);
  }
};

export const getMongoDBUserIdOfLoggedInUser = async () => {
  try {
    const loggedInUser = await currentUser();
    const userInMongoDb = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });
    // console.log("log mongo DB", userInMongoDb);
    // console.log("log loggedInUser DB", loggedInUser);

    if (userInMongoDb) return userInMongoDb._id;
  } catch (error: any) {
    // throw new Error(error);
    console.log("err", error);
  }
};
