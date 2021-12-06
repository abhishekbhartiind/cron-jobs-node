// ...
const cron = require('node-cron');

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function () {
  console.log('running a task every minute');
});
console.log('| scheduled tasks |');
/**
 * * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional )
 */