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
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="js/main.js"></script>
    </body>
</html>