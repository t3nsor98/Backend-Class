const app = express();
const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const users = require("./MOCK_DATA.json");



// middleware
app.use(express.urlencoded({ extended: true }));

// schema

// Routes


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
