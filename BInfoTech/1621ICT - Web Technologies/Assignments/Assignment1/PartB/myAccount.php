<?php

    //connection provider
    include_once "provider/db/connect.php";

    $userProfile = [];

    //validation
    if (isset($_POST["username"]) && isset($_POST["password"])) {

        //attempt login
        $userProfile = userLogin($_POST["username"], $_POST["password"]);

        //verification
        if (count($userProfile) == 0) {
            
            //send straight back
            header("Location: login.php?s=1");

            //kill script
            die();
        }
    }
    else {

        //send straight back
        header("Location: login.php");

        //kill script
        die();
    }
?>
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
        <header>
            <nav class="menu-list" id="menu-list">
                <a href="index.php">Home</a>
                <div class="menu-list-dropdown">
                    <div class="menu-list-dropbtn">Products</div>
                    <div class="menu-list-content" id="menu-list-content">
                        <a href="products.php">Products</a>
                    </div>
                </div>
                <a href="contact.php">Contact Us</a>
                <div class="menu-list-right">
                    <a href="login.php" id="myAccountButton">Logout</a>
                </div>
            </nav>
            <script>
                populateProductMenu();
            </script>
        </header>
	    <div class="hero-box-image">
		    <div class="hero-box-text">
			    <h1 style="font-size:50px">Fluffy's Bakery</h1>
			    <p>Prideful pastry and tasty sensations</p>
		    </div>
	    </div>
		<h2><i>Hello <?= $userProfile[0]["first_name"] ?>!</i></h2>
            <br><br>
            <h3>My Details</h3>
			<table>
                <tbody>
                    <tr>
                        <td><b>First Name</b></td>
                        <td><?= $userProfile[0]["first_name"] ?></td>
                    </tr>
                    <tr>
                        <td><b>Last Name</b></td>
                        <td><?= $userProfile[0]["last_name"] ?></td>
                    </tr>
                    <tr>
                        <td><b>Username</b></td>
                        <td><?= $userProfile[0]["username"] ?></td>
                    </tr>
                    <tr>
                        <td><b>Email</b></td>
                        <td><?= $userProfile[0]["email"] ?></td>
                    </tr>
                    <tr>
                        <td><b>Telephone</b></td>
                        <td><?= $userProfile[0]["telephone"] ?></td>
                    </tr>
                </tbody>
            </table>
            <h3>My Orders</h3>
            <table>
                <tbody>

                    <?php

                        //lookup orders
                        $orders = userOrders($userProfile[0]["id"]);

                        //verify
                        if (count($orders) > 0) {

                            //printout orders
                            echo "<tr><td>Submitted:</td><td>" . $orders[""] . "</td></tr>";
                        }
                        else {

                            //no orders text
                            echo "<tr><td>You currently don't have any orders with us</td></tr>";
                        }
                    ?>
                </tbody>
            </table>
    </body>
</html>