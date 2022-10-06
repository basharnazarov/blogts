import { Irows } from "../interfaces/all.interface";

export const handleLocalStorage = (arr: Irows[]) => {
  if (typeof window !== "undefined") {
    let rowsSerialized = JSON.stringify(arr);
    localStorage.setItem("data", rowsSerialized);
  }
};

export const fetchLocalData = () => {
  if (typeof window !== "undefined") {
    let rowsDeserialized = JSON.parse(localStorage.getItem("data") || "{}");
    return rowsDeserialized;
  }
};
