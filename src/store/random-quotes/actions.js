import request from "superagent";

const baseUrl = "http://localhost:4002";

export default function fetchRandomQuote(dispatch, getState) {
  request(`${baseUrl}/potterquotes/random`)
    .then(response => {
      console.log("CONSOLE LOG QUOTE", response.body);
      return dispatch(randomQuoteFetched(response.body));
    })
    .catch(console.error);
}
function randomQuoteFetched(data) {
  return {
    type: "randomQuote/FETCHED",
    payload: data
  };
}
