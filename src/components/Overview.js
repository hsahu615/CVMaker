import React, { Component } from "react";
import "../styles/overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sampleDescritpion =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis repellat provident recusandae asperiores dolorem quaerat, a corrupti id architecto odio blanditiis expedita neque totam, cupiditate ut hic illo ratione ex nihil eligendi? Ipsum dolores quo, nobis vel nulla quae totam labore quaerat est cumque. Consectetur, officia ipsa. Eligendi, nobis.";

    return (
      <div className="Overview">
        <div className="userPersonalDetails">
          <div className="pd1">
            <h2 className="userName">
              {this.props.name ? this.props.name : "Himanshu Sahu"}
            </h2>
            <p>
              <em>
                {" "}
                {this.props.title
                  ? this.props.title
                  : "Software Engineering Intern"}
              </em>
            </p>
          </div>
          <div className="pd2">
            <p>{this.props.email ? this.props.email : "xyz@gmail.com"}</p>
            <p>{this.props.phone ? this.props.phone : "1234-56789"}</p>
          </div>
        </div>
        <div className="userDescription">
          <p>
            {this.props.description
              ? this.props.description
              : sampleDescritpion}
          </p>
        </div>
        <div className="userExp">
          <h4>EXPERIENCE</h4>
          <div className="companyDiv">
            <p className="userSchoolName">
              {this.props.company
                ? this.props.company
                : "Jalan Technologies Consulting"}
            </p>
            <p className="userStreamName">
              <em>
                {this.props.title
                  ? this.props.title
                  : "Software Engineering Intern"}
              </em>
            </p>
            <p className="userSchoolDate">
              <em>
                [{this.props.start ? this.props.start : "YYYY"}-
                {this.props.end ? this.props.end : "YYYY"}]
              </em>
            </p>
          </div>
        </div>
        <div className="userED">
          <h4>EDUCATION</h4>
          <div className="schoolDiv">
            <p className="userSchoolName">
              {this.props.school
                ? this.props.school
                : "The Aditya Birla Public School"}
            </p>
            <p className="userStreamName">
              <em>{this.props.stream ? this.props.stream : "XIIth"}</em>
            </p>
            <p className="userSchoolDate">
              <em>
                [{this.props.startDate ? this.props.startDate : "YYYY"}-
                {this.props.endDate ? this.props.endDate : "YYYY"}]
              </em>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
