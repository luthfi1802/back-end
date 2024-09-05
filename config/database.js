import { Sequelize } from "sequelize";

const dbcmm = new Sequelize('db_cmm', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const dbgap = new Sequelize('db_gap', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const dbputikayo = new Sequelize('db_putikayo', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const dbsinar12 = new Sequelize('db_sinar12', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const dbsr12 = new Sequelize('db_sr12', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const bionacure = new Sequelize('bionacure', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export {
    dbcmm,
    dbgap,
    dbputikayo,
    dbsinar12,
    dbsr12,
    bionacure
}