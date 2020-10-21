import React, { Component } from "react";
import Axios from "axios";

class AppointmentReplies extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeResults = this.onChangeResults.bind(this);
    this.state = {
      name: "",
      email: "",
      results: "",
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeResults(e) {
    this.setState({
      results: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      name: this.state.name,
      email: this.state.email,
      results: this.state.results,
    };
    console.log(post);
    Axios.post("http://localhost:5000/doctorPost/add", post).then((res) =>
      console.log(res.data)
    );
  }
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Patient's Name:</label>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Patient's Email:</label>
            <input
              value={this.state.email}
              onChange={this.onChangeEmail}
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Patient's Results:</label>
            <textarea
              required
              value={this.state.results}
              onChange={this.onChangeResults}
              className="form-control"
              rows="3"
            />{" "}
          </div>
          <button type="submit" className="btn-md btn-info btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AppointmentReplies;
