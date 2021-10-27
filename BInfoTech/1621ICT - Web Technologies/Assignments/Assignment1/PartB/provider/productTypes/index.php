<?php

    //content header
    header("Content-Type: application/json");

    //product provider
    include "../db/connect.php";

    //product types array
    $productTypes = [];

    //type ID
    if (isset($_GET["type"])) {

        //type validation
        if (is_numeric($_GET["type"]))
            
            //use type filtering
            $productTypes = getProductTypeFromId($_GET["type"]);
        else

            //use normal
            $productTypes = getProductTypes();
    }
    else

        //use normal
        $productTypes = getProductTypes();

    //JSON encode result
    echo json_encode($productTypes);
?>