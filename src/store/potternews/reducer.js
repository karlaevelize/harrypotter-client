const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "potterNews/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
