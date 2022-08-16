const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const employeeRoutes = require("./routes/api/employees_controller");

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("", employeeRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
