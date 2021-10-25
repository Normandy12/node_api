'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', { 
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            address: Sequelize.STRING,
            postcode: Sequelize.INTEGER,
            contact_number: Sequelize.STRING,
            email: Sequelize.STRING,
            username: Sequelize.STRING,
            password: Sequelize.STRING,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('user');
    }
};
