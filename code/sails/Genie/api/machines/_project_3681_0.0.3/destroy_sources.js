module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Sources instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "id": 123,
        "createdAt": "2015-06-14T15:27:07.519Z",
        "updatedAt": "2015-06-14T15:27:07.519Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.sources.destroy(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "destroy_sources"
};