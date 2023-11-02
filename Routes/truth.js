const fs = require("fs");
const express = require("express");
const { v4: uuidv4 } = require('uuid');


const truthEndPoint = express.Router();

const supported_languages = ["english", "spanish"];
const supported_audience = ["family", "adults"];

truthEndPoint.get("/:language/:audience", (req, res) => {

    // The default language is English
    let curr_language = req.params.language || english;
    if (!(supported_languages.includes(curr_language))){
        curr_language = "english";
    }

    // The default audience is family
    let curr_audience = req.params.audience || family;
    if (!(supported_audience.includes(curr_audience))){
        curr_audience = "family";
    }

    function getData(path){
        const allData = fs.readFileSync(path);
        return JSON.parse(allData);
    }

    let curr_data = getData("data/truth.json")

    // Only the data that matchs the requirement will show
    const satisfied_data = curr_data.filter((data) => {
        return data.audience === curr_audience && data.language === curr_language;
    })

    console.log(satisfied_data)

    // Randomly choose one from the data
    const randomTruth = Math.floor(Math.random() * satisfied_data.length)
    
    res.json(satisfied_data[randomTruth]);
    
})





module.exports = truthEndPoint;