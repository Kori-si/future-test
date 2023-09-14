import { configureStore } from "@reduxjs/toolkit";
import filter from "../redux/slices/filterSlise";

export const store = configureStore({
  reducer: { 
    filter ,
},
});