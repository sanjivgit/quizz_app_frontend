import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const quizzLoginData = Cookies.get("quizzLoginData");

const initialState = {
  user: quizzLoginData ? JSON.parse(quizzLoginData) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      Cookies.set("quizzLoginData", JSON.stringify(action.payload), { expires: 1 });
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("quizzLoginData");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
