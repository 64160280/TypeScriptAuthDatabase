"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jwt = require('jsonwebtoken');
module.exports = function authenticateToken(req, res, next) {
    let authrization = req.headers.authorization || "";
    let token = authrization.split(" ")[1];
    if (token == "") {
        return res.sendStatus(401);
    }
    try {
        let checkToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = checkToken;
        next();
    }
    catch (e) {
        console.log(e.message);
        return res.sendStatus(498);
    }
};
