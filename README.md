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

"30 20 * * * *"
('Passing "30 20 * * * *" will make node-cron run your job at
the thirtieth second of the twentieth minute of each hour')

"2,3,4 * * * *"
("It will execute your job at the first, second, and third minutes of each hour.")

"30 5 13 * * *"
('passing "30 5 13 * * *" will run your task at 1:05:30pm every day')

"* 2-4 3 * *"
("It will execute your job every minute from 2 am to 4 am on the third day
as day of the month field has a value of 3")

```

### World Population Cron
```
npm i puppeteer ora chalk 
```

`Puppeteer` is used to scrape data from a web page
`Ora` is a simple npm package that we will use for displaying messages and a spinner on the terminal as we scrape the data. This will provide a better user experience.
`Chalk` is another npm package that we'll use for displaying colorful messages on the terminal.