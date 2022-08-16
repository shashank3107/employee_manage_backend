const express = require("express");
const router = express.Router();
const Employee = require("../../models/employee_model");

router.post("/", async (req, res) => {
  const newEmployee = new Employee(req.body);
  try {
    const employee = await newEmployee.save();
    if (!employee) throw Error("Something went wrong with the employee");
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find();
    if (!employee) throw Error("No Items");
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    if (!employee)
      throw Error("Something went wrong while updating the employee");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: "Failed to update" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) throw Error("No employee found!");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: "Failed to delete." });
  }
});

module.exports = router;
