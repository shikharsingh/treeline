module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Comments instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "id": 123,
        "createdAt": "2015-06-19T06:29:08.689Z",
        "updatedAt": "2015-06-19T06:29:08.689Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.comments.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_comments"
};