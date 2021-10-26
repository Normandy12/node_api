'use strict';


module.exports = function(model) {

    return {
        list_all_users: async function(req, res) {
            try {
                let users = await model.findAll({raw: true})

                if(users){
                    res.json(users);
                } else { 
                    res.status(404).json('No users found');
                }

            } catch (e){
                console.error(e)
                res.status(500).json('Something went wrong');
            }
        },

        get_user: async function(req, res) {
            try{
                let user = await model.findByPk(req.params.userId)

                console.log(user);
                if(user){
                    res.json(user)
                } else {
                    res.status(404).json('Page not found');
                }

            } catch (e) {
                console.error(e)
                res.status(500).json('Something went wrong');
            }
        },

        create_user: async function(req, res) {
            try {
                let value = req.body;
                console.log(value);
                await model.create(value)
                res.json('Success')
            } catch(e) {
                console.error(e);
                res.status(500).json('Something went wrong')
            }
        },

        update_user: async function(req, res) {
            try {

            } catch(e) {
            }
        },

        delete_user: async function(req, res) {
            try {
            } catch(e) {
            }
        }

    }

}
