const express = require("express");

const app = express();
const PORT = 8000;

const users = require("./MOCK_DATA.json");

// Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.json(user);
});

// create new user
app.post("/api/users", (req, res) => {
  // TODO: create new user
  return res.json({ status: "pending" });
});

// merged

// app.route("/api/users/:id").put((req, res) => {}).delete((req, res) => {}).patch((req, res) => {});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
