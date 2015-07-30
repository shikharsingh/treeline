var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {
                "id": {
                    "example": "abc123",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Find One Post
                sails.machines['_project_3681_0.0.3'].findOne_post({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOnePost) {
                        // GetUpvotes
                        sails.machines['_project_3681_0.0.3'].find_votes({
                            "criteria": {
                                Id: (findOnePost && findOnePost.id),
                                isUpvote: "true"
                            }
                        }).setEnvironment({
                            sails: sails
                        }).exec({
                            "success": function(getupvotes) {
                                // CountUpvotes
                                sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.0.1'].length({
                                    "array": getupvotes
                                }).exec({
                                    "error": function(countupvotes) {
                                        return exits.error({
                                            data: countupvotes,
                                            status: 500
                                        });

                                    },
                                    "success": function(countupvotes) {
                                        // GetDownvotes
                                        sails.machines['_project_3681_0.0.3'].find_votes({
                                            "criteria": {
                                                id: (findOnePost && findOnePost.id),
                                                isDownvote: true
                                            }
                                        }).setEnvironment({
                                            sails: sails
                                        }).exec({
                                            "success": function(getdownvotes) {
                                                // CountDownvotes
                                                sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.0.1'].length({
                                                    "array": getdownvotes
                                                }).exec({
                                                    "error": function(countdownvotes) {
                                                        return exits.error({
                                                            data: countdownvotes,
                                                            status: 500
                                                        });

                                                    },
                                                    "success": function(countdownvotes) {
                                                        return exits.respond({
                                                            data: {
                                                                layout: "internal",
                                                                post: findOnePost,
                                                                upvotes: 24
                                                            },
                                                            action: "display_view",
                                                            status: 200,
                                                            view: "fullstory2"
                                                        });

                                                    }
                                                });

                                            },
                                            "error": function(getdownvotes) {
                                                return exits.error({
                                                    data: getdownvotes,
                                                    status: 500
                                                });

                                            }
                                        });

                                    }
                                });

                            },
                            "error": function(getupvotes) {
                                return exits.error({
                                    data: getupvotes,
                                    status: 500
                                });

                            }
                        });

                    },
                    "error": function(findOnePost) {
                        return exits.error({
                            data: findOnePost,
                            status: 500
                        });

                    },
                    "notFound": function(findOnePost) {
                        return exits.error({
                            data: findOnePost,
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