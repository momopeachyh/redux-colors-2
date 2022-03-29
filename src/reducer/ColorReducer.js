const initialState = {
  color: [],
};

const ColorReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_COLOR":
      return {
        newState,
        color: [newState.color, action.payload],
      };
    case "REMOVE_COLOR":
      let val = newState.color.flat(2);
      return {
        newState,
        color: [val.filter((value) => value !== action.payload)],
      };
      break;
    // case "CHANGE_COLOR":
    //   newState.color = action.payload;
    //   break;
    default:
      return newState;
  }
};

export default ColorReducer;
