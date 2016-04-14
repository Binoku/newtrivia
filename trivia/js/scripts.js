// Scripts

+$(document).ready(function() {
 
   var playerName = '';
   var playerAnswer1 = '';
   var answer1 = 'Teamwork'
 
   // Hide Player Name
   $('#show-player-name').hide();
 
   // Allow user to type name immediately on page load
   $('#player-name').focus();
 
     // When user submits name, welcome screen disappears
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
  };

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeIn');
    setTimeout(removeWelcomeScreen, 1000);
   });
 
 }) // ready function ends 

   // Store answer 1
   $('#question1-btn').on('click'), function(e) {
    e.preventDefault(); //prevents form from submitting to a data base
    playerAnswer1 = $('#input-question1').val().tria();
    console.log(playerAnswer1);
   });

//Show answers
function showPlayerAnswer1() {
  $('show-player-answer1').text(playerAnswer1);
  $('correct-answer1').text(answer1)
};

}); // ready function ends