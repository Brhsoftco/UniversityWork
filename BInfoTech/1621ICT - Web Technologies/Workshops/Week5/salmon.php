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
                            <h3>Salmon</h3>
                            <div class="row">
                                <div class="column">
                                    <img src="images/fish/fish_03.png" />
                                </div>
                                <div class="column">
                                    <p>Typically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water throughout their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.</p>
                                    <h3>Facts</h3>
                                    <ul>
                                        <li>A female spring Chinook salmon can carry more than 4,000 eggs</li>
                                        <li>The oldest salmon fossil found is 50 million years old</li>
                                        <li>Salmon do not eat any food during the time they swim upstream to spawn</li>
                                    </ul>
                                </div>
                            </div>
                            <p><a href="fish.php">Back to menu</a></p>
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