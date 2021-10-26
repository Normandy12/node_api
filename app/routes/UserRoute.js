'use strict';
module.exports = function(app, models) {
    var controller = require('../controllers/UserController')(models.user);

    // todoList Routes
    app.route('/users')
        .get(controller.list_all_users)
        .post(controller.create_user)
        .delete(controller.bulk_delete_users);

    app.route('/users/:userId')
        .get(controller.get_user)
        .put(controller.update_user)
        .delete(controller.delete_user);
};

