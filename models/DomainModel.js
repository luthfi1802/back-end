import { Sequelize } from "sequelize";
import { bionacure,
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12
 } from "../config/database.js";


const { DataTypes } = Sequelize;

const Domain = bionacure.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Domain1 = dbcmm.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Domain2 = dbgap.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Domain3 = dbputikayo.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Domain4 = dbsinar12.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

const Domain5 = dbsr12.define('domain',{
    ip_local:{
        type: DataTypes.STRING
    },
    ip_public:{
        type: DataTypes.STRING
    },
    d_omain:{
        type: DataTypes.STRING
    },
    port:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export {
    Domain,
    Domain1,
    Domain2,
    Domain3,
    Domain4,
    Domain5
};