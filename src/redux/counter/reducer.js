const initialState = {
  number: 0,
  arr: [],
  backgroundColor: "red",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        number: state.number + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        number: state.number - 1,
      };
    case "CHANGE_BACKGROUND_COLOR":
      return {
        ...state,
        backgroundColor: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
