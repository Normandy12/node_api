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

                console.debug(user);
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
                console.debug(value);
                await model.create(value)
                res.json('Success')
            } catch(e) {
                console.error(e);
                res.status(500).json('Something went wrong')
            }
        },

        update_user: async function(req, res) {
            try {
                let value = req.body;
                console.debug(value);
                let user =  await model.findByPk(req.params.userId)
                await user.update(value)
                res.json('Success')
            } catch(e) {
                console.error(e);
                res.status(500).json('Something went wrong')
            }
        },

        delete_user: async function(req, res) {
            try {
                let value = req.body;
                console.debug(value);
                let count = await model.destroy({ 
                    where: {
                        id: req.params.userId
                    }
                });

                if(count == 0){
                    res.status(400).json('Invalid request');
                } else {
                    res.json('Success');
                }
            } catch(e) {
                console.error(e);
                res.status(500).json('Something went wrong')
            }
        },

       bulk_delete_users: async function(req, res) {
            try {
                let ids = req.body.id
                console.log(req.body);

                let count = await model.destroy({
                    where: {
                        id: ids,
                    }
                });

                if(count == 0){
                    res.status(400).json('Invalid request');
                } else {
                    res.json('Success');
                }

            } catch(e) {
                console.error(e);
                res.status(500).json('Something went wrong');
            }
       }
    }
}
