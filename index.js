import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import AplikasiRoute from "./Routes/AplikasiRoute.js";
import OrganizationRoute from "./Routes/OrganizationRoute.js"
import DomainRoute from "./Routes/DomainRoute.js";
import EmailRoute from "./Routes/EmailRoute.js";
import ServerRoute from "./Routes/ServerRoute.js";
import Db_databaseRoute from "./Routes/Db_databaseRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import AuthRoute from "./Routes/AuthRoute.js";
import DashboardRoute from "./Routes/DashboardRoute.js"

dotenv.config();


const app = express();


app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    origin: "http://localhost:5174"
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(AplikasiRoute);
app.use(OrganizationRoute);
app.use(DomainRoute);
app.use(EmailRoute);
app.use(ServerRoute);
app.use(Db_databaseRoute);
app.use(AuthRoute);
app.use(UserRoute);
app.use(DashboardRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('server berjalan dengan baik...');
});