import React from "react";

function Community() {
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
      <button type="submit" className="deletebtn">
        Delete
      </button>
    </div>
  );
}

export default Community;
