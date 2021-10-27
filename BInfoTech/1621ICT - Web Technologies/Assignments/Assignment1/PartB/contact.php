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
		<h2><i>Contact Fluffy's Bakery</i></h2>
        <div class="content-container">
			<form action="contactThanks.php" method="POST">
				<label for="firstName">First Name</label>
				<input id="firstName" name="firstName" type="text" required>

				<label for="lastName">Last Name</label>
				<input id="lastName" name="lastName" type="text" required>

				<label for="email">Email</label>
				<input id="email" name="email" type="text" required>

				<label for="message">Message</label>
				<textarea id="message" name="message" required></textarea>

				<input type="submit" value="Submit">
			</form>
        </div>
    </body>
</html>