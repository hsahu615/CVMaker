import React, { Component } from "react";
import "../styles/educational.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class Educational extends Component {
  constructor(props) {
    super(props);
  }
  educationSubmitBtn = (e) => {
    e.preventDefault();
    this.setState({
      education: {
        school: document.getElementById("school").value,
        stream: document.getElementById("stream").value,
        session: document.getElementById("session").value,
      },
    });
    document.querySelector(".schoolShow").style.display = "block";
    document.querySelector(".streamShow").style.display = "block";
    document.querySelector(".sessionShow").style.display = "block";
    document.getElementById("school").style.display = "none";
    document.getElementById("stream").style.display = "none";
    document.getElementById("session").style.display = "none";
  };

  educationEditBtn = (e) => {
    document.querySelector(".schoolShow").style.display = "none";
    document.querySelector(".streamShow").style.display = "none";
    document.querySelector(".sessionShow").style.display = "none";
    document.getElementById("school").style.display = "block";
    document.getElementById("stream").style.display = "block";
    document.getElementById("session").style.display = "block";
  };

  render() {
    return (
      <div className="EducationalInfo">
        <h4>Educational Details: </h4>
        <form onSubmit={this.educationSubmitBtn}>
          <input
            id="school"
            onChange={this.props.onChanged}
            type="text"
            placeholder="School"
            required
          ></input>
          <input
            id="stream"
            onChange={this.props.onChanged}
            type="text"
            placeholder="Stream"
            required
          ></input>
          <input
            id="startDate"
            type="number"
            placeholder="Start Date"
            min="1965"
            onChange={this.props.onChanged}
            max="2025"
          />
          <input
            id="endDate"
            type="number"
            onChange={this.props.onChanged}
            placeholder="End Date"
            min="1965"
            max="2025"
          />
        </form>
        {/* <FontAwesomeIcon
          icon={faEdit}
          id="educationEdit"
          onClick={this.educationEditBtn}
        /> */}
      </div>
    );
  }
}

export default Educational;
