module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // price: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // description: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    });
    return User;
};