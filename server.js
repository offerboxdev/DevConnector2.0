// [Ran] Packages used in the project
// npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
// npm i -D nodemon concurrently

// Information about jwtwebtoken: https://github.com/auth0/node-jsonwebtoken

//-----------------------------------------------------
// npx create-react-app client
//-----------------------------------------------------

// npm start
//     Starts the development server.
//   npm run build
//     Bundles the app into static files for production.
//   npm test
//     Starts the test runner.
//   npm run eject
//     Removes this tool and copies build dependencies, configuration files
//     and scripts into the app directory. If you do this, you can’t go back!
// We suggest that you begin by typing:
//   cd client
//   npm start

// Learn reactjs: https://reactjs.org/

// package.json: "dev": "concurrently \"npm run server\" \"npm run client\""
// $>npm run dev

//-----------------------------------------------------
// npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
//-----------------------------------------------------

const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

// Init middleware
app.use(express.json({ extended: false })); // Previously bodyParser.json()

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.get("/", (req, res) => res.send("API Running"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
