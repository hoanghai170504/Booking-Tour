"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }

    User.init(
        {
            user_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            full_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            role: {
                type: DataTypes.ENUM("admin", "user"),
                defaultValue: "user",
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM("active", "inactive"),
                defaultValue: "active",
                setStatus(value) {
                    if (value === "active" || value === "inactive") {
                        this.setDataValue("status", value);
                    }
                }
            },
            reset_token: {
                type: DataTypes.STRING,
                allowNull: true
            },
            reset_token_expires: {
                type: DataTypes.DATE,
                allowNull: true
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: "User",
            tableName: "User",
            timestamps: true,
            underscored: true,
        }
    );

    return User;
};