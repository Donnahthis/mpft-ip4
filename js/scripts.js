var Player = {};


function tonney(){
  return Math.floor(Math.random() * 6) + 1;
}


$(function() {


  $("form").submit(function(event) {
    event.preventDefault();
    var player_1 = $(".player1Name").val();
    var player_2 = $(".player2Name").val();
    $(".gaming").show();
    $("#footer").show();
    $("#player1Name").text(player_1);
    $("#player2Name").text(player_2);
  });


  $("button#new-game").click(function(event) {
    event.preventDefault();
    $(".gaming").hide();
    $(".player1Name").val("");
    $(".player2Name").val("");
  });

  $("button#player1-toss").click(function(event) {
    event.preventDefault();
    var score1 = tonney();
    $("#total-score-1").html(score1);

    $("#round-total-1").html("The total is " + score1);

    });

  $("button#player2-toss").click(function(event) {
    event.preventDefault();
    var score2 = tonney();
    $("#total-score-2").html(score2);

    $("#round-total-2").html("The total is " + score2);
  });

  $("#lev1").click(function(event) {
    $("body").css("background-color", "#f1f3f1")
  });

  $("#lev2").click(function(event) {
    $("body").css("background-color", "#f1f344")
  });

  $("#lev3").click(function(event) {
    $("body").css("background-color", "#f13344")
  });


});
