$(document).ready(function() {
  var pickfirstchar= true;
  var picksecondchar= false;

  console.log('should be true for first pick', pickfirstchar);

  ///hardcode all below properties into character objects

  var han = {
    name : "Han-Solo",
    health : 90,
    attack : 9,
    counterattack : 6,
    img: "<img src='./assets/images/han-solo.jpg'>"
  };
  var obi = {
    name : "Obi-Wan",
    health : 110,
    attack : 10,
    counterattack : 15,
    img: "<img src='./assets/images/obi-wan.jpg'>"
  };
  var yoda = {
    name : "Yoda",
    health : 120,
    attack : 14,
    counterattack : 16,
    img: "<img src='./assets/images/yoda.jpg'>"
  };
  var boba = {
    name : "Boba-Fett",
    health : 80,
    attack : 6,
    counterattack : 9,
    img: "<img src='./assets/images/bobafett.jpg'>"
  };
  var darth = {
    name : "Darth-Vader",
    health : 140,
    attack : 18,
    counterattack : 12,
    img: "<img src='./assets/images/darthvader.jpg'>"
  };
  var emp = {
    name : "Emperor",
    health : 100,
    attack : 20,
    counterattack : 10,
    img: "<img src='./assets/images/emperorpalp.jpg'>"
  };

  var hanfirstpick = false
  var obifirstpick = false
  var yodafirstpick = false
  var bobafirstpick = false
  var darthfirstpick = false
  var empfirstpick = false

  var hansecondpick = false
  var obisecondpick = false
  var yodasecondpick = false
  var bobasecondpickk = false
  var darthsecondpick = false
  var empsecondpick = false

  var healthdiff = emp.health - yoda.attack






  var hansolo = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon han'>").append($("<div class='card-header rebelcharactericon'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + han.health + "</p>").append($("<div class='card-body iconfix2'>").append($(han.img)))))));


  var obiwan = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon obi'>").append($("<div class='card-header rebelcharactericon'>Obi-Wan</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + obi.health + "</p>").append($("<div class='card-body iconfix2'>").append($(obi.img)))))));

  var yodah = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon yoda'>").append($("<div class='card-header rebelcharactericon'>Yoda</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + yoda.health + "</p>").append($("<div class='card-body iconfix2'>").append($(yoda.img)))))));

  var bobafett = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon boba'>").append($("<div class='card-header empirecharactericon'>Boba Fett</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health: " + boba.health + "</p>").append($("<div class='card-body iconfix2'>").append($(boba.img)))))));

  var darthvader = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon darth'>").append($("<div class='card-header empirecharactericon'>Darth Vader</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + darth.health + "</p>").append($("<div class='card-body iconfix2'>").append($(darth.img)))))));

  var emperor = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon emp'>").append($("<div class='card-header empirecharactericon'>Emperor</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + emp.health + "</p>").append($("<div class='card-body iconfix2'>").append($(emp.img)))))));


function initiateGame() {

      if (pickfirstchar === true && picksecondchar === false) {
          $(".firstpick").css("border", "solid 5px #ffc107");

          /*
          $(".gamesettings").text("PICK YOUR CHARACTER TO FIGHT IN THE ARENA");  //Make this blink so the person sees it more clearly
          */
          $(".han").on("click", function() {
              $("#arena1").append($(".han"))
              $("#rebels").empty()
              hanfirstpick = true
              pickfirstchar = false
              picksecondchar = true
              console.log('if han first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".obi").on("click", function() {
              $("#arena1").append($(".obi"))
              $("#rebels").empty()
              pickfirstchar = false
              picksecondchar = true
              obifirstpick = true
              console.log('if obi first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".yoda").on("click", function() {
              $("#arena1").append($(".yoda"))
              $("#rebels").empty()
              yodafirstpick = true
              pickfirstchar = false
              picksecondchar = true
              console.log('if yoda first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".boba").on("click", function() {
              $("#arena1").append($(".boba"))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              bobafirstpick = true
              console.log('if boba first picked, second pick should be true',picksecondchar)
              pickrebelsecond()
          });
          $(".darth").on("click", function() {
              $("#arena1").append($(".darth"))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              darthfirstpick = true
              console.log('if darth first picked, second pick should be true',picksecondchar)
              pickrebelsecond()
          });
          $(".emp").on("click", function() {
              $("#arena1").append($(".emp"))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              empfirstpick = true
              console.log('if emperor first picked, second pick should be true',picksecondchar)
              pickrebelsecond()
          });
    }
};

function pickrebelsecond() {

  pickfirstchar = false
  picksecondchar = true

  if (picksecondchar === true && pickfirstchar === false) {

    console.log('rebel second pick test',picksecondchar)

    $(".firstpick").css("border", "");
    $(".secondpick").css("border", "solid 5px #ffc107");

    $(".han").on("click", function() {
        $("#arena2").append($(".han"))
        $("#rebels").append(obiwan,yodah);
        picksecondchar = false
        pickfirstchar = false
        hansecondpick = true
        arenafight()
    });
    $(".obi").on("click", function() {
        $("#arena2").append($(".obi"))
        $("#rebels").append(hansolo,yodah);
        picksecondchar = false
        pickfirstchar = false
        obisecondpick = true
        arenafight()
    });
    $(".yoda").on("click", function() {
        $("#arena2").append($(".yoda"))
        $("#rebels").append(hansolo,obiwan);
        picksecondchar = false
        pickfirstchar = false
        yodasecondpick = true
        arenafight()
    });
  }
};


function pickempiresecond() {
    pickfirstchar = false
    picksecondchar = true

    if (picksecondchar === true && pickfirstchar === false) {

      console.log('empire second pick test',picksecondchar)

      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "solid 5px #ffc107");

      $(".boba").on("click", function() {
          $("#arena2").append($(".boba"))
          $("#empire").append(darthvader,emperor);
          picksecondchar = false
          pickfirstchar = false
          bobasecondpick = true
          arenafight()
      });
      $(".darth").on("click", function() {
          $("#arena2").append($(".darth"))
          $("#empire").append(bobafett,emperor);
          picksecondchar = false
          pickfirstchar = false
          darthsecondpick = true
          arenafight()
      });
      $(".emp").on("click", function() {
          $("#arena2").append($(".emp"))
          $("#empire").append(bobafett,darthvader);
          picksecondchar = false
          pickfirstchar = false
          empsecondpick = true
          arenafight()
      });
    }
  }


function arenafight() {

    if (pickfirstchar === false && picksecondchar === false) {
      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "");
      $(".third-arena").css("border", "solid 5px #ffc107");

      var test = emp.health - yoda.attack

          if (yodafirstpick === true && empsecondpick === true ) {
            console.log('yoda first pick, emperor second pick')
                if (yoda.health > 0 && emp.health > 0) {
                  $(".attack").on("click", function() {
                    $(".test").text(healthdiff)
                  });
                } else if (yoda.health < 0) {
                  alert("you lose!! Start again with a new character!")
                  losses++
                } else if(emp.health < 0) {
                  alert("you beat emperor palpatine")
                    if (bobacounter === true && darthcounter === true && empcounter === true){
                      alert("you beat all opponents! Start again with a new character!")
                      wins++

                    }
                }
          }




    }
  }

*/
/*
  $("#rebels").append(hansolo,obiwan,yodah);
  $("#empire").append(bobafett,darthvader,emperor);

*/
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
