const intialState = {
  errMsg: "",
  user: JSON.parse(localStorage.getItem("user")) || null,
  isCreated: false,
};

export const authreducer = (state = intialState, action) => {
  switch (action.type) {
    case "ERROR_MSG":
      return {
        ...state,
        errMsg: action.payload,
        isCreated: false,
      };
    case "SIGNUP_SUC":
      return {
        ...state,
        isCreated: true,
      };
    case "SIGNIN_SUC":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isCreated: false,
        user: action.payload,
      };
    case "SIGNOUT_SUC":
      localStorage.removeItem("user");
      return {
        ...state,
        isCreated: false,
        user: null,
      };

    default:
      return state;
  }
};
