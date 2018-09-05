import { FETCH_USUARIOS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USUARIOS:
      return action.payload;
    default:
      return state;
  }
};