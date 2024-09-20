import { Sequelize } from "sequelize";
import { bionacure,
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12
 } from "../config/database.js";

const { DataTypes } = Sequelize;

const Organization = bionacure.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

const Organization1 = dbcmm.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

const Organization2 = dbgap.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

const Organization3 = dbputikayo.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

const Organization4 = dbsinar12.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

const Organization5 = dbsr12.define('organization',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

export {
    Organization,
    Organization1,
    Organization2,
    Organization3,
    Organization4,
    Organization5
}