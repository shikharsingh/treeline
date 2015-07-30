var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List all Pokemon
                sails.machines['7cac2099-e638-4828-a233-7d29bf553b55_1.2.0'].listAllPokemon({}).exec({
                    "error": function(listAllPokemon) {
                        return exits.error({
                            data: listAllPokemon,
                            status: 500
                        });

                    },
                    "success": function(listAllPokemon) {
                        return exits.respond({
                            data: listAllPokemon,
                            action: "respond_with_value_and_status",
                            status: 200,
                            view: ""
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};