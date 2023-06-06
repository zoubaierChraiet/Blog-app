import { connect } from "@/db";
import PostModel from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await connect();

    const posts = await PostModel.findById(params.id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    throw new Error("database error");
  }
};
