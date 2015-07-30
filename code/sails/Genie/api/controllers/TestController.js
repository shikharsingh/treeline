var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List Post
                sails.machines['_project_3681_0.0.3'].find_post({}).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(listPost) {
                        // Pick random item
                        sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.0.1'].sample({
                            "array": listPost
                        }).exec({
                            "error": function(pickRandomItem) {
                                return exits.error({
                                    data: pickRandomItem,
                                    status: 500
                                });

                            },
                            "success": function(pickRandomItem) {
                                // List Post
                                sails.machines['_project_3681_0.0.3'].find_post({}).setEnvironment({
                                    sails: sails
                                }).exec({
                                    "success": function(listPost2) {
                                        // List Users
                                        sails.machines['_project_3681_0.0.3'].find_users({}).setEnvironment({
                                            sails: sails
                                        }).exec({
                                            "success": function(listUsers) {
                                                return exits.respond({
                                                    data: listPost,
                                                    action: "respond_with_value_and_status",
                                                    status: 200
                                                });

                                            },
                                            "error": function(listUsers) {
                                                return exits.error({
                                                    data: listUsers,
                                                    status: 500
                                                });

                                            }
                                        });

                                    },
                                    "error": function(listPost2) {
                                        return exits.error({
                                            data: listPost2,
                                            status: 500
                                        });

                                    }
                                });

                            }
                        });

                    },
                    "error": function(listPost) {
                        return exits.error({
                            data: listPost,
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