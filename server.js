const express = require("express");
const routes = require("./routes/index");
const app = express();
const port = process.env.PORT || 5000;
// Import routes into app server.
app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
