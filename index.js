const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Nisha" || password != "pass"){
        res.status(403).json({
            msg : "incorrect inputs",
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg : "incorrect inputs",
        });
        } else {
            next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidney is healthy");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidney is healthy");
});

app.get("/heart-checkup", userMiddleware, function (req, res) {
    res.send("Your heart is healthy");
});

app.listen(3000);