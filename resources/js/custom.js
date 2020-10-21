 /*
 Animations 
 */
 $('.js--wp-1').waypoint(function (direction) {
   $('.js--wp-1').addClass('animated bounceInDown')
 }, {
   offset: '50%'
 })

 $('.js--wp-2').waypoint(function (direction) {
   $('.js--wp-2').addClass('animated bounceInLeft')
 }, {
   offset: '70%'
 })

 $('.js--wp-3').waypoint(function (direction) {
   $('.js--wp-3').addClass('animated lightSpeedIn')
 }, {
   offset: '70%'
 })

 $('.js--wp-4').waypoint(function (direction) {
   $('.js--wp-4').addClass('animated bounceInLeft')
 }, {
   offset: '40%'
 })

 $('.js--wp-5').waypoint(function (direction) {
   $('.js--wp-5').addClass('animated bounceInRight')
 }, {
   offset: '40%'
 })

 $('.js--wp-6').waypoint(function (direction) {
   $('.js--wp-6').addClass('animated zoomIn')
 }, {
   offset: '70%'
 })

$('.js--wp-7').waypoint(function (direction) {
  $('.js--wp-7').addClass('animated bounceIn')
}, {
    offset: '50%'
})

 /*
 Collect profile data and create profile 
 */
function getData() {
  var name, last_name, street, zip, city, email_user, tel;
  
  // Fetch data
  name = document.getElementById("name").value;
  last_name = document.getElementById("last_name").value;
  street = document.getElementById("street").value;
  zip = document.getElementById("zip").value;
  city = document.getElementById("city").value;
  email_user = document.getElementById("email").value;
  tel = document.getElementById("telephone").value;

  document.getElementById("create-profile-new").style.display = "block";

  document.getElementById("name_show").innerHTML = name;
  document.getElementById("last_name_show").innerHTML = last_name;
  document.getElementById("street_show").innerHTML = street;
  document.getElementById("zip_show").innerHTML = zip;
  document.getElementById("city_show").innerHTML = city;
  document.getElementById("email_show").innerHTML = email_user;
  document.getElementById("telephone_show").innerHTML = tel;

}


function clearData() {

  // Remove data
  document.getElementById("name_show").innerHTML = "";
  document.getElementById("last_name_show").innerHTML = "";
  document.getElementById("street_show").innerHTML = "";
  document.getElementById("zip_show").innerHTML = "";
  document.getElementById("city_show").innerHTML = "";
  document.getElementById("email_show").innerHTML = "";
  document.getElementById("telephone_show").innerHTML = "";

  document.getElementById("name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("street").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telephone").value = "";

}


/*
 Smooth scroll 
 */ 
$("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    var sectionId = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(sectionId).offset().top -64
    }, 1250);
});