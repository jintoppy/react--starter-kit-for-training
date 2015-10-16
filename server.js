var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employees = [{
    "id": 1,
    "name": "Ram",
    "country": "US",
    "designation": "CTO",
    "color": "blue",
    "joiningDate": "1288323623006"
},
{
    "id": 2,
    "name": "Prabhu",
    "country": "India",
    "designation": "Developer",
    "color": "red",
    "joiningDate": "1288323623006"
}];
router.route('/employees').get(function(req, res){
	res.json(employees);
})
.post(function(req, res){
	var employee = req.body;
	employee.id = employees.length +1;
	employees.push(employee);
});

router.route('/employees/:id').put(function(req, res){
	var empId = req.params.id;
	var filteredArr = employees.filter(function(employee){
		return employee.id === empId;
	});
	if(filteredArr.length>0){
		var currentEmp = filteredArr[0];
		for(prop in req.body){
			movie[prop] = req.body[prop];
		}
		return res.json({message: 'Employee updated'});
	}
	else{
		return res.send({message: 'Error in update'});
	}
})
.get(function(req, res){
	var empId = req.params.id;
	console.log(empId);
	var filteredArr = employees.filter(function(employee){
		console.log(employee.id);
		return employee.id == empId;
	});
	if(filteredArr.length>0){
		var currentEmp = filteredArr[0];
		return res.json(currentEmp);
	}
	else{
		return res.send({message: 'Error in getting'});
	}	
})
.delete(function(req, res){
	var empId = req.params.id;
	var filteredArr = employees.filter(function(employee){
		return employee.id == empId;
	});
	if(filteredArr.length>0){
		//var currentEmp = filteredArr[0];
		return res.json({ message: 'Successfully deleted' });
	}
	else{
		return res.send({message: 'Error in getting'});
	}
});

var app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('dist'));
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	console.log('server running on ' + server.address().port);
});
