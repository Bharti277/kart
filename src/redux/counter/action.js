export const incrementNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const changeBackgroundColor = (color) => {
  return {
    type: "CHANGE_BACKGROUND_COLOR",
    payload: color,
  };
};
