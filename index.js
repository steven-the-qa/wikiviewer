$(document).ready(function(){
 $("#searchButton").click(function(){
   event.preventDefault();
var input = $("#input").val();
var url = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + input + "&format=json&callback=?";

   $.ajax({
     type: "GET",
     url: url,
     async: false,
     dataType: "json",
     success: function(data){
       $("ul").html("\n\n\n");
       for (i=0; i<data[1].length; i++){
$("ul").append("<li><a href=" + data[3][i] + "> \n" + data[1][i] + "==>" + data[2][i] + "</a></li>");
       };
     },
     error: function(errorMessage){
     alert("Ajax call failed!");
   }
   });
       
 });
 });
