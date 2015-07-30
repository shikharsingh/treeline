module.exports = {
  "inputs": {
    "Email": {
      "example": "ssingh@sensecorp.com",
      "friendlyName": "Email",
      "required": true
    },
    "Password": {
      "example": "Sensecorp1!",
      "friendlyName": "Password",
      "required": true
    },
    "Name": {
      "example": "Shikhar Singh",
      "friendlyName": "Name",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "Email": "ssingh@sensecorp.com",
        "Password": "Sensecorp1!",
        "Name": "Shikhar Singh",
        "id": 123,
        "createdAt": "2015-06-14T19:17:48.325Z",
        "updatedAt": "2015-06-14T19:17:48.325Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.users.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_users"
};