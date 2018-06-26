function outerFunction( passedIn){

	console.log('outer');	


	var thing1 = passedIn;


	function innerFunction(thing ){
	
		console.log('inner 	' + thing	);

	}


	return innerFunction(thing1);

}


outerFunction('hey im coming from outside, im user input');