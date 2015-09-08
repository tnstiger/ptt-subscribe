var Firebase = require('firebase');
var ref = new Firebase('https://handmade.firebaseio.com/');

// ref.set({
//   title: 'AAA',
//   link: 'http://YYY.xxx.xxx'
// });
//
// ref.once('value', function(snapshot){
//   var val = snapshot.val();
//   console.log(val);
// })

module.exports = {
  read: function(callback){
    ref.once('value', function(snapshot){
      var val = snapshot.val();
      callback(val.title, val.link);
    })
  },
  save: function(title, link){
    ref.set({
      title: title,
      link: link
    });
  }
};
