### Cron JOBS
The node-cron module is the task scheduler.

```
npm init --yes
npm install node-cron@3.0.0
```

```
cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

```

```
'1,2,4,5 * * * *' 
('running every minute 1, 2, 4 and 5')

'1-5 * * * *'
('running every minute to 1 from 5')

'*/2 * * * *'
('running a task every two minutes')

'* * * January,September Sunday'
'* * * Jan,Sep Sun'
('running on Sundays of January and September')

```