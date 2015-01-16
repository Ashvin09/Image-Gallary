$(document).ready(function(){
 $("#slide img").click(function(){	
 
 var x = $(this).attr("src");  // read src of clicked image
 $("#img1").attr("src",x);    // assign src of clicked img to id img1.

 });
});
 