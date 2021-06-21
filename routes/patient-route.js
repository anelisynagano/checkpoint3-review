const express = require("express");
const router = express.Router();
const connection = require("../config");

// route to get all patients
// localhost:5000/patients
router.get("/", (req, res) => {
  connection.query("SELECT * FROM patient", (err, results) => {
    if (err) {
      res.send("Error retrieving patients from DB");
    } else {
      res.send(results);
    }
  });
});

// route to get patient by id
// localhost:5000/patients/:id
router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM patient WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error retrieving patient from DB");
      } else {
        res.send(results);
      }
    }
  );
});

// route to add patient
router.post("/", (req, res) => {
  const { name, doctor_id } = req.body;
  connection.query(
    "INSERT INTO patient (name, doctor_id) VALUES (?, ?)",
    [name, doctor_id],
    (err, results) => {
      if (err) {
        res.send(`Error inserting patient in DB. Error: ${err}`);
      } else {
        res.send("patient added to db");
      }
    }
  );
});

// edit a patient
// localhost:5000/patients
router.put("/:id", (req, res) => {
  //send new information on the body of the request (change only name)
  //update only the patient where the id matches the params
  connection.query(
    "UPDATE patient SET name = ? WHERE id=?",
    [req.body.name, req.params.id],
    (err, results) => {
      if (err) {
        res.send(`Error editing patient in DB. Error: ${err}`);
      } else {
        res.send("patient edited in db");
      }
    }
  );
});

// delete a patient
router.delete("/:id", (req, res) => {
  connection.query("DELETE FROM patient WHERE id=?", [req.params.id], (err, results) => {
    if (err) {
        res.send(`Error deleting patient in DB. Error: ${err}`);
      } else {
        res.send("patient deleted in db");
      }
  });
});

module.exports = router;
