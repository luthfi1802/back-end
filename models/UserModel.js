import { Sequelize } from "sequelize";
import { bionacure } from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = bionacure.define('users', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    resetPasswordLink:{
        type: DataTypes.STRING,
        defaultValue: ''
    }
}, {
    freezeTableName: true
});

export default Users;