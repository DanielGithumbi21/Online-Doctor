import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <h4 className="display-3">Welcome to your Online Doctor.</h4>
      <div className="row padding">
        <div className="col-lg-6 col-md-12">
          <p className="lead">Click here for a check up or an appointment.</p>

          <Link to="/checkup">
            <button type="button" className="btn btn-md btn-warning">
              Check Up
            </button>
          </Link>
        </div>
        <div className="col-lg-6">
          <p className="lead">Click here to view your results.</p>
          <Link to="/results">
            <button type="button" className="btn btn-md btn-success">
              Results
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
