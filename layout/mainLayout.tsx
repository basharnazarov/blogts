import React from "react";
import styles from '../styles/layout.module.css'
import { IMain } from "../interfaces/layout.interface";


const MainLayout: React.FC<IMain> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.logo}>Zoftify</div>
        <div className={styles.headerLeft}>Posts</div>
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>sidebar</div>
        <div className={styles.board}> {children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
