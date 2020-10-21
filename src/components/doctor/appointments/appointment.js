import React, { Component } from "react";
import axios from "axios";
import "./appointment.scss";
import { Link } from "react-router-dom";

const Post = (props) => (
  <tr>
    <td>{props.post.name}</td>
    <td>{props.post.email}</td>
    <td>{props.post.county}</td>
    <td>{props.post.gender}</td>
    <td>{props.post.checkUp}</td>
    <td>{props.post.description}</td>
  </tr>
);

class Find extends Component {
  constructor(props) {
    super(props);
    this.postList = this.postList.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("http://localhost:5000/patientPost")
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({
          posts: data,
        });

        console.log("Data has been received");
      })
      .catch(() => {
        console.log("error retrieving data");
      });
  };

  postList = () => {
    return this.state.posts.map((currentPost) => {
      return <Post post={currentPost} key={currentPost._id} />;
    });
  };

  render() {
    return (
      <div className="container-fluid ">
        <h4 className="display-8">Patient record.</h4>
        <table className="table col-lg-12 col-md-6">
          <thead className="thead-light">
            <tr>
              <th>Name.</th>
              <th>Email.</th>
              <th>County.</th>
              <th>Gender.</th>
              <th>Check Up.</th>
              <th>Description.</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
        <Link to="/replies">
          <button type="button" className="btn btn-md btn-secondary">
            Click here to reply to the appointments.
          </button>
        </Link>
      </div>
    );
  }
}

export default Find;
