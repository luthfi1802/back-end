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
// import Produk from "./models/product.js";
// // import Users from "./models/UserModel.js";
// import { bionacure } from "./config/database.js";
// import {bionacure,
//     dbcmm,
//     dbgap,
//     dbputikayo,
//     dbsinar12,
//     dbsr12
// }  from "./config/database.js";
// import { Organization,
//     Organization1,
//     Organization2,
//     Organization3,
//     Organization4,
//     Organization5
// } from "./models/OrganizationModel.js";
 dotenv.config();


const app = express();

// try {
//     await bionacure.authenticate();
//     console.log('database connected');
//     await Produk.sync();

//     await dbgap.authenticate();
//     console.log('database connected');
//     await Organization1.sync();

//     await dbputikayo.authenticate();
//     console.log('database connected');
//     await Organization2.sync();

//     await dbsinar12.authenticate();
//     console.log('database connected');
//     await Organization3.sync();

//     await dbsr12.authenticate();
//     console.log('database connected');
//     await Organization4.sync();

//     await dbcmm.authenticate();
//     console.log('database connected');
//     await Organization5.sync();
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