import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './database';
import { createSecretKey } from 'crypto';
const { User } = require('./models/users');

(async () => {
    try {
        await sequelize.authenticate();
        console.log("auth to database success")
    } catch (e) {
        console.error(e)
    }
})()

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ['localhost', '127.0.0.1']
}))

const con_business_category = require('./controllers/business_category')
const con_causes_accident = require('./controllers/causes_accident')
app.use('/business_category', con_business_category)
app.use('/causes_accident', con_causes_accident)

const jwt = require('jsonwebtoken');

app.post('/login',async (req, res)=>{
    let data = req.body;
    
    // TODO get username from db
        try {
        // Attempt to find a user with the provided username in the database
        const user = await User.findOne({ where: { username: data.username } });

         // TODO check password
        if (user && user.password === data.password) {
            // User found and password matches
            res.json({
                status: true,
                token: jwt.sign(
                    {
                        id: user.id,
                        username: user.username,
                        exp: Math.floor(Date.now() / 1000) + 3 * 60, // Adjust token expiration as needed
                    },
                    process.env.JWT_SECRET_KEY
                ),
            });
        } else {
            // User not found or password is incorrect
            res.json({
                status: false,
                error: "Invalid username or password",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            error: "Server error",
        });
    }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


