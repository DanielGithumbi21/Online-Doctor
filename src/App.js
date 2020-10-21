import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/patient/Banner/Banner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import checkUp from "./components/patient/checkUp/checkUp";
import Appointment from "./components/doctor/appointments/appointment";
import Goodbye from "./components/patient/Goodbye/Goodbye";
import Results from "./components/patient/Results/Results";
import AppointmentReplies from "./components/doctor/appointmentReplies/appointmentReplies";
const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Banner} />
        <Route path="/checkup" component={checkUp} />
        <Route path="/goodbye" component={Goodbye} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/replies" component={AppointmentReplies} />
        <Route path="/results" component={Results} />
      </Router>
    </div>
  );
};
export default App;
