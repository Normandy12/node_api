'use strict';


module.exports = function(model) {

    return {
        list_all_users: async function(req, res) {
            try {
                let users = await model.findAll({raw: true})

                if(users){
                    res.json(users);
                } else { 
                    res.status(404);
                }

            } catch (e){
                res.status(500);
            }
        }
    }

}


exports.list_all_users = async function(req, res) {
    let users = await models.user.findAll()

    if(result){  
        res.json(users);
    } else { 
        res.status(404);
    }

};

exports.create_user = function(req, res) {
    res.json(true);
};


exports.get_user = function(req, res) {
    res.json(true);
};


exports.update_user = function(req, res) {
    res.json(true);
};


exports.delete_user = function(req, res) {
    res.json(true);
};
