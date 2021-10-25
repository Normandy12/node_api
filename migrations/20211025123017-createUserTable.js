'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db,callback) {
    db.createTable('user', {
        columns: {
            id: { type: 'int', primaryKey: true, autoIncrement: true },
            first_name: 'string', 
            last_name: 'string', 
            address: 'string',
            postcode: 'string',
            contact_number: 'string', 
            email: 'string', 
            username: 'string', 
            password: 'string'  
        },
        ifNotExists: true
    }, callback);
};

exports.down = function(db,callback) {
    db.dropTable('user', {
        ifExists: true
    }, callback);
};

exports._meta = {
    "version": 1
};
