import { AUTH_USER, AUTH_ERR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
