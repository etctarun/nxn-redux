import { ID } from "../actions/types";

const initialState = { text: "" };

const Id = (state = initialState, action) => {
  switch (action.type) {
    case ID:
      return { text: action.payload };
    default:
      return state;
  }
};

export default Id;
