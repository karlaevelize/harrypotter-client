import request from "superagent";

const baseUrl = "http://localhost:4002";

export default function fetchOnePotterNew(id) {
  return function thunk(dispatch, getState) {
    request(`${baseUrl}/potternews/${id}`)
      .then(response => {
        console.log("CONSOLE LOG RESPONSE", response.body);
        return dispatch(onePotterNewFetched(response.body));
      })
      .catch(console.error);
  };
}

function onePotterNewFetched(data) {
  return {
    type: "onePotterNew/FETCHED",
    payload: data
  };
}
