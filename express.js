const express = require("express");

function claculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = claculateSum(n);
  res.send(ans.toString());
});

app.get("/hello", (req, res) => {
  res.send("hello ");
});
app.listen(3000);
