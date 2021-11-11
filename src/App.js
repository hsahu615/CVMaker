import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Personal from "./components/personal";
import Educational from "./components/Educational";
import Experience from "./components/Experience";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      stream: "",
      session: "",
      company: "",
      title: "",
      description: "",
      start: "",
      end: "",
    };

    this.changeFun = this.changeFun.bind(this);
  }

  changeFun() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
    const school = document.getElementById("school").value;
    const stream = document.getElementById("stream").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const company = document.getElementById("CompanyName").value;
    const title = document.getElementById("title").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    this.setState({
      name: name,
      email: email,
      phone: phone,
      description: description,
      school: school,
      stream: stream,
      startDate: startDate,
      endDate: endDate,
      company: company,
      title: title,
      start: start,
      end: end,
    });
  }

  render() {
    return (
      <div className="rootSection">
        <Navbar />
        <div className="content">
          <div className="formContent">
            <Personal onChanged={this.changeFun} />
            <Educational onChanged={this.changeFun} />
            <Experience onChanged={this.changeFun} />
          </div>
          <div className="overview">
            <Overview
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              description={this.state.description}
              school={this.state.school}
              stream={this.state.stream}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              company={this.state.company}
              title={this.state.title}
              start={this.state.start}
              end={this.state.end}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
