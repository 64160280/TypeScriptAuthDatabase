"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const database_1 = __importDefault(require("./database"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.authenticate();
        console.log("auth to database success");
    }
    catch (e) {
        console.error(e);
    }
}))();
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ['localhost', '127.0.0.1']
}));
const con_business_category = require('./controllers/business_category');
const con_causes_accident = require('./controllers/causes_accident');
app.use('/business_category', con_business_category);
app.use('/causes_accident', con_causes_accident);
const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {
    let data = req.body;
    // TODO get username from db
    // TODO check password
    if (data.username == "admin" && data.password == "pass") {
        res.json({
            status: true,
            token: jwt.sign({ id: 1, username: data.username,
                exp: Math.floor(Date.now() / 1000) + (3 * 60) }, process.env.JWT_SECRET_KEY)
        });
    }
    else {
        res.json({
            status: false,
            error: "invalid username or password"
        });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
