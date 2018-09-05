import { combineReducers } from "redux";

import data from "./dataReducer";
import usuario from "./usuarioReducer";


export default combineReducers({
  data,
  usuario
});