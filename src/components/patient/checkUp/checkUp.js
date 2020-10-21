import React, { Component } from "react";
import "./checkUp.scss";
import axios from "axios";

class checkUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCounty = this.onChangeCounty.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCheckUp = this.onChangeCheckUp.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      county: "",
      age: "",
      gender: "",
      checkUp: "",
      description: "",
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
  onChangeCounty(e) {
    this.setState({
      county: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeCheckUp(e) {
    this.setState({
      checkUp: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      name: this.state.name,
      email: this.state.email,
      county: this.state.county,
      gender: this.state.gender,
      age: this.state.age,
      checkUp: this.state.checkUp,
      description: this.state.description,
    };
    console.log(post);
    axios
      .post("http://localhost:5000/patientPost/add", post)
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div className="container-fluid">
        <h4 style={{ textAlign: "center", fontSize: "25px", color: "coral" }}>
          ONLINE DOCTOR
        </h4>
        <p className="display-6" style={{ color: "cadetBlue" }}>
          Online Doctor is an online programme where you can communicate with a
          doctor. You can get prescriptions or appointments.Fill the details and
          the doctor will attend to you as soon as possible.
        </p>
        <form className="form-group" onSubmit={this.onSubmit}>
          <div className="row padding">
            <div className="col-md-12 col-lg-6">
              <label>Name:</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="col-lg-6">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label>county:</label>
              <select
                ref="userInput"
                placeholder="choose your county"
                required
                className="form-control"
                value={this.state.county}
                onChange={this.onChangeCounty}
              >
                <option>..</option>
                <option>Kisumu</option>
                <option>Muranga</option>
                <option>Kirinyaga</option>
                <option>Nyeri</option>
                <option>Embu</option>
                <option>Meru</option>
                <option>Tharaka Nithi</option>
                <option>Isiolo</option>
                <option>Marsabit</option>
                <option>Kajiado</option>
                <option>Narok</option>
                <option>Machakos</option>
                <option>Makueni</option>
                <option>Kitui</option>
                <option>Tana River</option>
                <option>Turkana</option>
                <option>Laikipia</option>
                <option>Nakuru</option>
                <option>Uasin Gishu</option>
                <option>Baringo</option>
                <option>Garissa</option>
                <option>Wajir</option>
                <option>Kilifi</option>
                <option>Taita Taveta</option>
                <option>Lamu</option>
                <option>Migori</option>
                <option>Busia</option>
                <option>Homa Bay</option>
                <option>Bungoma</option>
                <option>Kakamega</option>
                <option>Mandera</option>
                <option>Nandi</option>
                <option>Samburu</option>
                <option>Bomet</option>
                <option>Nyandarua</option>
                <option>Trans Nzoia</option>
                <option>Nairobi</option>
                <option>Kiambu</option>
                <option>Mombasa</option>
                <option>Kwale</option>
                <option>Siaya</option>
                <option>West Pokot</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label>Gender:</label>
              <select
                ref="userInput"
                required
                placeholder="choose your gender"
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div className="col-md-12 col-lg-6">
              <label>Age:</label>
              <input
                required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
              />
            </div>
            <div className="col-lg-6">
              <label>Checkup:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.checkUp}
                onChange={this.onChangeCheckUp}
              />
            </div>
            <div className="col-lg-12">
              <label>Description:</label>
              <textarea
                type="text"
                value={this.state.description}
                onChange={this.onChangeDescription}
                className="form-control"
                rows="3"
              />
            </div>
            <div className="Link">
              <button
                className="btn btn-primary btn-md form-control"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default checkUp;
