var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Read the bible',
	completed: true
}];

app.get('/', function(req, res){
	res.send('Todo API Root');
});

// Get /todos
app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	//res.send('Asking for todo with id of ' + req.params.id);
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	// Iterate over todos array. Find the match
	todos.forEach(function (todo){
		if (todoId === todo.id){
			matchedTodo = todo;
		}
	});
	//res.status(404).send;
	if (matchedTodo){
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});