import { DataTypes } from"sequelize";
import sequelize from "../config/database.config.js";

const Categories = sequelize.define("categories", {
    id: {
        "type": DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Categories;