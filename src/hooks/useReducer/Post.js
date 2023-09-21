import React, { useReducer } from "react";
import 
import { INITISLAL_STATE, PostReducer } from "./postReducer";
import { ACTION_TYPES } from "./PostActionTypes";

function Post() {
  /*
  // USING USESTATE
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

    const handleFetch = () => {
      setLoading(true);
      setError(false);
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    };

    return (
      //USING USESTATE

      <div>
        <button onClick={handleFetch}>
          {loading ? "Wait..." : "Fetch the post"}
        </button>
        <p>{post?.title}</p>
        <span>{error && "Something went wrong!"}</span>
      </div>
    );
    */

  // USING useReducer

  const [state, dispatch] = useReducer(PostReducer, INITISLAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    // https://jsonplaceholder.typicode.com/posts/1
    fetch("")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // {type: "FETCH_SUCCESS", payload: data}
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };
  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
}

export default Post;
