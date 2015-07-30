var Machine = require("machine");
module.exports = {
    'login': function(req, res) {
        Machine.build({
            inputs: {
                "username": {
                    "example": "abc123",
                    "required": true
                },
                "password": {
                    "example": "l0lcatzz",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Find One Users
                sails.machines['_project_3681_0.0.3'].findOne_users({
                    "criteria": {
                        Email: inputs.username
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneUsers) {
                        // Check password
                        sails.machines['e05a71f7-485d-443a-803e-029b84fe73a4_2.2.1'].checkPassword({
                            "passwordAttempt": inputs.password,
                            "encryptedPassword": (findOneUsers && findOneUsers.Password)
                        }).exec({
                            "error": function(checkPassword) {
                                return exits.error({
                                    data: checkPassword,
                                    status: 500
                                });

                            },
                            "incorrect": function(checkPassword) {
                                return exits.error({
                                    data: checkPassword,
                                    status: 500
                                });

                            },
                            "success": function(checkPassword) {
                                // Save to session
                                sails.machines['0ab17fbc-e31c-430d-85a4-929318f5e715_0.3.2'].save({
                                    "key": "Id",
                                    "value": (findOneUsers && findOneUsers.id)
                                }).setEnvironment({
                                    req: req
                                }).exec({
                                    "error": function(saveToSession) {
                                        return exits.respond({
                                            data: "/",
                                            action: "redirect",
                                            status: 500
                                        });

                                    },
                                    "success": function(saveToSession) {
                                        return exits.respond({
                                            data: "/homepage",
                                            action: "redirect",
                                            status: 200
                                        });

                                    }
                                });

                            }
                        });

                    },
                    "error": function(findOneUsers) {
                        return exits.respond({
                            data: "/",
                            action: "redirect",
                            status: 500
                        });

                    },
                    "notFound": function(findOneUsers) {
                        return exits.error({
                            data: findOneUsers,
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
    'signup': function(req, res) {
        Machine.build({
            inputs: {
                "password": {
                    "example": "l0lcatzz",
                    "required": true
                },
                "email": {
                    "example": "ssingh@sensecorp.com",
                    "required": true
                },
                "name": {
                    "example": "Shikhar Singh",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Encrypt password
                sails.machines['e05a71f7-485d-443a-803e-029b84fe73a4_2.2.1'].encryptPassword({
                    "password": inputs.password
                }).exec({
                    "error": function(encryptPassword) {
                        return exits.error({
                            data: encryptPassword,
                            status: 500
                        });

                    },
                    "success": function(encryptPassword) {
                        // Create Users
                        sails.machines['_project_3681_0.0.3'].create_users({
                            "Email": inputs.email,
                            "Password": encryptPassword,
                            "Name": inputs.name
                        }).setEnvironment({
                            sails: sails
                        }).exec({
                            "success": function(createUsers) {
                                // Save to session
                                sails.machines['0ab17fbc-e31c-430d-85a4-929318f5e715_0.3.2'].save({
                                    "key": "email",
                                    "value": inputs.email
                                }).setEnvironment({
                                    req: req
                                }).exec({
                                    "error": function(saveToSession) {
                                        return exits.error({
                                            data: saveToSession,
                                            status: 500
                                        });

                                    },
                                    "success": function(saveToSession) {
                                        return exits.respond({
                                            data: "/newsfeed",
                                            action: "redirect",
                                            status: 200
                                        });

                                    }
                                });

                            },
                            "error": function(createUsers) {
                                return exits.error({
                                    data: createUsers,
                                    status: 500
                                });

                            }
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