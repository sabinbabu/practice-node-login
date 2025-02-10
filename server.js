import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;
const _dirname = path.resolve();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<a href='/login'>Login</a><a href='/signup'>Sign Up</a>`);
});

app.get("/signup", (req, res) => {
  res.sendFile(`${_dirname}/signup.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${_dirname}/login.html`);
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const userResponse = email + "|" + password + "\n";
  const dataFile = _dirname + "/dataFile.csv";

  fs.appendFile(dataFile, userResponse, (error) => {
    if (error) {
      res.send("<p>An error occurred, please try again</p>");
      console.log(error.message);
    } else res.send("<p>You're all set. <a href='/login'>Login</a></p>");
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Running successfully at http://localhost:" + PORT);
});
