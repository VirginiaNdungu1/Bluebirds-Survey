$(document).ready(function(){
  $(form#fillSurvey).submit(function(){
    var fullName = $("input#fullName").val();
    var gender =$("input:radio[name=gender]:checked").val();
    var dob =$("#bornDay").val();
    var age = parseInt($("#age").val());
    var favFood = $("input#favFood").val();
    var music = parseInt($("#musicGenre").val());
    var favColor = $("#favColor").val();
  });
});
