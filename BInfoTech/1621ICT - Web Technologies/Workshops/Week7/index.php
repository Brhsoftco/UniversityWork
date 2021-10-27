<!DOCTYPE>
<html>
    <head>
        <title>Tax Calculator</title>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link href="css/style.css" rel="stylesheet" type="text/css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </head>
    <body>
        <?php

            //primary globals
            $income = 60000;
            $rate = 0.21;
            $cap = 10000;

            //calculation
            $tax = $income * $rate;
            
            //colouring for tax
            $class = $tax >= $cap ? "red" : "green";
        ?>
        <div class = "container">
            <nav class= "navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Tax Calculator</a>
                    </div>
                </div>
            </nav>
        </div>
        <div class = "container">
            <div class = "bg-light p-5 rounded-lg m-3">
                <h1>Taxable Income: $<?= $income ?></h1>
                <h1>Tax Payable: <span class="<?= $class ?>">$<?= $tax ?></span></h1>
            </div>
        </div>
    </body>
</html>