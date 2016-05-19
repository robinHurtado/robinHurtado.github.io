$(function () {

	$("#submit").click(function(){
		/*
		if you use getElementsBy then it going to returns a collection of elements, so use [whole_number] to
		 get the desired occurrence, for first element use [0] and for second one use 1 and so on,because they
		 are Elements
		*/
		unameID = document.getElementById("unameID").value;
		accessID = document.getElementById("accessID").value; 
		
		/* Store -create the local store coz is better than cookies, documentation here:
			http://www.w3schools.com/html/html5_webstorage.asp
			you can use sessionStorage also
		*/
		sessionStorage.username = unameID;
		sessionStorage.access  	= accessID;
		
		window.location = "welcome.html";

	});

});