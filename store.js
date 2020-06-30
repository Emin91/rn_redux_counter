import { createStore } from "redux";
import { settingReducer } from "./redux/reducer";

export const store = createStore(settingReducer)