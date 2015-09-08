var CronJob = require('cron').CronJob;

module.exports = function(job){
  new CronJob('*/30 * * * * *', function() {
    job();
  }, null, true);
}
