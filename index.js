import express from "express";
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
// import {bionacure}  from "./config/database.js";
// import { Aplikasi5 } from "./models/AplikasiModel.js";
 dotenv.config();


const app = express();

// try {
//     await bionacure.authenticate();
//     console.log('database connected');
//     await Aplikasi5.sync();

//     await dbgap.authenticate();
//     console.log('database connected');
//     await Aplikasi1.sync();

//     await dbputikayo.authenticate();
//     console.log('database connected');
//     await Aplikasi2.sync();

//     await dbsinar12.authenticate();
//     console.log('database connected');
//     await Aplikasi3.sync();

//     await dbsr12.authenticate();
//     console.log('database connected');
//     await Aplikasi4.sync();

//     await dbbionacure.authenticate();
//     console.log('database connected');
//     await Aplikasi5.sync();
// } catch (error) {
//     console.log(error)
// }

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
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