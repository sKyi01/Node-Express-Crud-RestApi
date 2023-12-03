const express = require("express");

const course = require("../models/course");

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const courses = await course.find();
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

routes.get("/:courseId", async (req, res) => {
  const id = req.params.courseId;
  try {
    const courses = await course.findById(id);
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

routes.post("/create", async (req, res) => {
  try {
    const c = await course.create(req.body);
    res.json(c);
  } catch (error) {
    res.json(error);
  }
});

routes.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const remove = await course.findByIdAndDelete(id);
    res.json(remove);
  } catch (error) {
    res.json(error);
  }
});

routes.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const update = await course.findByIdAndUpdate(id, req.body);
    if (!update) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(update);
  } catch (error) {
    res.json(error);
  }
});

module.exports = routes;
