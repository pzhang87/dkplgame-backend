# dkplgame backend

backend for bad gacha game

(should) integrate with d3bot

## planning

what is the basic absolute minimum for this to work?
* d3bot sends an http request to a route somewhere on this backend, passing in the user's discordID and the action
* the server performs the requested action here and sends a message back
* what, then, are the authorized actions?
  * user collects daily resources ('/users/:userID/collect?method=daily')
  * user spends resources -> get cards ('/users/:userID/')
  * user view their personal cards ('/users/:userID/cards')

cards->belong to many->banners, and each have associated odds
banners<-have many<-cards via BannerCards
