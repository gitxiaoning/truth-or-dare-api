// const openai = require("openai");
const dotenv = require('dotenv');
dotenv.config();

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


// A function queries the GPT model
async function queryGPT(message){
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": message}],
    temperature: 1,
    top_p: 1
  });
  return (chatCompletion.choices[0].message);
}

// A function generate a truth or dare by GPT
async function getTruthOrDare(option, language, audience){
  let prompt =`Being creativity me a unique ${option} question in Dare or Truth game for ${audience} in ${language}.  Put $ before and after your ${option} question.`

  if (option === "truth"){
    prompt += "Try your best not generate about what is the most embarrassing thing you have ever done in public."
  }
  const output = await queryGPT(prompt);
  
  const outputContent = output.content;
  // Retrieve the question using re
  const match = outputContent.match(/\$(.*?)\$/g);

  console.log(match[0].substring(1, outputContent.length - 1));
  return match[0].substring(1, outputContent.length - 1)
}


module.exports={getTruthOrDare};

