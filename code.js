$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("input").change(calc);
        // any other functions
        function calc()
        {
            var learnPrice = 39.99;
            var donationPrice = 14.99;


            // define total based on learnPrice * Quantity
            var learnQuantity = $("#Quantity1").val();
            learnQuantity = parseInt(learnQuantity);

            // define total based on donationPrice * Quantity
            var donationQuantity = $("#Quantity2").val();
            donationQuantity = parseInt(donationQuantity);


            // Output LearningTotal
            var learnTotal = learnPrice * learnQuantity;
            $("#learnTotal").text(learnTotal.toFixed(2));

            // Output DonationTotal
            var donationTotal = donationPrice * donationQuantity;
            $("#donationTotal").text(donationTotal.toFixed(2));


            // Add totals together to get GrandTotal and output
            var grandTotal = learnTotal + donationTotal;
            $("#grandTotal").text(grandTotal.toFixed(2));
        }
    }
);