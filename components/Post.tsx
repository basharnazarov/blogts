import Link from "next/link";
import React from "react";
import PostData from "./PostData";
import styles from "../styles/post.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Post: React.FC = () => {
  return (
    <div className={styles.mainBox}>
      <div>
        <input className={styles.search} placeholder="Search" />
        <SearchIcon className={styles.searchIcon} />
        <Link href="/createPost">
          <button type="button" className={styles.btnCreate}>
            Create post
          </button>
        </Link>
      </div>
      <div className={styles.filter}>
        <div className={styles.options}>
          All statuses <span className={styles.badge}>20</span>
        </div>
        <div className={styles.options}>
          Draft <span className={styles.badge}>1</span>
        </div>
        <div className={styles.options}>
          Published <span className={styles.badge}>19</span>
        </div>
      </div>
      <div>
        <PostData />
      </div>
    </div>
  );
};

export default Post;
