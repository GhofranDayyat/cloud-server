'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;


app.get('/', home);


function home (req , res ){
    res.send("deploy is done ")
}
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))