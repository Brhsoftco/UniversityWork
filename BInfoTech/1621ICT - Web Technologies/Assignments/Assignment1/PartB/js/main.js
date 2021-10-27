function populateProducts() {

    //endpoint
    var e = "provider/products";

    //get type parameter
    var type = findGetParameter("type");

    //type application
    if (type !== null && type != "")

        //append GET parameter as filter
        e = e + "?type=" + type;

    //make a request for the data
    $.ajax({
        type: "GET",
        url: e,
        success: function(r) {

            //locate table body
            var productContainer = $("#product-container");

            //loop through all products
            for (var i=0; i < r.length; i++) {

                //current product
                var product = r[i];
                
                //image cell
                var imageContent = '<img src="' + product.productImage + '">';
                
                //name cell
                var nameContent = '<h3>' + product.productName + '</h3>';

                //description cell
                var descContent = '<p>' + product.productDesc + '</p>';

                //price cell
                var priceContent = '<h4>AU$' + product.productCost.toFixed(2) + '</h4>';
                
                //final pane
                var productPane = '<div class="product-pane">' + imageContent + nameContent + descContent + priceContent + '</div>';

                //apply new rows
                productContainer.append(productPane);
            }
        }
    });
}

function populateProductMenu() {

    //endpoint
    var e = "provider/productTypes";

    //make a request for the data
    $.ajax({
        type: "GET",
        url: e,
        success: function(r) {

            //locate dropdown menu
            var dropdown = $("#menu-list-content");

            //loop through all product types
            for (var i=0; i < r.length; i++) {

                //current product type
                var productType = r[i];

                //new row
                dropdown.append('<a href="products.php?type=' + productType.productTypeId + '">' + productType.productType + '</a>');
            }
        }
    });
}

function applyProductPageHeading() {

    //grab product type
    var productTypeId = findGetParameter("type");

    //heading object
    var heading = $("#productPageHeading");

    //validate
    if (productTypeId !== null && productTypeId != "") {

        //endpoint
        var e = "provider/productTypes?type=" + productTypeId;

        //make a request for the data
        $.ajax({
            type: "GET",
            url: e,
            success: function(r) {

                //change heading text appropriately
                $("#productPageHeading").text("View All of Our " + r[0].productType);
            }
        });
    }
    else {

        //apply default
        heading.text("View All of Our Products");
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}