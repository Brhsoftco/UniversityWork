<?php

    //html trigger
    $htmlMode = isset($_GET["html"]);

    //delimiter
    $delim = $htmlMode ? "<br />" : "\n";

    //sprites folder
    $spritesDir = "../resources/sprites";

    //sprites filter
    $spritesFileType = "tex";

    //sprite aggregation
    $spriteListing = "";

    //find all files in this folder
    foreach(glob($spritesDir . '/*.' . $spritesFileType) as $file) {

        //get actual file name
        $spriteFile = basename($file);

        //ensure file name is a string
        if (is_string($spriteFile)) {

            //add to listing
            if ($spriteListing == "") {

                //assign
                $spriteListing = $spriteFile;
            }
            else {

                //append
                $spriteListing .= $delim . $spriteFile;
            }
        }
    }

    //trim trailing newline character
    $spriteListing = rtrim($spriteListing, "\n");

    //print sprite list to browser
    echo $spriteListing;
?>