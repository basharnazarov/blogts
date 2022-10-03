import Link from "next/link";
import React from "react";
import PostData from "./PostData";
import styles from "../styles/post.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { RootState } from '../stores/store'
import { useSelector, useDispatch } from 'react-redux'

const Post: React.FC = () => {

  const totalPosts = useSelector((state: RootState) => state.posts.total)
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
          All statuses <span className={styles.badge}>{totalPosts}</span>
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
