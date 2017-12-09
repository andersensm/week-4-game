$(document).ready(function() {
  var pickfirstchar = true;
  var picksecondchar = false;

  console.log('first char', pickfirstchar);

  ///hardcode all below properties into character objects

  var han = {
    name : "Han-Solo",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/han-solo.jpg'>"
  };
  var obi = {
    name : "Obi-Wan",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/obi-wan.jpg'>"
  };
  var yoda = {
    name : "Han-Solo",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/yoda.jpg'>"
  };
  var boba = {
    name : "Han-Solo",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/bobafett.jpg'>"
  };
  var darth = {
    name : "Han-Solo",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/darthvader.jpg'>"
  };
  var emp = {
    name : "Han-Solo",
    health : 80,
    attack : 5,
    counterattack : 6,
    img: "<img src='./assets/images/emperorpalp.jpg' class='test'>"
  };


  var hansolo = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon han'>").append($("<div class='card-header iconfix1'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + han.health + "</p>").append($("<div class='card-body iconfix2'>").append($(han.img)))))));


  var obiwan = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon obi'>").append($("<div class='card-header iconfix1'>Obi-Wan</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + obi.health + "</p>").append($("<div class='card-body iconfix2'>").append($(obi.img)))))));

  var yodah = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon yoda'>").append($("<div class='card-header iconfix1'>Yoda</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + yoda.health + "</p>").append($("<div class='card-body iconfix2'>").append($(yoda.img)))))));

  var bobafett = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon boba'>").append($("<div class='card-header iconfix1'>Boba Fett</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health: " + boba.health + "</p>").append($("<div class='card-body iconfix2'>").append($(boba.img)))))));

  var darthvader = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon darth'>").append($("<div class='card-header iconfix1'>Darth Vader</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + darth.health + "</p>").append($("<div class='card-body iconfix2'>").append($(darth.img)))))));

  var emperor = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon emp'>").append($("<div class='card-header iconfix1'>Emperor</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + emp.health + "</p>").append($("<div class='card-body iconfix2'>").append($(emp.img)))))));

  function initiateGame() {
      pickfirstchar=true

      if (pickfirstchar === true) {

          console.log("TESTWORK",pickfirstchar)
          console.log($(".gamesettings"))

          $(".gamesettings").text("PICK YOUR CHARACTER TO FIGHT IN THE ARENA");  //Make this blink so the person sees it more clearly

          $(".han").on("click", function() {
              $("#arena1").append($(hansolo))
              $("#rebels").empty()
              pickfirstchar = false
              picksecondchar = true
              pickempiresecond();
              console.log(".hanclick",pickfirstchar)

          });
          $(".obi").on("click", function() {
              $("#arena1").append($(obiwan))
              $("#rebels").empty()
              pickfirstchar = false
              picksecondchar = true
              pickempiresecond()
          });
          $(".yoda").on("click", function() {
              $("#arena1").append($(yodah))
              $("#rebels").empty()
              pickfirstchar = false
              picksecondchar = true
              pickempiresecond()
          });
          $(".boba").on("click", function() {
              $("#arena1").append($(bobafett))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              pickrebelsecond()
          });
          $(".darth").on("click", function() {
              $("#arena1").append($(darthvader))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              pickrebelsecond()
          });
          $(".emp").on("click", function() {
              $("#arena1").append($(emperor))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              pickrebelsecond()
          });

        }
  };

  function pickrebelsecond() {

    if (picksecondchar === true) {

    $(".gamesettings").text("PICK THE ENEMY CHARACTER TO FIGHT IN THE ARENA");//Make this blink so the person sees it more clearly

    $(".han").on("click", function() {
        $("#arena2").append($(hansolo))
        $("#rebels").append(obiwan,yodah);
        picksecondchar = false
        arenafight()
    });
    $(".obi").on("click", function() {
        $("#arena2").append($(obiwan))
        $("#rebels").append(hansolo,yodah);
        picksecondchar = false
        arenafight()
    });
    $(".yoda").on("click", function() {
        $("#arena2").append($(yodah))
        $("#rebels").append(hansolo,obiwan);
        picksecondchar = false
        arenafight()
    });

  }
  };

  function pickempiresecond() {
    if (picksecondchar === true) {

      $(".gamesettings").text("PICK THE ENEMY CHARACTER TO FIGHT IN THE ARENA");

      $(".boba").on("click", function() {
          $("#arena2").append($(bobafett))
          $("#empire").append(darthvader,emperor);
          picksecondchar = false
          arenafight()
      });
      $(".darth").on("click", function() {
          $("#arena2").append($(darthvader))
          $("#empire").append(bobafett,emperor);
          picksecondchar = false
          arenafight()
      });
      $(".emp").on("click", function() {
          $("#arena2").append($(emperor))
          $("#empire").append(bobafett,darthvader);
          picksecondchar = false
          arenafight()
      });

    }
  }

  function arenafight() {
    if (pickfirstchar === false && picksecondchar === false) {
      $(".gamesettings").text("PRESS THE ATTACK BUTTON TO BEGIN FIGHTING");
    }
  }


  $("#rebels").append(hansolo,obiwan,yodah);
  $("#empire").append(bobafett,darthvader,emperor);

  initiateGame();
});


//When a button is clicked the chosen icon will be sent to the arena1




//end of code

///end of code




//Working Code





//test so far


//Choose Characters during intro
                //Have the background of the Rebels & Empire section blink at the beginning to indicate picking a character and picking a defender
                //Add some text to show the user must pick a character in the Game settings dialog window
//Add some text to indicate that the user should pick an enemy



//When clicked the icon that is first clicked as character will go to the arena
                //Change background so user know it is there character(add to the word information in the arena text)

//The defender that is clicked will go to the arena

                //Information in the arena word section to indicate "defender is X"







//Arena
