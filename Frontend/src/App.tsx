import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import PatientProfile from "./PatientProfile";
import PatientList from "./PatientList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/patientprofile" element={<PatientProfile/>}/>
      <Route path="/patientlist" element={<PatientList/>}/>
    </Routes>
  );
}

export default App;