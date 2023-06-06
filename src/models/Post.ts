import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
