import { connect } from "@/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { email, name, password } = await request.json();

  try {
    await connect();

    const newUser = new User({ email, name, password });

    await newUser.save();

    return new NextResponse("user has been added", { status: 201 });
  } catch (err: any) {
    throw new Error(err);
  }
};
