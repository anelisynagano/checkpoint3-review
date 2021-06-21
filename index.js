const express = require("express");
const app = express();
const patientsRoute = require("./routes/patient-route");
const doctorsRoute = require("./routes/doctor-route");

app.use(express.json());
app.use("/patients", patientsRoute);
app.use("/doctors", doctorsRoute);

// route to see all doctors
// route to see all patients from a doctor

app.listen(5000, () => console.log("server running on port 5000"));
