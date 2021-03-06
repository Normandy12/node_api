require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": process.env.DEV_USER,
        "password": process.env.DEV_PASS,
        "database": "node_api",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.TEST_USER,
        "password": process.env.TEST_PASS,
        "database": "test_node_api",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
