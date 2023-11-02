const express = require("express");

const truthOrDare = express()


// The endpoint for the truth
const truth = require("./Routes/truth.js");
truthOrDare.use("/truth", truth);

// The endpoint for the dare
const dare = require("./Routes/dare.js");
truthOrDare.use("/dare", dare);


// Listening to the port
truthOrDare.listen(8080, ()=>{
    console.log("Listening to port 8080");
})