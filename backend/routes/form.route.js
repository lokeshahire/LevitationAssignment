const express = require("express");

const formRouter = express.Router();

const { FormModel } = require("../model/form.model");

formRouter.post("/add", async (req, res) => {
  try {
    const data = new FormModel({
      file: [
        {
          url: req.file.path,
          imageId: req.file.filename,
        },
      ],
      ...req.body,
    });
    const createData = await data.save();
    res.status(201).json({ message: "success", data: createData });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "user info is not save" });
  }
});

formRouter.get("/", async (req, res) => {
  try {
    const data = await FormModel.find();
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
});

module.exports = { formRouter };
