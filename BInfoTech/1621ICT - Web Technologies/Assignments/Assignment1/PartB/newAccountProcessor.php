<!DOCTYPE html>
<html>
    <head>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta charset="utf-8">
	    <link rel="stylesheet" href="css/style.css" type="text/css">
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	    <title>Fluffy's Bakery</title>
    </head>
    <body>
        <?php
            include_once "lib/nav.php";
        ?>
	    <div class="hero-box-image">
		    <div class="hero-box-text">
			    <h1 style="font-size:50px">Fluffy's Bakery</h1>
			    <p>Prideful pastry and tasty sensations</p>
		    </div>
	    </div>
		<h2><i>Register for an account</i></h2>
        <div class="content-container">
			<?php

                //connection provider
                include_once "provider/db/connect.php";

                //required POST values
                $username = $_POST["username"];
                $password = $_POST["password"];
                $firstName = $_POST["firstName"];
                $lastName = $_POST["lastName"];
                $telephone = $_POST["telephone"];
                $email = $_POST["email"];

                //verification
                if (userExists($username, $email)) {
                    
                    //error
                    echo "<h3 style='margin: 0 auto;margin-top:50px;'>We couldn't create an account because you're already registered. <a href='login.php'>Please login</a>.</h3>";
                }
                else {
                    
                    //create user
                    addUser($username, $password, $firstName, $lastName, $telephone, $email);

                    //report success
                    echo "<h3 style='margin: 0 auto;margin-top:50px;'>Successfully created an account. <a href='login.php'>Please login</a>.</h3>";
                }
            ?>
        </div>
    </body>
</html>