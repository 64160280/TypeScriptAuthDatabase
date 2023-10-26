"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("./models");
require("dotenv/config");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
sequelize.addModels([
    models_1.business_categories,
    models_1.causes_accidents,
    models_1.road_safeties,
    models_1.road_safety_and_causes_accident,
    models_1.user_types,
    models_1.users
]);
exports.default = sequelize;
