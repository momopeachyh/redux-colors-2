const colorReducer = (state, action) => {
  switch (action.type) {
    case " SHOW_MAUVE":
      return "mauve";
    case "SHOW_YELLOW_GREEN":
      return "yellow green";
  }
};

export default colorReducer;
