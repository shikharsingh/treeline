module.exports = {
  "inputs": {},
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "void": true,
      "friendlyName": "then",
      "variableName": "result",
      "description": "Normal outcome."
    },
    "data": {
      "friendlyName": "data",
      "description": "",
      "example": "abc123"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    data = '{ Title": "My Featured Post", "Body": "importedPost", "Source": "RSS", "ImageURL":""}';
    console.log('hello world');

    return exits.data(data);
  },
  "identity": "TestMachine"
};