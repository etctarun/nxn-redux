import { NAME } from "../actions/types";

const initialState = { text: "" };

const Name = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return { text: action.payload };
    default:
      return state;
  }
};

export default Name;
