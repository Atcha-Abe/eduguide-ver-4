import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMUNITY,DELETE_COMMUNITY } from "../account/Graphql/Mutation";
import { GET_ALL_POSTS } from "../account/Graphql/Queries";

function Community() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [message, setMessage] = useState("");
  const [createCommunity, { error }] = useMutation(CREATE_COMMUNITY,{refetchQueries:[GET_ALL_POSTS]});
  const [deleteCommunity, { deleteError=error }] = useMutation(DELETE_COMMUNITY,{refetchQueries:[GET_ALL_POSTS]});
  const userInfo = JSON.parse(localStorage.getItem('user'))
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
        <textarea
          className="commfield"
          name="post"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="postbtn"
        onClick={() => {
          createCommunity({ variables: { comment: message } });
          setMessage('')
        }}
      >
        Post
      </button>
      {data &&
        data?.getAllPost?.map((item) => (
          <div>
            <div className="commdiv">
              <div className="commicon">
                <img src="./icons/icon 7.png"></img>
              </div>
              <textarea className="comm_entry" value={item?.comment} disabled name="post" />
            </div>
            <button type="submit" className="commentbtn">
              Comment
            </button>
            <button type="submit" className="share">
              <a
                href="https://facebook.com/"
                className="share"
                target="_blank"
              ></a>
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
            {userInfo?.is_admin && <button type="submit" className="deletebtn" onClick={()=>{
              console.log(item)
              deleteCommunity({variables:{id:item?.id}})
            }}>
              Delete
            </button>}
          </div>
        ))}
    </div>
  );
}

export default Community;
