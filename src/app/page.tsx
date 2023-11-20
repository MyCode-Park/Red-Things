import { UserButton } from "@clerk/nextjs";
import { connectDB } from "../config/dbConfig";
import {
  getMongoDBUserIdOfLoggedInUser,
  handleNewUserRegistration,
} from "../actions/users";
connectDB();

export default async function Home() {
  await handleNewUserRegistration();

  const mongoUserId = await getMongoDBUserIdOfLoggedInUser();
  console.log("Mongo ID", mongoUserId);

  return (
    <div className="p-10">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
