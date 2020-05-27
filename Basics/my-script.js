console.log("Test msg");
		
		var testString = "test";
		
		let testLetString = "testLet";
		
		const testConstant = "testConstant";
	
	
		console.log(testString);
		console.log(testLetString);
		console.log(testConstant);		
		
		
		testString = "test1";
		
		testLetString = "testLetString";
		
		console.log(testString);
		console.log(testLetString);
		
		//testConstant = "testConstant1";
		
		//console.log(testConstant);
		
		
		
		testString = 'testSingleQ';
		
		testString = `tests
		sfsd`;	
	
		
		console.log(testString);
		
		
		let testNum = 1;
		
		let myBoolean = (1 == 1);
		
		
		let myArray = [1,2,3,4,5];  // number array
		
		console.log(myArray);
		
		
		myArray = ["1", "2"];
		
		
		console.log(myArray);
		
		myArray = [ 1, "2", true ];
		
		console.log(myArray);
		
		
		var personName = 'test';
		
		let person = {
			'name' : 'test',
			
			'age' : 18
		};
		
		var myDate = new Date();
		
	console.log(person);
	
	console.log(person['name']);
	
	console.log(person.name);
	
	
	person['name'] = "myName";
	console.log(person['name']);
	
	person.name = 'changed';
	console.log(person.name);
	
	myArray = [1,2,3,4,5,6,7,8];
	
	
	
	
	myArray = myArray.filter(function(item){
	
		return item % 2 == 1;
	});
	
	console.log(myArray);
	
	myArray = myArray.map(function(item) {
		return '0'+item;
	});
	
	console.log(myArray);
	
	myArray.forEach(function(item) {
		console.log(item);
	});
	
	
	
	myBoolean = false;
	
	let num1 = 10;
	
	console.log(typeof(num1));
	
	let num2 = '10';
	
	console.log(typeof(num2));
	
	
	if(num1 === num2) {
		console.log("My condition is num1 == num2");
	
	}
	else if( num1 > num2) {
		console.log("My condition is num1 > num2");
	}
	else if( num1 < num2) {
		console.log("My condition is num1 < num2");
	}
	else {
		console.log("My condition is false");
	}
	
	
	var num3 = 17;
	
	var num4 = 16;
	
	
	if(num3 <= num4  ){ //num3 < num4 || num3 == num4  , num3 < num4 && num3 == num4 
	 
		console.log("My condition is num3 <= num4");
	
	}
	else {
		console.log("My condition is num3 <= num4 is false");
	}
	
	function greetUser() {
		console.log("Hello");
	}
	
	var greet = function(){
		
		console.log("world");
	}
	
	
	greetUser();
	
	greet();
	
	var add = function(num1, num2) {
		return num1 + num2;
	}
	
	var mul = (num1,num2) => num1 * num2;
	
	
	var res = add(10,12);
	
	res = add(12,27);
	
	console.log(res);
	
	res = mul(10,10);	
	
	//console.log(res);
	
	for(let i = 0; i< myArray.length; i++){ console.log(myArray[i]); }
	
	for (item of myArray) {
		//console.log('for ' + item);
	}
	
	
	//let myData = 0;
	
	//do {
	
		//myData = myData + 1;
	//	console.log(myData);
	
//	}
	//while(myData < 10);
	
	
	let myData1 = 0;
	//while(myData1 < 10) { myData1 = myData1 + 1; console.log(myData1); }
	
	
	var myDiv = document.getElementById('myDiv');
	
	console.log(myDiv);
	console.dir(myDiv);
	
	var newDiv = document.createElement('div');
	
	newDiv.innerHTML = '<p> I have created dyamically </p>';
	
	myDiv.appendChild(newDiv);
	
	
	myDiv = document.getElementById('myDiv');
	console.dir(myDiv);
	
	
	
	var userNameInput = document.getElementById('userName');	
	var passwordInput = document.getElementById('password');	
	let loginBtn = document.getElementById('myBtn');	
	let resetBtn = document.getElementById('myResetBtn');
	
	
	userNameInput.value = 'test';
	
	passwordInput.value = '123';
	
	var validUserName = 'Test';
	
	var validPassword = 'test@123';
	
	
	
	function login() {
	
		const userName = userNameInput.value;		
		let password = passwordInput.value;
		
		let result = {
			userName: userName,
			password: password		
		};
		
		password = +password;
		
		console.log(typeof(password));
		
		if(userName == validUserName && password == validPassword) {
			alert("logged in successfully");
		}
		else{
			//alert('invalid credentials');
		}
		
		
		var xHttp = new XMLHttpRequest(); // AJAX request ( Asynchronous Javascript and XML)
		
		xHttp.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
		
		xHttp.send();
		
		xHttp.onreadystatechange = function() {
			if(this.status == 200) {			
				console.log(JSON.parse(this.responseText));
			}
		}
		// vanillaJS
		
	}
	
	resetBtn.addEventListener('mouseover' , function(event) {
	
			userNameInput.value = '';
	
			passwordInput.value = '';
	});