import Link from "next/link";
import React from "react";
import NewPost from "../../components/newPost";

function CreatePost() {
  return (
    <div>
      index create post page!!!!
      <Link href="/">
        <button>back to posts!!</button>
      </Link>
      <NewPost />
    </div>
  );
}

export default CreatePost;
