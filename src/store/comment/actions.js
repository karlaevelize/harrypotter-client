import api from "../../api";

export default function createComment(author, comment, potternewId, id) {
  return function thunk(dispatch, getState) {
    const jwt = getState().login.jwt;
    api(`/comments`, {
      method: "POST",
      body: {
        author: author,
        comment: comment,
        potternewId: potternewId
      },
      jwt: jwt
    })
      .then(data => dispatch(commentCreated(data, id)))
      .catch(err => console.log("err", err));
  };
}

export function commentCreated(data) {
  return {
    type: "comment/CREATED",
    payload: data
  };
}
