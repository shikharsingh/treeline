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
                sails.machines['_project_3681_0.0.3'].find_post({
                    "criteria": {},
                    "sort": {}
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(listPost) {
                        return exits.respond({
                            data: {
                                title: "Genie News feed",
                                posts: listPost,
                                layout: "internal"
                            },
                            action: "display_view",
                            status: 200,
                            view: "newsfeed"
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