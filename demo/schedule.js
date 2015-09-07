var CronJob = require('cron').CronJob;

module.exports = function(job){
  new CronJob('*/10 * * * * *', function() {
    job();
  }, null, true);
}
