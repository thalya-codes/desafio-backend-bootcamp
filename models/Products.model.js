import { DataTypes } from"sequelize";
import sequelize from "../config/database.config.js";
import Categories from "./Categories.model.js"


const Products = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.FLOAT,
    },
    person_count: {
        type: DataTypes.INTEGER,
    },
    disponibility: {
        type: DataTypes.BOOLEAN,
    },
    image: {
        type: DataTypes.BLOB
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
//inicializando tabela


Products.belongsTo(Categories, {
    constraints: true,
    foreignKey: "category_id"
})


export default Products;
