import { connect } from "@/db";
import PostModel from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const userName = new URL(request.url).searchParams.get("userName");

  try {
    await connect();

    const posts = await PostModel.find(userName ? { userName } : {});

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    throw new Error("database error");
  }
};

export const POST = async (request: NextRequest) => {
  const { title, description, image, content, userName } = await request.json();

  try {
    await connect();

    const newPost = new PostModel({
      title,
      description,
      image,
      content,
      userName,
    });
    await newPost.save();

    return new NextResponse("Post has been added", { status: 201 });
  } catch (err) {
    throw new Error("database error");
  }
};
