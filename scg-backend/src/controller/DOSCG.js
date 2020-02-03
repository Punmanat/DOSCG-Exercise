const express = require("express");
const router = express.Router();
const { X, Y, Z } = require("../utils/findXYZ");
const { B, C } = require("../utils/findBC");
const googleMapsClient = require("../settings/googleMap");
const reply = require("../utils/reply");
const send_notify = require("../utils/notify");
const Model = require("../model/DOSCG");

//find XYZ
router.get("/xyz", async (req, res) => {
  const data = await Model.getValue("xyz");
  if (data) {
    return res.json(data);
  }
  Model.setValue("xyz", { X, Y, Z });
  res.send({ X, Y, Z });
});

// // find BC
router.get("/bc", async (req, res) => {
  const data = await Model.getValue("bc");
  if (data) {
    return res.json(data);
  }
  Model.setValue("bc", { B,C });
  res.send({ B,C });
});

// find Distance
router.get("/route", async (req, res) => {
  const CentralWorld = ["13.7466304", "100.5371464"];
  const SCG = ["13.8059302", "100.5356363"];
  const query = {
    origin: SCG,
    destination: CentralWorld,
    mode: "driving"
  };
  const data = await Model.getValue("distance");
  if (data) {
    return res.json(data);
  }
  googleMapsClient.directions(query, (err, response) => {
    if (!err) {
      Model.setValue("distance", response.json);
      res.send(response.json);
    } else {
      res.send(err);
    }
  });
});

router.post("/line", (req, res) => {
  let durationInSecond;
  let reply_token = req.body.events[0].replyToken;
  const dateBefore = new Date();
  setTimeout(() => {
    reply(reply_token);
    const dateAfter = new Date();
    durationInSecond = (dateAfter - dateBefore) / 1000;
    if (durationInSecond > 10) {
      send_notify("bot reply > 10 seconds");
    } else {
      send_notify("bot reply < 10 seconds");
    }
  }, 10000);

  res.sendStatus(200);
});

module.exports = router;
