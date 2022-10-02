import React from "react";
import styles from '../styles/layout.module.css'
import { IMain } from "../interfaces/layout.interface";
import PixIcon from '@mui/icons-material/Pix';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import SignpostIcon from '@mui/icons-material/Signpost';

const MainLayout: React.FC<IMain> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.logo}><PixIcon /> zoftify</div>
        <div className={styles.headerLeft}>Posts</div>
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <ul className={styles.list}>
            <li>
            <DynamicFeedIcon style={{color: '#177EFF'}}/> Posts
            </li>
            {/* <li>
            <SignpostIcon  style={{color: '#177EFF'}}/> koktailbar
            </li> */}
          </ul>
        </div>
        <div className={styles.board}> {children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
