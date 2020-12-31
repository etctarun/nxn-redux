import { NAME, ID, EMAIL, DOB } from "./types";

export const setId = (text) => {
  return {
    type: ID,
    payload: text,
  };
};

export const setName = (text) => {
  return {
    type: NAME,
    payload: text,
  };
};

export const setEmail = (text) => {
  return {
    type: EMAIL,
    payload: text,
  };
};

export const setDob = (text) => {
  return {
    type: DOB,
    payload: text,
  };
};
