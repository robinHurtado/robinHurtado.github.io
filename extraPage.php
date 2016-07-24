<!DOCTYPE html>
<html>
<head>
	<title>Js Quiz</title>
	<!--favicon-->
	<link rel="icon" href="resurces/jsfavicon.ico" type="image/x-icon">
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<!--bootstrap libraries-->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>	
	<!--Jquery UI libraries-->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<!-- reCaptcha google api-->
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<!-- Css Libraries-->
	<link rel="stylesheet" type="text/css" href="pageStyle.css">
	
</head>
<body>
	<!--<div id="dialog" title="Contact me">
		<label>robin_aven94@hotmail.com</label>
		<label>Any bug or suggestion will be very welcome.</label>		
	</div>-->

	<!-- header body -->
	<div class="navbar navbar-inverse navbar-stactic-top">
      <div class="container">        	
	        <div class="navbar-header">
			  <a class="navbar-brand" href="welcome.html">Js Quiz</a>
			</div>

	        <div class="collapse navbar-collapse navHeaderCollapse">
	           <ul class="nav navbar-nav navbar-right">
	             <li class="active"><a href="#" onclick="alert('Comming Soon')">Blog</a></li>
	             <li><a href="#" onclick="alert('Comming Soon')">About Js Quiz</a></li>
	    		</ul>          
	        </div>
        </div>
    </div>
	
	<?php
		// define variables and set to empty values
		$nameErr = $emailErr =  $msgErr = $repErr = "";
		$name = $Uemail = $msg = $resp = "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
			if (empty($_POST["name"])){
				$nameErr = "Name is required";

			} else {
				$name = $_POST['name'];
				// check if name only contains letters and whitespace
			    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			      $nameErr = "Only letters and white space allowed"; 
			    }
			}
			
			if (empty($_POST["email"])) {
				$emailErr = "Email is required";

			} else {
				$Uemail = $_POST['email'];
				// check if e-mail address is well-formed
			    if (!filter_var($Uemail, FILTER_VALIDATE_EMAIL)) {
			      $emailErr = "Invalid email format"; 
			    }
			}
			//check if email fiel is empty
			if (empty($_POST["message"])) {
			    $msgErr = "The message is required";

			} else {			
				$msg = test_data($_POST['message']);
				$msg = wordwrap($msg,70);
			}

			include 'reCaptcha/reProgram.php'; //validate reCaptcha if success send the email
			
			if ($resp == "fail"){
				$msgErr = "An error was found";				
			}elseif ($resp == "empty") {
				$repErr = "Please fill the repCaptcha";
			}
						
		}//end $server if

		//test the msg data from the user
		function test_data($data){
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data); //dont allow <> tags, to preven injection code
			return $data;
		}
	 ?>

	<div class="container">
	
		<center>
		<h4><span class="error">* required field.</span></h4>
		<form role="role" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
			<div class="form-group">
				<label for="name">Your name:</label>
				<span class="error">* <?php echo $nameErr;?></span>
				<input type="text" class="form-control" name="name" placeholder="Enter your name" style="width:320px"/>	
			</div>
			<div class="form-group">
				<label>Email address:</label> 
				<span class="error">* <?php ;echo $emailErr;?></span><br>
				<input type="text" class="form-control" name="email"  placeholder="Enter email" style="width:320px">
			</div>
			<div class="form-group">	
				<label>The message:</label>
				<span class="error">* <?php echo $msgErr;?></span>
				<textarea name="message" class="form-control" rows="7" cols="50" placeholder="Enter Message" style="width:450px"></textarea>
			</div>	
			<!--reCaptcha container-->
			<span class="error"><?php echo $repErr;?></span>
			<div class="g-recaptcha" data-sitekey="6LdYxyETAAAAAP39LsisiLF2Uat2VUF63rtvMhr5"></div>
			<input type="submit" class="btn btn-default" name="send" value="Send">
		</form>
		</center>
	</div>

	<!--footer-->
	<div class="navbar navbar-default navbar-fixed-bottom">
     <div class="container">
       <p class="navbar-text pull-left">Make It By: DRobin</p>
       <!--<a href="http://youtube.com" class="navbar-btn btn-danger btn pull-right">Suscribe on Youtube</a>
       <button type="button" class="navbar-btn btn-info btn pull-left-center">Info</button>
       <button type="button" class="navbar-btn btn-primary btn pull-left-center">Facebook</button>-->
      </div>
  	</div>
</body>
</html>