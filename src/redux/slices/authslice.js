import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedin: localStorage.getItem("isloggedin") === "true",  // ✅ string → boolean
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))                // ✅ string → object
    : {},
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authslice.actions;
export default authslice.reducer;
