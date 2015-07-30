module.exports.routes = {
  "get /newstory": {
    "target": "NewstoryController.find"
  },
  "get /user/signup": {
    "target": "UserController.signup"
  },
  "get /maps-maps-poi": {
    "target": "Maps-maps-poiController.find"
  },
  "get /story/edit": {
    "target": "StoryController.edit"
  },
  "get /posts/edit": {
    "target": "PostsController.edit"
  },
  "post /user/login": {
    "target": "UserController.login"
  },
  "get /layouttest": {
    "target": "LayouttestController.find"
  },
  "get /test": {
    "target": "TestController.find"
  },
  "get /newsfeed": {
    "target": "NewsfeedController.find"
  },
  "get /mapssimple": {
    "target": "MapssimpleController.find"
  },
  "get /maps": {
    "target": "MapsController.find"
  },
  "post /story/create": {
    "target": "StoryController.create"
  },
  "get /rss": {
    "target": "RssController.find"
  },
  "get /fullstory": {
    "target": "FullstoryController.find"
  },
  "get /signup": {
    "target": "SignupController.find"
  },
  "get /shorten": {
    "target": "ShortenController.find"
  },
  "get /": {
    "target": "Home$Controller.find"
  },
  "post /shorten/shortenurl": {
    "target": "ShortenController.shortenurl"
  },
  "get /story/delete": {
    "target": "StoryController.delete"
  },
  "get /homepage": {
    "target": "HomepageController.find"
  }
};