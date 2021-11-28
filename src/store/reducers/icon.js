export const icon = (state = "", action) => {
  switch (action.type) {
    case "SHOW_ICON":
      return action.handleImageChange;
    default:
      return state;
  }
};
