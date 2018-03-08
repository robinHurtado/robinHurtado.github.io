<<<<<<< HEAD
<?php
	//reCaptcha tutorial:https://www.youtube.com/watch?v=udykvSTqF4Q
	//php tutorial:http://www.w3schools.com/php
	//exist the text box and is not empty?
	if (isset($_POST["g-recaptcha-response"]) && $_POST["g-recaptcha-response"]) {
		//secret key from the google page:https://www.google.com/recaptcha/admin#site/320980824?setup
		$secret = "6LdYxyETAAAAAAejugkWSANNXY2mjj38nWMMymHx";
		//user ip
		$ip = $_SERVER["REMOTE_ADDR"];
		//get the data
		$captcha = $_POST["g-recaptcha-response"];
		//get request
		$result = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

		//pass the array response to json object
		$arrayJson = json_decode($result,TRUE);
		//if the response is success then send the msg
		if ($arrayJson["success"]) {

			$to = 'robin_aven94@hotmail.com'; //my email
			$subject = "Contact Message from: ".$name;
			//$headers = "From: $Uemail"."\r\n";
			
			mail($to,$subject,$msg); //php func to send an email
			if ($name == "" && $Uemail == "" && $msg == ""){
				//stay on the contact us form 
			}else{
				header('Location: welcome.html');
			}
		}else {
			$resp = "fail";
			//echo "No debe pasar";
		}
	}else {
		$resp = "empty";
		//it's empty
	}
=======
<?php
	//reCaptcha tutorial:https://www.youtube.com/watch?v=udykvSTqF4Q
	//php tutorial:http://www.w3schools.com/php
	//exist the text box and is not empty?
	if (isset($_POST["g-recaptcha-response"]) && $_POST["g-recaptcha-response"]) {
		//secret key from the google page:https://www.google.com/recaptcha/admin#site/320980824?setup
		$secret = "6LdYxyETAAAAAAejugkWSANNXY2mjj38nWMMymHx";
		//user ip
		$ip = $_SERVER["REMOTE_ADDR"];
		//get the data
		$captcha = $_POST["g-recaptcha-response"];
		//get request
		$result = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

		//pass the array response to json object
		$arrayJson = json_decode($result,TRUE);
		//if the response is success then send the msg
		if ($arrayJson["success"]) {

			$to = 'robin_aven94@hotmail.com'; //my email
			$subject = "Contact Message from: ".$name;
			//$headers = "From: $Uemail"."\r\n";
			
			mail($to,$subject,$msg); //php func to send an email
			if ($name == "" && $Uemail == "" && $msg == ""){
				//stay on the contact us form 
			}else{
				header('Location: welcome.html');
			}
		}else {
			$resp = "fail";
			//echo "No debe pasar";
		}
	}else {
		$resp = "empty";
		//it's empty
	}
>>>>>>> 25274203bf80e28b225917c367688e555754e325
?>