import {Sequelize} from "sequelize-typescript";
import { business_categories, causes_accidents, road_safeties, road_safety_and_causes_accident, user_types, users } from "./models";
import 'dotenv/config';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

sequelize.addModels([
    business_categories, 
    causes_accidents, 
    road_safeties, 
    road_safety_and_causes_accident, 
    user_types, 
    users
])

export default sequelize;

