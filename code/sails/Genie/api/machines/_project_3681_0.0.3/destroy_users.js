module.exports = {
  "inputs": {
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
    env.sails.models.users.destroy(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "destroy_users"
};