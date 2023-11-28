import { connectDB } from "@/src/config/dbConfig";
import UserModel from "@/src/model/user-model";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";
connectDB();

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth(); // check for the route is protected or not
    if (!userId) throw new Error("Unauthorized request");

    const userInMongoDb = await UserModel.findOne({ clerkUserId: userId });
    return NextResponse.json({ user: userInMongoDb }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
