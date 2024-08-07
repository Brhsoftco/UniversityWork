<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta description="Information about the brightly-coloured clownfish">
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
                            <h3>Clownfish</h3>
                            <div class="row">
                                <div class="column">
                                    <img src="images/fish/fish_02.jpg" />
                                </div>
                                <div class="column">
                                    <p>Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 17 cm (6.7 in), while the smallest barely achieve 7–8 cm (2.8–3.1 in).</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>There are around 30 known species of Clownfish</li>
                                        <li>Schools of clownfish have a strict hierarchy, with the most aggressive female at the top</li>
                                        <li>Not all anemones are Clownfish friendly</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <video width="320" height="240" poster="images/fish/clownfish_poster.png" controls>
                                    <source src="media/clownfish.mp4" type="video/mp4">
                                    Your browser does not support the HTML5 video tag
                                </video>
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