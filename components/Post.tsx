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
        sx={{
          "& .css-jpln7h-MuiTabs-scroller": {
            maxWidth: "450px ",
            height: "44px",
            // background: "#F5F6FA",
            borderRadius: "8px",
            
            margin:'10px 0 0 0'
          },
          "& .css-heg063-MuiTabs-flexContainer": {
            display: "flex",
            columnGap: "10px !important",
            justifyContent: "space-around",
           
           
          },
         
         
         
        }}
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="info tabs example"
      >
        <Tab
          sx={{
            "& .post_options__g5FZG": {
              height: "36px",
              padding: "0px",
            },
            "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
              height: "36px",
              padding: "0px",
            },
          }}
          className={styles.options}
          value="all"
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              All posts &nbsp;
              <p className={styles.badge}>{totalPosts.length}</p>
            </div>
          }
          onClick={(e: any) => {
            handleSort(e.target.outerText);
          }}
        />
        <Tab
          className={styles.options}
          value="draft"
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              Draft &nbsp;
              <p className={styles.badge}>{totalDrafts.length}</p>
            </div>
          }
          onClick={(e: any) => {
            handleSort(e.target.outerText);
          }}
        />
        <Tab
          className={styles.options}
          value="published"
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              Published &nbsp;
              <p className={styles.badge}>{totalPublished.length}</p>
            </div>
          }
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
