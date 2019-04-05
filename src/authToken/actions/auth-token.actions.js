import types from "./auth-token.types";

export const setToken = token => {
  return {
    type: types.SET_TOKEN,
    payload: token
  };
};
