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
import { handleFilter } from "../slices/postSlice";

const Post: React.FC = () => {
  const [value, setValue] = useState<string>("all");
  const dispatch = useDispatch();
  const totalPosts = useSelector((state: RootState) => state.postSlice.posts);
  let totalDrafts = totalPosts.filter((post) => post.statusPublished === false);
  let totalPublished = totalPosts.filter(
    (post) => post.statusPublished === true
  );

  const filterStatus = useSelector(
    (state: RootState) => state.postSlice.filter
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSort = (status: any) => {
    if (status.startsWith("A")) {
      dispatch(handleFilter("all"));
    }
    if (status.startsWith("D")) {
      dispatch(handleFilter("draft"));
    }
    if (status.startsWith("P")) {
      dispatch(handleFilter("published"));
    }
  };

  useEffect(() => {}, [totalPosts, value]);

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
          onClick={(e: any) => {
            handleSort(e.target.outerText);
          }}
        />
        <Tab
          className={styles.options}
          value="draft"
          label={<div>Draft &nbsp;{totalDrafts.length}</div>}
          onClick={(e: any) => {
            handleSort(e.target.outerText);
          }}
        />
        <Tab
          className={styles.options}
          value="published"
          label={<div>Published &nbsp;{totalPublished.length}</div>}
          onClick={(e: any) => {
            handleSort(e.target.outerText);
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
