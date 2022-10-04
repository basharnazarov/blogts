import React from "react";
import styles from "../styles/layout.module.css";
import { IMain } from "../interfaces/all.interface";
import { RootState } from "../stores/store";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

import Image from "next/image";
import brand from "../public/brand.png";
import posts from "../public/posts.png";
import { handlePage } from "../slices/pageSlice";

const MainLayout: React.FC<IMain> = ({ children }) => {
  const dispatch = useDispatch()
  const pageStatus = useSelector(
    (state: RootState) => state.pageSlice.postPage
  );
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={brand} alt="logo and brand" />
        </div>
        {pageStatus ? (
          <div className={styles.headerLeft}>Posts </div>
        ) : (
          <div className={styles.headerLeft}> <Link href='/'><ArrowBackIcon className={styles.arrow} onClick={()=>dispatch(handlePage(true))}/></Link> New Post </div>
        )}
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <ul className={styles.list}>
            <li>
              <Image src={posts} alt="sidebar icon" /> Posts
            </li>
          </ul>
        </div>
        <div className={styles.board}> {children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
