import Link from "next/link";
import React from "react";
import NewPost from "../../components/newPost";

const CreatePost: React.FC = () => {
  return (
    <div style={{ paddingLeft: "28px", paddingTop: "19px" }}>
      <NewPost />
    </div>
  );
};

export default CreatePost;
