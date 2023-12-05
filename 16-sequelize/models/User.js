const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        'user', {
        // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // userid VARCHAR(20) NOT NULL,
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        // name VARCHAR(10) NOT NULL,
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        // pw VARCHAR(20) NOT NULL
        pw: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'user2',
        timestamps: false
    }
    )
    return model;
};

module.exports = User;