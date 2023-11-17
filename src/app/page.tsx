import { UserButton } from "@clerk/nextjs";
import { connectDB } from "../config/dbConfig";
connectDB();

export default function Home() {
  return (
    <div className="p-10">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
