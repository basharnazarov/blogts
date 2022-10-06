import React, { useState, useEffect } from "react";
import styles from "../styles/newPost.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../slices/postSlice";
import { RootState } from "../stores/store";
import { handleLocalStorage } from "../helpers/handleLocalStorage";
import { useRouter } from "next/router";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function NewPost() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  //testing

  const totalPosts = useSelector((state: RootState) => state.postSlice.posts);
  const dispatch = useDispatch();
  const router = useRouter();
  const nextId = totalPosts.length + 1;
  const postStatus = status === "Published" ? true : false;
  const initialData = {
    id: nextId,
    title: "",
    time: "",
    statusPublished: false,
  };

  const [data, setData] = useState<any>(initialData);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let final =
      status === "Published" ? { ...data, statusPublished: true } : data;
    dispatch(addPost(final));
    router.push("/");
  };

  useEffect(() => {
    handleLocalStorage(totalPosts);
  }, [totalPosts, status]);

  return (
    <div className={styles.newpost}>
      <p>Post Information</p>
      <form className={styles.form}>
        <input
          className={styles.field}
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleInputChange}
        />
        {/* <input
          className={styles.field}
          name="statusPublished"
          placeholder="Status"
          value={data.status}
          onChange={handleInputChange}
        /> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="statusPublished"
          onChange={handleChange}
        >
          <MenuItem value={"Published"}>Published</MenuItem>
          <MenuItem value={"Draft"}>Draft</MenuItem>
        </Select>
        <input
          className={styles.field}
          name="time"
          placeholder="Time"
          type="date"
          value={data.time}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={styles.btnSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPost;
