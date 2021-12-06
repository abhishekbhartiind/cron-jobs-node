### Cron JOBS
The node-cron module is the task scheduler.

```
npm init --yes
npm install node-cron@3.0.0
```

```
'1,2,4,5 * * * *' 
(empty line)
[comment]: # ('running every minute 1, 2, 4 and 5')

'1-5 * * * *'
(empty line)
[comment]: # ('running every minute to 1 from 5')
```