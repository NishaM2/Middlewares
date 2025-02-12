const express = require("express");
const app = express();

app.get("/health-checkup",(req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "Nisha" || password != "pass"){
        res.status(400).json({"msg" : "Somethings up with ur inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg" : "Somethings up with ur inputs"})
        return
    }

    res.json({
        msg:"Your Kidney is fine!"
    })
    
    
  
});

app.listen(3000);