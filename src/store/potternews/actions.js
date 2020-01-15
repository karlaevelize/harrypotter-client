import request from "superagent";

const baseUrl = "http://localhost:4002";

export default function fetchPotterNews(dispatch, getState) {
  request(`${baseUrl}/potternews`)
    .then(response => {
      return dispatch(potterNewsFetched(response.body));
    })
    .catch(console.error);
}
function potterNewsFetched(data) {
  return {
    type: "potterNews/FETCHED",
    payload: data
  };
}
