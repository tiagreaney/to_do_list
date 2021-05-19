const express = require('express');
const app = express();
const data = require('./data');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/api/tasklists', (req, res) => {
  res.status(200);
  res.json(data.getTaskLists());
})

app.get('/api/tasklists/:taskListId', (req, res) => {
  const taskList = data.getTaskListById(req.params.taskListId);
  if (!taskList) {
    res.status(404);
    res.send('Not found');
  } else {
    res.status(200);
    res.json(taskList);
  }
})

app.post('/api/tasklists/:taskListId/tasks', (req, res) => {
  data.addTask(req.params.taskListId, req.body);
  res.status(201);
  res.send('Successfully created');
})

app.put('/api/tasklists/:taskListId/tasks/:taskId', (req, res) => {
  const task = data.updateTask(req.params.taskListId, req.body);
  if (!task) {
    res.status(404);
    res.send('Cannot update the task');
  } else {
    res.status(200);
    res.send('Successfully updated');
  }
})

app.delete('/api/tasklists/:taskListId/tasks/:taskId', (req, res) => {
  data.removeTask(req.params.taskListId, req.params.taskId);
  res.status(200);
  res.send('Successfully deleted');
})


app.listen(8000, () => {
  console.log('Your app is listening on port 8080');
});
