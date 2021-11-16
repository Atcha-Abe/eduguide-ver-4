import React, { } from "react";
import { CREATE_POST } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";

function Community {

  const [username, setUsername] = useState("");
  const [post, setPost] = useState("");

  const [createPost, { error }] = useMutation(CREATE_POST);

  if (error) {
    return <h1> {error} </h1>;
  }


    return (
      <div align="center">
        <h1>Community</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div className="commdiv">
          <div className="commicon">
            <img src="./icons/icon 7.png"></img>
          </div>
          <textarea className="commfield" name="post" onChange={
                ((event) => {
                  setPost(event.target.value);
                })
              }/>
        </div>
        <button type="submit" className="postbtn">
          Post
        </button>
        <div className="commdiv">
          <div className="commicon">
            <img src="./icons/icon 7.png"></img>
          </div>
          <textarea className="comm_entry" name="post" />
        </div>
        <button type="submit" className="commentbtn">
          Comment
        </button>
        <button type="submit" className="sharebtn">
          Share
        </button>
        <button type="submit" className="deletebtn">
          Delete
        </button>
        <div className="commdiv">
          <div className="commicon">
            <img src="./icons/icon 7.png"></img>
          </div>
          <textarea className="comm_entry" name="post" />
        </div>
        <button type="submit" className="commentbtn">
          Comment
        </button>
        <button type="submit" className="sharebtn">
          Share
        </button>
        <button type="submit" className="deletebtn">
          Delete
        </button>
        <div className="commdiv">
          <div className="commicon">
            <img src="./icons/icon 7.png"></img>
          </div>
          <textarea className="comm_entry" name="post" />
        </div>
        <button type="submit" className="commentbtn">
          Comment
        </button>
        <button type="submit" className="sharebtn">
          Share
        </button>
        <button type="submit" className="deletebtn" onClick={
            (() => {
              createPost({
                variables: {
                  post: post,
                },
              });
            }>
          Delete
        </button>
      </div>
    );
}
