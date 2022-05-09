// Import Express
const express = require("express");

// Initialize Express
const app = express();

// Serve Static build files form the "dist" directory
app.use(express.static("./dist/book-it-app"));

// Route incoming server requests to the correct files
app.get("/*", (_, res) =>
  res.sendFile("index.html", { root: "dist/book-it-app" })
);

// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
