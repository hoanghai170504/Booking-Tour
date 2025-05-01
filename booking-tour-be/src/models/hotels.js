"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Hotel extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    Hotel.init(
        {
            hotel_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM("active", "inactive"),
                defaultValue: "active",
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,         
            },
        },
        {
            sequelize,
            modelName: "Hotel",
            tableName: "hotel",
            timestamps: true,
            underscored: true,
        }
    );  

    return Hotel;
};

