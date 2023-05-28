$(document).ready(function () {
    $("#hide").click(function () {
        $(".msnormal:even").hide();
    });

    $("#show").click(function () {
        $(".msnormal:even").show();
    })
});