import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/homeReducer";

export default configureStore({
  reducer: {
    home: homeReducer
  }
});