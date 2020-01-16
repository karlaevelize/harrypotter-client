const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "comment/CREATED":
      return [{ ...action.payload }, ...state];

    default:
      return state;
  }
}
