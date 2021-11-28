import React, { useRef } from "react";
import emailjs from 'emailjs-com'


export default function Contact() {
  const form = useRef();
 let sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('gmail', 'template_4r7zsnq', form.current, 'user_k2uyNdRwq3XhF0ItCc5pZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return(
     
      <div>
        <h1>Connect with us</h1>
        <div align="center">
          <a href="https://www.messenger.com/t/110839054741107">
          <img src="./icons/Messenger.png" className="social-icons"></img>
          </a>

          <a href="mailto:eduguide.acmt@gmail.com/?subject=Questions and Concerns">
          <img src="./icons/GMail.png" className="social-icons"></img>
          </a>
        </div>

        <div>
          <form align="center" ref={form} onSubmit={sendEmail}>
            <label>
              <br></br>
              Send your feedback here
              <br></br>
              <br></br>
              <input type="text" className="contact-field" name="message" />
              {/* <input type="email" className="contact-field" name="email_here" /> */}
            </label>
            <br></br>
            <br></br>
            <input className="sub-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
  );
}
