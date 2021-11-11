import React, { Component } from "react";
import "../styles/experience.css";

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ExperienceInfo">
        <h4>Experience: </h4>
        <form>
          <input
            id="CompanyName"
            type="text"
            placeholder="Company"
            onChange={this.props.onChanged}
          ></input>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={this.props.onChanged}
          ></input>

          <input
            id="start"
            onChange={this.props.onChanged}
            type="number"
            placeholder="Start Date"
            min="1965"
            max="2025"
          />
          <input
            onChange={this.props.onChanged}
            id="end"
            type="number"
            placeholder="End Date"
            min="1965"
            max="2025"
          />
        </form>
      </div>
    );
  }
}

export default Experience;
