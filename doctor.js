const express = require("express");

const app = express();
app.use(express.json());
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidney = users[0].kidneys;
  // console.log(johnKidney);
  const numberOfKidneys = johnKidney.length;
  let numberOfHealthyKidneys = 0;
  for (i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberUnOfHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    johnKidney,
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberUnOfHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done ",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({ msg: "Kidney Deleted" });
});
app.listen(3000);
