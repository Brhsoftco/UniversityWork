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
                    <?php include_once "lib/nav.php"; ?>
                </header>
                <main>
                    <div id="page">
                        <div class="content">
                            <h3>Old World Sparrow</h3>
                            <div class="row">
                                <div class="column">
                                    <img src="images/birds/bird_03.jpg" />
                                </div>
                                <div class="column">
                                    <p>Old World sparrows are a family of small passerine birds. They are also known as true sparrows, names also used for a particular genus of the family, Passer. They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. Many species nest on buildings and the house and Eurasian tree sparrows, in particular, inhabit cities in large numbers, so sparrows are among the most familiar of all wild birds. They are primarily seed-eaters, though they also consume small insects. Some species scavenge for food around cities and, similarly to gulls or rock doves, will happily eat small quantities of virtually anything.</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>Top speed of 46km/h</li>
                                        <li>They can live up to 3 years</li>
                                        <li>Wingspan of 21cm</li>
                                    </ul>
                                </div>
                            </div>
                            <p><a href="birds.php">Back to menu</a></p>
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