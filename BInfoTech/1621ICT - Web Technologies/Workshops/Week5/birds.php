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
                            <h3>Birds</h3>
                            <div class="animalmenu">
                                <div class="animalmenu-sub">
                                    <a href="emu.php"><img src="images/birds/bird_01.png" /></a>
                                    <p><a href="emu.php">Emu</a></p>
                                </div>
                                <div class="animalmenu-sub">
                                    <a href="cockatoo.php"><img src="images/birds/bird_02.jpg" /></a>
                                    <p><a href="cockatoo.php">Sulphur-Crested Cockatoo</a></p>
                                </div>
                                <div class="animalmenu-sub">
                                    <a href="sparrow.php"><img src="images/birds/bird_03.jpg" /></a>
                                    <p><a href="sparrow.php">Old World Sparrow</a></p>
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