const fs = require("fs");
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const {getTruthOrDare} = require("../gpt");

const truthEndPoint = express.Router();

const supported_languages = ["english", "spanish", "french", "latin", "chinese"];
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

    // Query the GPT
    async function getTruth(language, audience){
        const truthContent = await getTruthOrDare("truth", language, audience);
        
        const truthEntry = {
            "type":"truth",
            "audience":audience,
            "content":truthContent,
            "language":language,
            "id":uuidv4()
        }
        
        res.json(truthEntry);
    }

    getTruth(curr_language, curr_audience);

    // The following code is archived
    // function getData(path){
    //     const allData = fs.readFileSync(path);
    //     return JSON.parse(allData);
    // }

    //let curr_data = getData("data/dare.json")

    // Only the data that matchs the requirement will show
    // const satisfied_data = curr_data.filter((data) => {
    //     return data.audience === curr_audience && data.language === curr_language;
    // })

    // console.log(satisfied_data)

    // Randomly choose one from the data
    // const randomDare = Math.floor(Math.random() * satisfied_data.length)
    
    //res.json(satisfied_data[randomDare]);
    
})


module.exports = truthEndPoint;