var obj = {

	"a": "123",
	"b": function log(){

		return console.log("hi");
	},
	"c": {

		"name":"Nideesh"
	}

}

//console.log(obj.c.name);


var car1 = {

	"make":"Toyota",
	"model":"Camry"
}

var car2 = {

	"make":"Toyota",
	"model":"Corolla"
}

function createCar(make, model){
	//var obj = {};
	this.make = make;
	this.model = model;
	//return obj;
}

var car3 = new createCar("Toyota", "Solara");


console.log(car3.model);



