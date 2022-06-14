import { Sequelize } from"sequelize"

const sequelize = new Sequelize("teste-db3", "user", "pass",{
    dialect: "sqlite",
    host: "./dev.sqlite2"
});

export default sequelize; 
