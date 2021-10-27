<?php

    //content header
    header("Content-Type: application/json");

    //product provider
    include "../db/connect.php";

    //products array
    $products = [];

    //type ID
    if (isset($_GET["type"])) {

        //type validation
        if (is_numeric($_GET["type"]))
            
            //use type filtering
            $products = getProductsByType($_GET["type"]);
        else

            //use normal
            $products = getProducts();
    }
    else

        //use normal
        $products = getProducts();

    //JSON encode result
    echo json_encode($products);
?>