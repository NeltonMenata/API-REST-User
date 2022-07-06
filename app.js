const body_parser = require("body-parser");
const express = require("express");
const app = new express();
const { routes } = require("./routes/routes.js");
const port = process.env.PORT || 3000;

app.use(body_parser.json());
app.use(routes);


app.listen(port, ()=>{

    console.log("Rodando");
});