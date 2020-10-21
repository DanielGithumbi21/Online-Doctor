import React, { Component } from "react";
import axios from "axios";
const Post = (props) => (
  <tr>
    <td>{props.post.name}</td>
    <td>{props.post.email}</td>
    <td>{props.post.results}</td>
  </tr>
);

class Results extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.postList = this.postList.bind(this);
    this.state = { posts: [] };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("http://localhost:5000/doctorPost")
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
        <h4 className="display-8">Patient results.</h4>
        <table className="table table-dark table-stripped col-lg-12 col-md-6">
          <thead className="thead-light">
            <tr>
              <th>Name.</th>
              <th>Email.</th>
              <th>Results.</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Results;
