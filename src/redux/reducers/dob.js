import { DOB } from "../actions/types";

const initialState = { text: "" };

const Dob = (state = initialState, action) => {
  switch (action.type) {
    case DOB:
      return { text: action.payload };
    default:
      return state;
  }
};

export default Dob;
