import { Sequelize } from "sequelize";
import { bionacure,
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12
 } from "../config/database.js";


const { DataTypes } = Sequelize;

const Db_database = bionacure.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Db_database1 = dbcmm.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Db_database2 = dbgap.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Db_database3 = dbputikayo.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Db_database4 = dbsinar12.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Db_database5 = dbsr12.define('db_database',{
    host:{
        type: DataTypes.STRING
    },
    users:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    database_name:{
        type: DataTypes.STRING
    },
    driver:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export {
    Db_database,
    Db_database1,
    Db_database2,
    Db_database3,
    Db_database4,
    Db_database5
}