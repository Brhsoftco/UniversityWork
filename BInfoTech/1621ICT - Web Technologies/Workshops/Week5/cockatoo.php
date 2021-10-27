<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <title>Australian Animals</title>
    </head>
    <body>
        <div class="container">
            <div class="wrapper">
                <header class="page-header">
                    <h1><i>Australian Animals</i></h1>
                    <?php include_once "lib/nav.php"; ?>
                </header>
                <main>
                    <div id="page">
                        <div class="content">
                            <h3>Sulphur-Crested Cockatoo</h3>
                            <div class="row">
                                <!-- SOURCE: https://cdn.download.ams.birds.cornell.edu/api/v1/asset/117500151/1800 -->
                                <div class="column">
                                    <img src="images/birds/bird_02.jpg" />
                                </div>
                                <div class="column">
                                    <!-- SOURCE: https://en.wikipedia.org/wiki/Sulphur-crested_cockatoo -->
                                    <p>The sulphur-crested cockatoo is a relatively large white cockatoo found in wooded habitats in Australia, New Guinea, and some of the islands of Indonesia. They can be locally very numerous, leading to them sometimes being considered pests.</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>Can weigh as much as 950g</li>
                                        <li>They can live up to 80 years</li>
                                        <li>They can be as tall as 55cm</li>
                                    </ul>
                                </div>
                            </div>
                            <p><a href="birds.php">Back to menu</a></p>
                        </div>
                    </div>
                </main>
                <footer class="page-footer">
                    Copyright &copy; <?php echo date ('Y'); ?> BRH Media
                </footer>
            </div>
        </div>
    </body>
</html>