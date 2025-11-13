import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PatientProfile from "./PatientProfile";
import PatientList from "./PatientList";
import Register from "./Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/patientprofile" element={<PatientProfile/>}/>
      <Route path="/patientlist" element={<PatientList/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default App;