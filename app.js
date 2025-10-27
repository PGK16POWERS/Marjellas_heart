const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.status(200).sendFile(path.dir('/public/main.html'));
});

app.listen(5000, () => {
    console.log("Coastal logs");
});
