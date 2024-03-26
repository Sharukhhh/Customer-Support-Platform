import {DataTypes} from 'sequelize';

export default function complaintModel(sequelize, DataTypes) {

    const Complaints = sequelize.define('complaint' , {

        problemId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title : {
            type: DataTypes.STRING,
            allowNull: false
        },

        description : {
            type: DataTypes.STRING,
            allowNull: false
        },

        category : {
            type : DataTypes.STRING,
            allowNull : false
        },

        status: {
            type: DataTypes.ENUM('received' , 'opened', 'in progress', 'resolved'),
            defaultValue: 'received'
        },

        priority : {
            type: DataTypes.ENUM('high' , 'low'),
            allowNull: false
        }

    })

    return Complaints;
}