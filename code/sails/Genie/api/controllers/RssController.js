var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // TestMachine
                sails.machines['_project_3681_0.0.3'].TestMachine({}).setEnvironment({
                    req: req,
                    res: res,
                    sails: sails
                }).exec({
                    "error": function(testmachine) {
                        return exits.error({
                            data: testmachine,
                            status: 500
                        });

                    },
                    "success": function(testmachine) {
                        return exits.respond({
                            data: null,
                            action: "respond_with_value_and_status",
                            status: 200
                        });

                    },
                    "data": function(testmachine) {
                        return exits.error({
                            data: testmachine,
                            status: 500
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