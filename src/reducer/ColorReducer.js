const colorReducer = (state, action) => {
  switch (action.type) {
    case "SHOWLAVENDER":
      return "lavender";
    case "SHOWSKYBLUE":
      return "sky blue";
    case "SHOWLEMONYELLOW":
      return "lemon yellow";
    case "SHOWCORAL":
      return "coral";
  }
};

export default colorReducer;
