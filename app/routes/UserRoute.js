'use strict';
module.exports = function(app, models) {
    var controller = require('../controllers/UserController')(models.user);

    // todoList Routes
    app.route('/users')
        .get(controller.list_all_users);
/*
        .post(controller.create_user);


    app.route('/tasks/:taskId')
        .get(controller.get_user)
        .put(controller.update_user)
        .delete(controller.delete_user);
*/
};

