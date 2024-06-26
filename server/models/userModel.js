import {DataTypes} from 'sequelize';


export default  function UserModel(sequelize, DataTypes) {

    const User = sequelize.define ('user' , {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return User;
}


