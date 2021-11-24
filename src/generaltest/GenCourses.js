import React, { Component } from "react";
import "./General.css";

import { Link } from "react-router-dom";
export default class GenCourses extends Component {
  render() {
    return (
      <div align="center">
        <h3>Career Decision Support General Test</h3>
        <br></br>
        <table className="course-table">
          <tr align="center">
            <td>
              <p className="courses-title">Computer Science</p>
            </td>
            <td>
              <p className="courses-title">Information Technology</p>
            </td>
            <td>
              <p className="courses-title">Hotel and Restaurant Management</p>
            </td>
          </tr>
          <tr align="center">
            <td>
              <p>
                Computer science is the study of algorithmic processes,
                computational machines and computation itself. As a discipline,
                computer science spans a range of topics from theoretical
                studies of algorithms, computation and information to the
                practical issues of implementing computational systems in
                hardware and software.
              </p>
            </td>
            <td>
              <p>
                Information technology (IT) is the use of computers to store,
                retrieve, transmit, and manipulate data or information. IT is
                typically used within the context of business operations as
                opposed to personal or entertainment technologies. IT is
                considered to be a subset of information and communications
                technology (ICT).{" "}
              </p>
            </td>
            <td>
              <p>
                Bachelor's degrees in hotel and restaurant management are 4-year
                programs that offer the management skills, financial knowledge
                and problem-solving abilities required to oversee staff and
                guarantee smooth operations at a tourism-related establishment.
                Most programs also require degree candidates to complete an
                internship or work-study experience at a local lodging or food
                service facility.
              </p>
            </td>
          </tr>
          <br></br>
          <tr align="center">
            <td>
              <Link to="/specdesc" className="courses-btn" value="TakeCS">
                Take Computer Science test
              </Link>
            </td>
            <td>
              <Link to="/specdesc" className="courses-btn" value="Cancel">
                Take Information Technology test
              </Link>
            </td>
            <td>
              <Link to="/specdesc" className="courses-btn" value="Cancel">
                Take Hotel and Restaurant Management test
              </Link>
            </td>
          </tr>
        </table>

        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
