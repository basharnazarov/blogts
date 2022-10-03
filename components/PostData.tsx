import React from "react";
import styles from "../styles/postData.module.css";
import { rows } from "../stores/data";

const PostData: React.FC = () => {
  return (
    <div className={styles.tableMain}>
      <div className={styles.tableHeader}>
        <div style={{ flex: "1" }}>ID</div>
        <div style={{ flex: "5" }}>Title</div>
        <div style={{ flex: "3" }}>Time</div>
        <div style={{ flex: "3" }}>Status</div>
      </div>

      {rows.map((each) => {
        return (
          <div className={styles.tableBody} key={each.id}>
            <div style={{ flex: "1" }}>{each.id}</div>
            <div style={{ flex: "5" }}>{each.title}</div>
            <div style={{ flex: "3" }}>{each.time}</div>
            <div style={{ flex: "3" }}>{each.statusPublished ? 'Published' : 'Draft'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostData;
