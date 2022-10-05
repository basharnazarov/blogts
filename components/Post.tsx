import Link from "next/link";
import React, { useState, useEffect } from "react";
import PostData from "./PostData";
import styles from "../styles/post.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { RootState } from "../stores/store";
import { useSelector, useDispatch } from "react-redux";
import { handlePage } from "../slices/pageSlice";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { counter, handleFilter } from "../slices/postSlice";

const Post: React.FC = () => {
  const [value, setValue] = useState<string>("all");
  const dispatch = useDispatch();
  const totalPosts = useSelector((state: RootState) => state.postSlice.posts);
  let totalDrafts = useSelector(
    (state: RootState) => state.postSlice.draftsTotal
  );
  let totalPublished = useSelector(
    (state: RootState) => state.postSlice.publishedTotal
  );

  const filterStatus = useSelector(
    (state: RootState) => state.postSlice.filter
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(counter());
  }, [dispatch, filterStatus.published, filterStatus.draft]);

  return (
    <div className={styles.mainBox}>
      <div>
        <input className={styles.search} placeholder="Search" />
        <SearchIcon className={styles.searchIcon} />
        <Link href="/createPost">
          <button
            type="button"
            className={styles.btnCreate}
            onClick={() => {
              dispatch(handlePage(false));
            }}
          >
            Create post
          </button>
        </Link>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="info tabs example"
        className={styles.filter}
      >
        <Tab
          className={styles.options}
          value="all"
          label={<div>All &nbsp;{totalPosts.length}</div>}
          onClick={() => {
            dispatch(handleFilter(value));
            dispatch(counter());
          }}
        />
        <Tab
          className={styles.options}
          value="draft"
          label={<div>Draft &nbsp;{totalDrafts}</div>}
          onClick={() => {
            dispatch(handleFilter(value));
            dispatch(counter());
          }}
        />
        <Tab
          className={styles.options}
          value="published"
          label={<div>Published &nbsp;{totalPublished}</div>}
          onClick={() => {
            dispatch(handleFilter(value));
            dispatch(counter());
          }}
        />
      </Tabs>
      <div>
        <PostData />
      </div>
    </div>
  );
};

export default Post;
