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
                            <h3>Fish</h3>
                            <div class="animalmenu">
                                <div class="animalmenu-sub">
                                    <a href="pufferfish.php"><img src="images/fish/fish_01.jpg" /></a>
                                    <p><a href="pufferfish.php">Pufferfish</a></p>
                                </div>
                                <div class="animalmenu-sub">
                                    <a href="clownfish.php"><img src="images/fish/fish_02.jpg" /></a>
                                    <p><a href="clownfish.php">Clownfish</a></p>
                                </div>
                                <div class="animalmenu-sub">
                                    <a href="salmon.php"><img src="images/fish/fish_03.png" /></a>
                                    <p><a href="salmon.php">Salmon</a></p>
                                </div>
                            </div>
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