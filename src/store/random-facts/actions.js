import request from "superagent";

const baseUrl = "http://localhost:4002";

export default function fetchRandomFact(dispatch, getState) {
  request(`${baseUrl}/potterfacts/random`)
    .then(response => {
      console.log("CONSOLE LOG FACT", response.body);
      return dispatch(randomFactFetched(response.body));
    })
    .catch(console.error);
}
function randomFactFetched(data) {
  return {
    type: "randomFact/FETCHED",
    payload: data
  };
}
