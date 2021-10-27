<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta description="Information about the mysterious pufferfish">
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
                            <h3>Pufferfish</h3>
                            <div class="row">
                                <div class="column">
                                    <img src="images/fish/fish_01.jpg" />
                                </div>
                                <div class="column">
                                    <p>Tetraodontidae is a family of primarily marine and estuarine fish of the order Tetraodontiformes. The family includes many familiar species variously called pufferfish, puffers, balloonfish, blowfish, blowies, bubblefish, globefish, swellfish, toadfish, toadies, honey toads, sugar toads, and sea squab. They are morphologically similar to the closely related porcupinefish, which have large external spines (unlike the thinner, hidden spines of the Tetraodontidae, which are only visible when the fish have puffed up). The scientific name refers to the four large teeth, fused into an upper and lower plate, which are used for crushing the hard shells of crustaceans and mollusks, their natural prey.</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>They can puff up to two or three times their normal size</li>
                                        <li>When they are threatened, they can ingest huge amount of water, and air sometimes, which increases their body size and turn them into large ball-like creatures</li>
                                        <li>They can live for approximately 10 years</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <iframe width="320" height="240" src="https://www.youtube.com/embed/OkXhC7yzISI">
                                </iframe>
                            </div>
                            <p><a href="fish.php">Back to menu</a></p>
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