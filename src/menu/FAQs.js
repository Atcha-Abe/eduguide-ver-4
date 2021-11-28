import React, { useState } from "react";

function FAQs() {
  const [faqbox1, setFaqbox1] = useState(false);
  const [faqbox2, setFaqbox2] = useState(false);
  const [faqbox3, setFaqbox3] = useState(false);
  const [faqbox4, setFaqbox4] = useState(false);

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <p> Click the question to view the answer </p>
      <table className="faqstable">
        <tr>
          <td className="faqstd">
            <div className="faqsbox">
              <p onClick={() => setFaqbox1(!faqbox1)}>
                <b> What is EduGuide? </b>
              </p>
              <div style={{ display: `${faqbox1 ? "block" : "none"}` }}></div>
              {faqbox1 && (
                <p className="faq1">
                  EduGuide is a Career Decision Tool optimized to help you make
                  a decision in finding the right program corresponding to your
                  strengths, interest, and skills.
                </p>
              )}
            </div>
          </td>
          <td className="faqstd">
            <div className="faqsbox">
              <p onClick={() => setFaqbox2(!faqbox2)}>
                <b> What are the tests about? </b>
              </p>
              <div style={{ display: `${faqbox2 ? "block" : "none"}` }}>
                {faqbox2 && (
                  <p className="faq1">
                    There are two tests:
                    <br />
                    <br /> A General Test that identifies your strength and
                    interest and a Specifc Test depending on the Top 3 program
                    recommendations.
                  </p>
                )}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="faqstd">
            <div className="faqsbox">
              <p onClick={() => setFaqbox3(!faqbox3)}>
                <b> Is it free? </b>
              </p>
              <div style={{ display: `${faqbox3 ? "block" : "none"}` }}>
                {faqbox3 && (
                  <p className="faq1">
                    EduGuide is a free app. <br /> <br /> Create an account to
                    take the test. <br /> <br /> Make the right decision.
                  </p>
                )}
              </div>
            </div>
          </td>
          <td className="faqstd">
            <div className="faqsbox">
              <p onClick={() => setFaqbox4(!faqbox4)}>
                <b> Who can be the users? </b>
              </p>
              <div style={{ display: `${faqbox4 ? "block" : "none"}` }}>
                {faqbox4 && (
                  <p className="faq1">
                    EduGuide is open to all Senior High School Students in the
                    Philippines.
                  </p>
                )}
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FAQs;
