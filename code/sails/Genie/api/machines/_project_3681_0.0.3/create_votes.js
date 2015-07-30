module.exports = {
  "inputs": {
    "PostId": {
      "example": 1,
      "friendlyName": "PostId",
      "required": true
    },
    "UserId": {
      "example": 1,
      "friendlyName": "UserId",
      "required": true
    },
    "isUpvote": {
      "example": true,
      "friendlyName": "isUpvote",
      "required": true
    },
    "isDownvote": {
      "example": false,
      "friendlyName": "isDownvote",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "PostId": 1,
        "UserId": 1,
        "isUpvote": true,
        "isDownvote": false,
        "id": 123,
        "createdAt": "2015-06-21T03:16:13.464Z",
        "updatedAt": "2015-06-21T03:16:13.464Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.votes.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_votes"
};