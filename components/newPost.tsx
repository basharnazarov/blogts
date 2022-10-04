import React from "react";
import styles from "../styles/newPost.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, counter } from "../slices/postSlice";
import { RootState } from "../stores/store";

function NewPost() {
  const dispatch = useDispatch();
  const totalPosts = useSelector((state: RootState) => state.postSlice.posts);

  return (
    <div className={styles.newpost}>
      <p>Post Information</p>
      <form className={styles.form}>
        <input className={styles.field} placeholder="Title" />
        <input className={styles.field} placeholder="Status" />
        <input className={styles.field} placeholder="Time" type="date" />
        <button
          type="submit"
          className={styles.btnSubmit}
          onClick={(e) => {
            e.preventDefault();
            dispatch(addPost({id: totalPosts.length + 1, title: 'new post added', time: Date(), statusPublished: true}));
            dispatch(counter())
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPost;
