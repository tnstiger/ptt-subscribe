var request = require('request');
var cheerio = require('cheerio');

function fetch(callback){
  var url = "https://www.ptt.cc/bbs/CodeJob/index.html";
  request(url, function (error, response, body) {
    $ = cheerio.load(body);
    var title = $('.r-list-sep').prev().find('.title a').text();
    var link = 'https://www.ptt.cc' + $('.r-list-sep').prev().find('.title a').attr('href');
    callback(title, link);
  })
}

module.exports = fetch;
