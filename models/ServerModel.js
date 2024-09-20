import { Sequelize } from "sequelize";
import { bionacure,
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12
 } from "../config/database.js";

const { DataTypes } = Sequelize;

const Servers = bionacure.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Servers1 = dbcmm.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Servers2 = dbgap.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Servers3 = dbputikayo.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Servers4 = dbsinar12.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Servers5 = dbsr12.define('servers',{
    type:{
        type: DataTypes.STRING
    },
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    os:{
        type: DataTypes.STRING
    },
    Username:{
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    core:{
        type: DataTypes.STRING
    },
    ram:{
        type: DataTypes.STRING
    },
    hdd:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export {
    Servers,
    Servers1,
    Servers2,
    Servers3,
    Servers4,
    Servers5
    
}