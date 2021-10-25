'use strict';

 var faker = require('faker');


let generateUsers = count => {
    var users = []

    for(let i = 0; i <= count; i++){
        users.push({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.country(),
            postcode: faker.datatype.number(),
            contact_number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        })
    }

    return users

}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let users = generateUsers(10);

        await queryInterface.bulkInsert('user', users);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('user', null, {});
    }
};
