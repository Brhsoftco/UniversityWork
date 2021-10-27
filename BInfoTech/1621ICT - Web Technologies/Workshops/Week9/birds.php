<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="js/main.js"></script>
        <title>Australian Animals</title>
    </head>
    <body>
        <div class="container">
            <div class="wrapper">
                <header class="page-header">
                    <h1><i>Australian Animals</i></h1>
                    <?php

                        //required PHP utility files
                        include_once "lib/nav.php";
                        require_once "lib/dbProvider.php";

                        //search string
                        $search = "";

                        //user searched?
                        if (isset($_GET["animalName"]))
                            
                            //apply new search string
                            $search = $_GET["animalName"];
                        

                        //query database
                        $birdArray = getAnimals($search);

                        //current page (for modularity reasons, we won't hard-code this value)
                        $pageName = basename($_SERVER['REQUEST_URI'], '?' . $_SERVER['QUERY_STRING']);
                    ?>
                </header>
                <main>
                    <div id="page">
                        <div class="content">
                            <h3>Birds</h3>
                            <!-- Search form links back to same page -->
                            <form id="searchAnimals" method="GET" action="<?= $pageName ?>">
                                <label for="animalName"></label>
                                <input name="animalName" id="animalName"></input>
                                <input type="submit" value="Search"></input>
                            </form>
                            <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Order</th>
                                    <th>Genus</th>
                                    <th>Species</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php
                                        //include animal definitions
                                        include "lib/defs.php";

                                        //go through each row
                                        foreach ($birdArray as $bird) {
                                            
                                            //start of row
                                            echo "<tr>";

                                            //go through each cell
                                            foreach ($bird as $cell)

                                                //echo cell construct
                                                echo "<td>" . $cell . "</td>";

                                            //end of row
                                            echo "</tr>";
                                        }
                            ?>
                            </tbody>
                            </table>
                            <p><a href="javascript:void(0)" onclick="redirectStart();" style="font-style:italic;">View Images</a></p>
                        </div>
                    </div>
                    <script>

                        //required page setup operations
                        pageSetup();
                    </script>
                </main>
                <footer class="page-footer">
                    Copyright &copy; <?php echo date ('Y'); ?> BRH Media
                </footer>
            </div>
        </div>
    </body>
</html>