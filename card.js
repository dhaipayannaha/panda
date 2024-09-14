$(document).ready(function() {
    $("#Supply-plus").click(function() {
      updateProductNumber("Supply", 350, true);
    });
    $("#Supply-minus").click(function() {
      updateProductNumber("Supply", 350, false);
    });

    function updateProductNumber(product, price, isIncreasing) {
      var productInput = $("#" + product + "-number");
      var productNumber = parseInt(productInput.val());

      if (isIncreasing) {
        productNumber++;
      } else if (productNumber > 0) {
        productNumber--;
      }

      productInput.val(productNumber);
      var productTotal = $("#" + product + "-total");
      productTotal.text(productNumber * price);
    }
  });