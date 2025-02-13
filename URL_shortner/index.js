const express = require("express");
const urlRoute = require("./routes/url");
const { connectToDB } = require("./connection");
const URL = require("./models/url");

const app = express();
const PORT = 3000;

connectToDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("Connected to database");
});

app.use(express.json());

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: { visitHistory: { Timestamp: new Date().getTime() } },
    }
  );
  if (entry) {
    res.redirect(entry.redirectUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
