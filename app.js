const express = require('express');
const app = express();
const path = require("path")

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname,'/public/main.html'));
});

app.listen(5000, () => {
    console.log("Coastal logs");
});