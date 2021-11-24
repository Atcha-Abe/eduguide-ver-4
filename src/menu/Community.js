import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMUNITY } from "../account/Graphql/Mutation";
import { GET_ALL_POSTS } from "../account/Graphql/Queries";

function Community() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [createCommunity, { error }] = useMutation(CREATE_COMMUNITY);
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
        <textarea className="commfield" name="post" />
      </div>
      <button type="submit" className="postbtn" onClick= {()=>{
        
      }}>
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
      <button type="submit" className="sharebtn">
        <a
          href="https://forms.office.com/r/Juc6FTPfKC"
          className="sharebtn"
          target="_blank"
        >
          Report
        </a>
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
      <button type="submit" className="sharebtn">
        <a
          href="https://forms.office.com/r/Juc6FTPfKC"
          className="sharebtn"
          target="_blank"
        >
          Report
        </a>
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
      <button type="submit" className="sharebtn">
        <a
          href="https://forms.office.com/r/Juc6FTPfKC"
          className="sharebtn"
          target="_blank"
        >
          Report
        </a>
      </button>
      <button type="submit" className="deletebtn">
        Delete
      </button>
    </div>
  );
    
}

export default Community;
