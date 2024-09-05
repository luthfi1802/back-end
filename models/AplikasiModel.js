import { Sequelize } from "sequelize";
import { dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12,
    bionacure
 } from "../config/database.js";

 const { DataTypes } = Sequelize;

 const Aplikasi = bionacure.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING,  
    },
    ip_public:{
        type: DataTypes.STRING,
    },
    port_int:{
        type: DataTypes.STRING,
    },
    port_ext:{
        type: DataTypes.STRING,
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 const Aplikasi1 = dbcmm.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING,  
    },
    ip_public:{
        type: DataTypes.STRING,
    },
    port_int:{
        type: DataTypes.STRING, 
    },
    port_ext:{
        type: DataTypes.STRING, 
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 const Aplikasi2 = dbgap.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    port_int:{
        type: DataTypes.STRING
    },
    port_ext:{
        type: DataTypes.STRING
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 const Aplikasi3 = dbputikayo.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    port_int:{
        type: DataTypes.STRING
    },
    port_ext:{
        type: DataTypes.STRING
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 const Aplikasi4 = dbsinar12.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    port_int:{
        type: DataTypes.STRING
    },
    port_ext:{
        type: DataTypes.STRING
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 const Aplikasi5 = dbsr12.define('aplikasi', {
    vm_id:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    port_int:{
        type: DataTypes.STRING
    },
    port_ext:{
        type: DataTypes.STRING
    },
    domain:{
        type: DataTypes.STRING
    },
    appname:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true
 });

 export {
    Aplikasi,
    Aplikasi1,
    Aplikasi2,
    Aplikasi3,
    Aplikasi4,
    Aplikasi5
}