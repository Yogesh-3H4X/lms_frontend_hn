import { createSlice } from "@reduxjs/toolkit";
const  initialstate = {
isloggedin: localStorage.getItem('isloggedin') || false,
role: localStorage.getItem('role') || "",
data: localStorage.getItem('data') || {}
};
const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},

})
export const {} = authslice.actions;
export default authslice.reducer;