const express = require("express");
const router = express.Router();
const connection = require("../config");

// get all doctors
router.get("/", (req, res) => {
  connection.query("SELECT * FROM doctor", (err, results) => {
    if (err) {
      res.send(`error retrieving all doctors: ${err}`);
    } else {
      res.json(results);
    }
  });
});

// get all patients from a doctor
// localhost:5000/doctors/:id/patients
router.get("/:id/patients", (req, res) => {
  connection.query(
    "SELECT * FROM patient WHERE doctor_id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send(`error retrieving all patients from doctor: ${err}`);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
