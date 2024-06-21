import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const govJobsLoginData = Cookies.get("govJobsLoginData");

const initialState = {
  user: govJobsLoginData ? JSON.parse(govJobsLoginData) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      Cookies.set("govJobsLoginData", JSON.stringify(action.payload), { expires: 1 });
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("govJobsLoginData");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
