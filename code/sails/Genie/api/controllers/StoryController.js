var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "title": {
                    "example": "A day in the life of a scorpion",
                    "required": true
                },
                "body": {
                    "example": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "required": true
                },
                "ImageURL": {
                    "example": "http://www.google.com",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Post
                sails.machines['_project_3681_0.0.3'].create_post({
                    "Title": inputs.title,
                    "Source": "In-App",
                    "Body": inputs.body,
                    "ImageURL": inputs.ImageURL,
                    "PostingUserId": 0
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createPost) {
                        return exits.respond({
                            data: "/homepage",
                            action: "redirect",
                            status: 200
                        });

                    },
                    "error": function(createPost) {
                        return exits.error({
                            data: createPost,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    'edit': function(req, res) {
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
                        Id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOnePost) {
                        return exits.respond({
                            data: findOnePost,
                            action: "respond_with_result_and_status",
                            status: 200
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
    },
    'delete': function(req, res) {
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
                // Destroy Post
                sails.machines['_project_3681_0.0.3'].destroy_post({
                    "criteria": {
                        id: inputs.id
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(destroyPost) {
                        return exits.respond({
                            data: "/newsfeed",
                            action: "redirect",
                            status: 200
                        });

                    },
                    "error": function(destroyPost) {
                        return exits.error({
                            data: destroyPost,
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