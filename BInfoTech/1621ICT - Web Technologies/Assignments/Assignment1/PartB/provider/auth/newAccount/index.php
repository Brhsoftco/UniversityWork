<?php
    //JSON output
    header("Content-Type: application/json");

    //method verification
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        //required POST values
        $username = $_POST["username"];
        $password = $_POST["password"];
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $telephone = $_POST["telephone"];
        $email = $_POST["email"];

        //check if user already exists
        
    }
    else {
        echo '{"error": "Incorrect method"}';
    }
?>