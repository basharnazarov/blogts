import React from "react";
import styles from "../styles/layout.module.css";
import { IMain } from "../interfaces/layout.interface";
import Image from "next/image";
import brand from "../public/brand.png";
import posts from "../public/posts.png";

const MainLayout: React.FC<IMain> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={brand} alt="logo and brand" />
        </div>
        <div className={styles.headerLeft}>Posts</div>
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
