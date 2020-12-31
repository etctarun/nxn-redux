import { EMAIL } from "../actions/types";

const initialState = { text: "" };

const Email = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL:
      return { text: action.payload };
    default:
      return state;
  }
};

export default Email;
