import Link from "next/link";
import React from "react";
// import PostData from "./PostData";
import styles from "../styles/post.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Post() {
  return (
    <div>
      <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" />
        <SearchIcon className={styles.searchIcon} />
        <Link href="/createPost">
          <button type="button" className={styles.btnCreate}>
            Create post
          </button>
        </Link>
      </div>

      <div>{/* <PostData /> */}</div>
    </div>
  );
}

export default Post;
