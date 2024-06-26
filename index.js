const fs = require('fs');
const axios = require('axios');
const { G4F } = require('g4f');
const { gpt } = require('gpti');
const { bing } = require('gpti');
const { search } = require('pinterest-dl');
const { Hercai } = require('hercai');
const { RsnChat } = require("rsnchat");
const { imagine } = require('@shuddho11288/sdxl-imagine');
const movieInfo = require('movie-info');
const jarifapi = require('jarif-api');
const ainasepics = require('ainasepics');
const express = require('express');
const app = express();
const rsnchat = new RsnChat("rsnai_ykZc1pfP2VnLLog34eFgWZI1");
const herc = new Hercai(); // Initialize Hercai

app.get('/gpt/v1', (req, res) => {
  // Extract the prompt and model from the query parameters
  const { prompt, model } = req.query;
  gpt({
    messages: [{ role: "user", content: prompt }],
    prompt: "", // You can remove this line unless you specifically need an empty prompt
    model: model,
    markdown: false
  }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
