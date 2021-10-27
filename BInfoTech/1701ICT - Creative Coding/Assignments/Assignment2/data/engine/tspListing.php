<?php

    //html trigger
    $htmlMode = isset($_GET["html"]);

    //mode specified?
    if (!isset($_GET["m"])) {

        //print error message
        echo "Error/List mode not specified";
    }
    else {

        //valid modes
        if (strtolower($_GET["m"]) != "p" && strtolower($_GET["m"]) != "s") {

            //print error message
            echo "Error/Invalid mode specified";
        }
        else {

            //delimiter
            $delim = $htmlMode ? "<br />" : "\n";

            //TSP folder
            $tspDir = "../tsp/";

            //search folder
            $tspSearchDir = $tspDir . ($_GET["m"] == "p" ? "problems" : "solutions");

            //TSP filter
            $tspFileType = $_GET["m"] == "p" ? "tsp" : "sol";

            //tsp aggregation
            $tspListing = "";

            //find all files in this folder
            foreach(glob($tspSearchDir . '/*.' . $tspFileType) as $file) {

                //get actual file name
                $tspFile = basename($file);

                //ensure file name is a string
                if (is_string($tspFile)) {

                    //add to listing
                    if ($tspListing == "") {

                        //assign
                        $tspListing = $tspFile;
                    }
                    else {

                        //append
                        $tspListing .= $delim . $tspFile;
                    }
                }
            }

            //trim trailing newline character
            $tspListing = rtrim($tspListing, "\n");

            //print tsp list to browser
            echo $tspListing;
        }
    }
?>