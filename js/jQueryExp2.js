$(document).ready(function () {
   $("#hide").click(function (){
       $("tr:odd").hide();
   });
   $("#show").click(function () {
      $("tr:odd").show();
   });
});