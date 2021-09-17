let initialState = [];

// loat student items from localstorage
if (typeof window !== "undefined") {
  if (localStorage.getItem("student")) {
    initialState = JSON.parse(localStorage.getItem("student"));
  } else {
    initialState = [];
  }
}

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_NOTIFICATION":
      return action.payload;
    default:
      return state;
  }
};
