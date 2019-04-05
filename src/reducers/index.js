import { combineReducers } from "redux";

import authToken from "../authToken/reducers/auth-token.reducer";
import home from "../containers/Home/reducers/home.reducer";
import album from "../containers/Album/reducers/album.reducer";

export const Reducers = combineReducers({
  authToken,
  home,
  album
});
