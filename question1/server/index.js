const express = require("express");
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(
  cors({
    origin: '*',
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
  })
);

app.use((req, res, next) => {
  next();
});



const routes = require("./routes");;



app.use(routes);



app.listen(5000, () => {
  console.log("conected to port 5000");
});
