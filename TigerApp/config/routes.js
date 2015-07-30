module.exports.routes = {
  "get /allpokemon": {
    "target": "AllpokemonController.find"
  },
  "get /confirmorder": {
    "target": "ConfirmorderController.find"
  },
  "post /users/order": {
    "target": "UsersController.order"
  },
  "post /users/login": {
    "target": "UsersController.login"
  },
  "get /dashboard": {
    "target": "DashboardController.find"
  },
  "post /users/signup": {
    "target": "UsersController.signup"
  },
  "get /signup": {
    "target": "SignupController.find"
  },
  "get /": {
    "target": "Home$Controller.find"
  }
};