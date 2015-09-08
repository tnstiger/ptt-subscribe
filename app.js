var fetch = require('./demo/fetch');
var stroage = require('./demo/stroage');
var send = require('./demo/mailer');
var schedule = require('./demo/schedule');

schedule(function(){
  fetch(function(currentTitle, currentLink) {
    stroage.read(function(lastTitle, lastLink) {
      if (lastTitle != currentTitle) {
        console.log('new post');
        stroage.save(currentTitle, currentLink);
        send(currentTitle, currentLink);
      } else {
        console.log('no post');
      }
    });
  });
});
