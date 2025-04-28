"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        static associate(models) {
            // Nếu sau này cần liên kết với model khác thì khai báo ở đây
        }
    }

    Blog.init(
        {
            blog_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdate: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: "Blog",
            tableName: "blog",
            timestamps: true,
            underscored: true,
        }
    );

    return Blog;
};