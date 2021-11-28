import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import emailjs from 'emailjs-com'
import React, { useRef } from "react";

function Blogs() {
  const header = useSelector((state) => state.header);
  const form = useRef();
 let sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('gmail', 'template_975judb', form.current, 'user_k2uyNdRwq3XhF0ItCc5pZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div align="center">
      <h1>Tell us your career decision journeys/advice!</h1>
      <form align="center" ref={form} onSubmit={sendEmail}>
      <input type="text" className="blog-field" name="message" />
      <br></br>
      <br></br>

      {header ? (
        <input className="sub-btn" type="submit" value="Submit" />
      ) : (
        <Link to="/login">
          <input className="sub-btn" type="submit" value="Submit" />
        </Link>
      )}
      </form>
    </div>
  );
}

export default Blogs;
