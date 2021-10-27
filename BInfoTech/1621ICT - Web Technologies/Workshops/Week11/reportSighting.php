<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
                            <h3>Report an animal sighting</h3>
                            <p>Have you recently seen an animal? Please report it below so we can keep our community updated.</p>
                            <div class="errorMessage" id="errorMessage">
                                Invalid form values
                            </div>
                            <form id="reportSightingForm">
                                <div class="form-group">
                                    <label for="firstName" class="head-label">First Name</label>
                                    <input type="text" name="firstName" id="firstName" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="lastName" class="head-label">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="mobile" class="head-label">Mobile Phone #</label>
                                    <input type="tel" name="mobile" id="mobile" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="animalClass" class="head-label">Animal Class</label>
                                    <select name="animalClass" id="animalClass" class="form-control">
                                        <option value="amphibian">Amphibian</option>
                                        <option value="arthropod">Arthropod</option>
                                        <option value="bird">Bird</option>
                                        <option value="fish">Fish</option>
                                        <option value="mammal">Mammal</option>
                                        <option value="reptile">Reptile</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="dateSighted" class="head-label">Date Sighted</label>
                                    <input type="date" name="dateSighted" id="dateSighted" class="form-control">
                                </div>

                                <label for="timeSightedField" class="head-label">Time Sighted</label>
                                <div id="timeSightedField" name="timeSightedField">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" name="timeSighted" id="timeSightedDay" value="Day" class="form-check-input">
                                        <label for="timeSighted" class="form-check-label">Day</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" name="timeSighted" id="timeSightedNight" value="Night" class="form-check-input">
                                        <label for="timeSighted" class="form-check-label">Night</label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="animalDescription" class="head-label">Animal Description</label>
                                    <textarea id="animalDescription" name="animalDescription" class="form-control">
                                        Yellow, long beak, etc.
                                    </textarea>
                                </div>
                                    
                                <label for="stateField" class="head-label">State Sighted</label>
                                <div class="form-group" id="stateField">
                                    <label for="qld">NSW</label>
                                    <input type="checkbox" id="qld" name="state" value="Queensland" class="form-check form-check-inline">

                                    <label for="vic">Victoria</label>
                                    <input type="checkbox" id="vic" name="state" value="Victoria" class="form-check form-check-inline">

                                    <label for="wa">Western Australia</label>
                                    <input type="checkbox" id="wa" name="state" value="Western Australia" class="form-check form-check-inline">

                                    <label for="sa">South Australia</label>
                                    <input type="checkbox" id="sa" name="state" value="South Australia" class="form-check form-check-inline">

                                    <label for="nt">Northern Territory</label>
                                    <input type="checkbox" id="nt" name="state" value="Northern Territory" class="form-check form-check-inline">

                                    <label for="tas">Tasmania</label>
                                    <input type="checkbox" id="tas" name="state" value="Tasmania" class="form-check form-check-inline">

                                    <label for="nsw">New South Wales</label>
                                    <input type="checkbox" id="nsw" name="state" value="New South Wales" class="form-check form-check-inline">
                                </div>
                                
                                <div class="form-group">
                                    <label for="town" class="head-label">Town Sighted</label>
                                    <input type="text" name="town" id="town" class="form-control">
                                </div>

                                <div class="form-group">
                                    <input type="submit" name="submitBtn" id="submitBtn" value="Submit" class="btn btn-primary" style="width:100%;" onClick="validateForm(event)">
                                </div>
                            </form>
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