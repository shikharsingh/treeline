module.exports = {
  "inputs": {
    "Email": {
      "example": "ssingh91@utexas.edu",
      "friendlyName": "Email"
    },
    "Password": {
      "example": "Password1!",
      "friendlyName": "Password"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving User instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "Email": "ssingh91@utexas.edu",
        "Password": "Password1!",
        "id": 123,
        "createdAt": "2015-06-12T07:30:39.008Z",
        "updatedAt": "2015-06-12T07:30:39.008Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.user.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_user"
};