import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../component/userSlice";
import userReducer1 from "../store/userSlice1"
export default configureStore({
  reducer: {
    user: userReducer,
    data: userReducer1
  }
});