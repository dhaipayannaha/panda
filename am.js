$(document).ready(function() {
    $("#show-plus").click(function() {
      updateProductNumber("show", 400, true);
    });

    function updateProductNumber(product, price, isIncreasing) {
      var productInput = $("#" + product + "-number");
      var productNumber = parseInt(productInput.val());

      if (isIncreasing) {
        productNumber++;
      } else if (productNumber > 0) {
        productNumber--;
      }

      // Update case total
      productInput.val(productNumber);
      var productTotal = $("#" + product + "-total");
      productTotal.text(productNumber * price);

      // Calculate total
      calculateTotal();
    }

    function getInputValue(product) {
      var productInput = $("#" + product + "-number");
      var productNumber = parseInt(productInput.val());
      return productNumber;
    }

    function calculateTotal() {
      var showTotal = getInputValue('show') * 400;
      var tax = showTotal / 10;
      var totalPrice = showTotal + tax;
      $("#sub-total").text(showTotal);
      $("#tax-amount").text(tax);
      $("#total-price").text(totalPrice);
    }
  });

