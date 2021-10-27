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
                            <h3>Emu</h3>
                            <div class="row">
                                <div class="column">
                                    <img src="images/birds/bird_01.png" />
                                </div>
                                <div class="column">
                                    <p>The emu (Dromaius novaehollandiae) is the second-largest living bird by height, after its ratite relative, the ostrich. It is endemic to Australia where it is the largest native bird and the only extant member of the genus Dromaius. The emu's range covers most of mainland Australia, but the Tasmanian, Kangaroo Island and King Island subspecies became extinct after the European settlement of Australia in 1788. The bird is sufficiently common for it to be rated as a least-concern species by the International Union for Conservation of Nature.</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>Can reach up to 1.9m in height</li>
                                        <li>Second-tallest bird in the world behind the Ostrich</li>
                                        <li>An emu takes strides of up to 100cm</li>
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