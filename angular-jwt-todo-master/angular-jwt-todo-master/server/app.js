const _ = require('lodash');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

var TODOS = [
    { 'id': 1, 'user_id': 1, 'name': "Pickup News Paper", 'completed': false },
    { 'id': 2, 'user_id': 1, 'name': "Wakeup Kids", 'completed': true },
    { 'id': 3, 'user_id': 2, 'name': "Get Bread & Milk", 'completed': false },
    { 'id': 4, 'user_id': 3, 'name': "Get Ready To Office", 'completed': false },
];
var USERS = [
    { 'id': 1, 'username': 'ratna' },
    { 'id': 2, 'username': 'uttam' },
    { 'id': 3, 'username': 'pinakin' },
];
function getTodos(userID) {
    var todos = _.filter(TODOS, ['user_id', userID]);

    return todos;
}
function getTodo(todoID) {
    var todo = _.find(TODOS, function (todo) { return todo.id == todoID; })

    return todo;
}
function getUsers() {
    return USERS;
}

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    });
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/api/auth']}));

app.get('/', function (req, res) {
    res.send('Angular JWT Todo API Server')
});
app.post('/api/auth', function(req, res) {
    const body = req.body;

    const user = USERS.find(user => user.username == body.username);
    if(!user || body.password != 'password') return res.sendStatus(401);
    
    var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
    res.send({token});
});
app.get('/api/todos', function (req, res) {
    res.type("json");
    res.send(getTodos(req.user.userID));
});
app.get('/api/todos/:id', function (req, res) {
    var todoID = req.params.id;
    res.type("json");
    res.send(getTodo(todoID));
});
app.get('/api/users', function (req, res) {
    res.type("json");
    res.send(getUsers());
});

app.listen(4000, function () {
    console.log('Angular JWT Todo API Server listening on port 4000!')
});
