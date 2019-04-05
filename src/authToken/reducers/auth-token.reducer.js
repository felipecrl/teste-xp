import types from "../actions/auth-token.types";

const initialState = {};

export default function TokenReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    default:
      return state;
  }
}
