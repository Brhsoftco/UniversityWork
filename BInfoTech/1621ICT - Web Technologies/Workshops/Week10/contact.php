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
                            <h3>Contact Us</h3>
                            <p>We'd love to hear from you! Please find below our contact information.</p>
                            <div itemscope itemtype="https://schema.org/Person">
                                <p itemprop="name"><b>Australian Animal Preservation Society</b></p>
                                <table class="invisible-table">
                                    <tbody>
                                        <tr>
                                            <td><b>Address</b></td>
                                            <td itemprop="address">
                                                15 Wharf Rd<br>
                                                Gladesville, NSW, 2111<br>
                                                Australia
                                            </td>
                                        </tr>
                                        <tr itemprop="telephone">
                                            <td><b>Phone</b></td>
                                            <td>(+61) 07 4429 1193</td>
                                        </tr>
                                        <tr itemprop="email">
                                            <td><b>Email</b></td>
                                            <td>pr@animalsociety.com.au</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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