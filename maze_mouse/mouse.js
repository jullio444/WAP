/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    $(document).ready(function () {
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("started.....");

            $(".boundary").on("mouseenter", function () {
                $(".boundary").addClass("youlose");
                $("#status").text("You Lose :(");
            });

            $("#maze").on("mouseleave", function () {
                $(".boundary").addClass("youlose");
                $("#status").text("You Lose :(");
                $("#end").off("mouseover");
            });
            $("#end").on("mouseover", function () {
                $("#status").text("You Win :)");
                $(".boundary").off("mouseenter");
                $("#maze").off("mouseleave");
            });

        });

    });

})();