import React, { Component } from "react";
import "../styles/Personal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PersonalInfo">
        <h4>Personal Details: </h4>
        <form onSubmit={this.onSubmitBtn}>
          <input
            placeholder="Name"
            onChange={this.props.onChanged}
            id="name"
            required
            type="text"
            className="nameInput"
          ></input>
          <input
            placeholder="Email"
            onChange={this.props.onChanged}
            id="email"
            type="email"
            required
          ></input>
          <input
            placeholder="Phone Number"
            onChange={this.props.onChanged}
            id="phone"
            type="text"
            required
          ></input>
          <textarea
            id="description"
            rows="5"
            cols="20"
            onChange={this.props.onChanged}
            placeholder="Description"
          ></textarea>
        </form>
        {/* <FontAwesomeIcon icon={faEdit} id="edit" onClick={this.onEditBtn} /> */}
      </div>
    );
  }
}

export default Personal;
