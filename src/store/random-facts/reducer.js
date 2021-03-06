const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "randomFact/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
