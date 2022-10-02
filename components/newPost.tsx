import React from "react";
import styles from "../styles/newPost.module.css";

function NewPost() {
  return (
    <div className={styles.newpost}>
      <p>Post Information</p>
      <form className={styles.form}>
        <input className={styles.field} placeholder="Title" />
        <input className={styles.field} placeholder="Status" />
        <input className={styles.field} placeholder="Time" type="date" />
      </form>
    </div>
  );
}

export default NewPost;
