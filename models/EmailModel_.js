import { Sequelize } from "sequelize";
import { bionacure,
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12,
    
 } from "../config/database.js";


const { DataTypes } = Sequelize;

const Email_ = bionacure.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Email_1 = dbcmm.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Email_2 = dbgap.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Email_3 = dbputikayo.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Email_4 = dbsinar12.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Email_5 = dbsr12.define('email',{
    nik:{
        type: DataTypes.STRING
    },
    nama_karyawan:{
        type: DataTypes.STRING
    },
    position_title:{
        type: DataTypes.STRING
    },
    e_mail:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    dept:{
        type: DataTypes.STRING
    },
    id_organization:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export {
    Email_,
    Email_1,
    Email_2,
    Email_3,
    Email_4,
    Email_5
};