import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./reducers/langReducer";

const rootReducer = combineReducers({
  lang: langReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;