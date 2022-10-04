import React, { useState } from "react";
import styles from "../styles/postData.module.css";
import { rows } from "../stores/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { RootState } from "../stores/store";
import { useSelector, useDispatch } from "react-redux";

const PostData: React.FC = () => {
  const filterStatus = useSelector(
    (state: RootState) => state.postSlice.filter
  );

  const [selected, setSelected] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let filtered = [];

  if (filterStatus.published === true && filterStatus.draft === false) {
    filtered = rows.filter((post) => post.statusPublished === true);
  } else if (filterStatus.published === false && filterStatus.draft === true) {
    filtered = rows.filter((post) => post.statusPublished === false);
  } else {
    filtered = rows;
  }

  const handleSelect = (e: any) => {
    setSelected(e.currentTarget.innerText);
    handleClose();
  };

  return (
    <div className={styles.tableMain}>
      <div className={styles.tableHeader}>
        <div style={{ flex: "1" }}>ID</div>
        <div style={{ flex: "5" }}>Title</div>
        <div style={{ flex: "3" }}>Time</div>
        <div style={{ flex: "3" }}>Status</div>
      </div>

      {filtered.map((each) => {
        return (
          <div className={styles.tableBody} key={each.id}>
            <div style={{ flex: "1" }}>{each.id}</div>
            <div style={{ flex: "5" }}>{each.title}</div>
            <div style={{ flex: "3" }}>{each.time}</div>
            <div style={{ flex: "3", display: "flex", alignItems: "center" }}>
              {each.statusPublished ? "Published" : "Draft"}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="false"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ m: 0, p: 0 }}
              >
                <KeyboardArrowDownIcon fontSize="medium" color="action" />
              </Button>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={(e) => handleSelect(e)}>Published</MenuItem>
              <MenuItem onClick={(e) => handleSelect(e)}>Draft</MenuItem>
            </Menu>
          </div>
        );
      })}
    </div>
  );
};

export default PostData;
