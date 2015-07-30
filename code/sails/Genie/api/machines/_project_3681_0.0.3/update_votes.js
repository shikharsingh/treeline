module.exports = {
  "inputs": {
    "PostId": {
      "example": 1,
      "friendlyName": "PostId"
    },
    "UserId": {
      "example": 1,
      "friendlyName": "UserId"
    },
    "isUpvote": {
      "example": true,
      "friendlyName": "isUpvote"
    },
    "isDownvote": {
      "example": false,
      "friendlyName": "isDownvote"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Votes instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "PostId": 1,
        "UserId": 1,
        "isUpvote": true,
        "isDownvote": false,
        "id": 123,
        "createdAt": "2015-06-21T03:16:13.464Z",
        "updatedAt": "2015-06-21T03:16:13.464Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.votes.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_votes"
};