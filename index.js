$(document).ready(function(){
$('#submitWeather').click(function(){
var city = $("#city").val();
if(city != ''){
$.ajax({
url: 'https://api.openweathermap.org/data/2.5/find?q=' + city + "&units=metric" +"&appid=01c2adb6a39a036b4631a0bf9d12fbdb",
type: "GET",
dataType: "jsonp",
success: function(data){
var knew = show(data);
$("#show").html(knew);
$("#city").val('');


}
});
}else{
$("#error").html('field cannot be empty');
}
});
});
function show(data){
  console.log(data.list);
return "<h3><strong>Weather</strong>: " + data.list[0].name + "</h3>" +
"<h3><strong>Temperature</strong>: " + data.list[0].main.temp + "</h3>" +
"<h3><strong>pressure</strong>: " + data.list[0].main.pressure + "</h3>" +
  "<h3><strong>Description</strong>: " + data.list[0].weather[0].description + "</h3>";
}