$(document).ready(function(){
  console.log("jQuery is active");
  $("#btn1").click(function(event){
  event.preventDefault();

for (i = 7; i <= 50; i+=7) {
  console.log(i);
  $(".results").append(' ' + i);
};//for loop
console.log("LOOPER (The movie)");

  });//click event
});//jquery
