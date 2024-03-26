import {dbConfig} from './dbconfig.js';
import Sequelize from 'sequelize';
import mysql2 from 'mysql2'
import UserModel from '../models/userModel.js'
import complaintModel from '../models/complaintModel.js'

const sequelize = new Sequelize(dbConfig.DB , dbConfig.USER, dbConfig.PASSWORD , {

    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    dialectModule: mysql2,

    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        accquire: dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
})

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Users = UserModel(sequelize , Sequelize.DataTypes);
db.models.Complaints = complaintModel(sequelize , Sequelize.DataTypes);

db.models.Users.hasMany(db.models.Complaints , {foreignKey : 'email'});
db.models.Complaints.belongsTo(db.models.Users , {foreignKey : 'email'});

export default db;



