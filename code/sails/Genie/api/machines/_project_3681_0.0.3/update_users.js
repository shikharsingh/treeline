module.exports = {
  "inputs": {
    "Email": {
      "example": "ssingh@sensecorp.com",
      "friendlyName": "Email"
    },
    "Password": {
      "example": "Sensecorp1!",
      "friendlyName": "Password"
    },
    "Name": {
      "example": "Shikhar Singh",
      "friendlyName": "Name"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Users instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "Email": "ssingh@sensecorp.com",
        "Password": "Sensecorp1!",
        "Name": "Shikhar Singh",
        "id": 123,
        "createdAt": "2015-06-14T19:17:48.325Z",
        "updatedAt": "2015-06-14T19:17:48.325Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.users.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_users"
};