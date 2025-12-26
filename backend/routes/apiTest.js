const express = require("express");
const axios = require("axios");
const ApiTest = require("../models/ApiTest");
const router = express.Router();

router.post("/", async (req, res) => {
  const { url } = req.body;
  const start = Date.now();

  try {
    await axios.get(url);
    const time = Date.now() - start;

    const result = new ApiTest({
      url,
      status: "UP",
      responseTime: time
    });
    await result.save();

    res.json(result);
  } catch {
    const result = new ApiTest({
      url,
      status: "DOWN",
      responseTime: 0
    });
    await result.save();

    res.json(result);
  }
});

module.exports = router;
