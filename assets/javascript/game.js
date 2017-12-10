$(document).ready(function() {
  var pickfirstchar = true;
  var picksecondchar = false;

  console.log('should be true for first pick', pickfirstchar);

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

  var hancounter = 0
  var obicounter = 0
  var yodacounter = 0
  var bobacounter = 0
  var darthcounter = 0
  var empcounter = 0


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
 function hanfirst() {
          $(".han").on("click", function() {
              $("#arena1").append($(hansolo))
              $("#rebels").empty()
              hancounter++
              pickfirstchar = false
              picksecondchar = true
              console.log('if han first picked, second pick should be true',picksecondchar)
              console.log('if han is first picked what is counter',hancounter)
              pickempiresecond()
          });
 }
 function obifirst() {
          $(".obi").on("click", function() {
              $("#arena1").append($(obiwan))
              $("#rebels").empty()
              pickfirstchar = false
              picksecondchar = true
              obicounter++
              console.log('if obi first picked, second pick should be true',picksecondchar)
              console.log('if obi is first picked what is counter',obicounter)
              pickempiresecond()
          });
 }
 function yodafirst() {
          $(".yoda").on("click", function() {
              $("#arena1").append($(yodah))
              $("#rebels").empty()
              yodacounter++
              pickfirstchar = false
              picksecondchar = true
              console.log('if yoda first picked, second pick should be true',picksecondchar)
              console.log('if yoda is first picked what is counter',yodacounter)
              pickempiresecond()
          });
 }
 function bobafirst() {
          $(".boba").on("click", function() {
              $("#arena1").append($(bobafett))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              bobacounter++
              console.log('if boba first picked, second pick should be true',picksecondchar)
              console.log('if boba is first picked what is counter',bobacounter)
              pickrebelsecond()
          });
 }
 function darthfirst () {
          $(".darth").on("click", function() {
              $("#arena1").append($(darthvader))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              darthcounter++
              console.log('if darth first picked, second pick should be true',picksecondchar)
              console.log('if darth is first picked what is counter',darthcounter)
              pickrebelsecond()
          });
 }
 function empfirst() {
          $(".emp").on("click", function() {
              $("#arena1").append($(emperor))
              $("#empire").empty()
              pickfirstchar = false
              picksecondchar = true
              empcounter++
              console.log('if emperor first picked, second pick should be true',picksecondchar)
              console.log('if emperor is first picked what is counter',empcounter)
              pickrebelsecond()
          });
   }
  };

function pickrebelsecond() {

    picksecondchar = true
    pickfirstchar = false

    if (picksecondchar === true && pickfirstchar === false) {

    console.log('rebel second pick test',picksecondchar)

    $(".firstpick").css("border", "");
    $(".secondpick").css("border", "solid 5px #ffc107");


    /*
    $(".gamesettings").text("PICK THE ENEMY CHARACTER TO FIGHT IN THE ARENA");//Make this blink so the person sees it more clearly
    */
    $(".han").on("click", function() {
        $("#arena2").append($(hansolo))
        $("#rebels").append(obiwan,yodah);
        picksecondchar = false
        hancounter++
        arenafight()
    });
    $(".obi").on("click", function() {
        $("#arena2").append($(obiwan))
        $("#rebels").append(hansolo,yodah);
        picksecondchar = false
        obicounter++
        arenafight()
    });
    $(".yoda").on("click", function() {
        $("#arena2").append($(yodah))
        $("#rebels").append(hansolo,obiwan);
        picksecondchar = false
        yodacounter++
        console.log('yodacountersecond',yodacounter)
        arenafight()
    });

  }
  };
function pickempiresecond() {


    if (picksecondchar === true && pickfirstchar === false) {

      console.log('empire second pick test',picksecondchar)

      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "solid 5px #ffc107");

      $(".boba").on("click", function() {
          $("#arena2").append($(bobafett))
          $("#empire").append(darthvader,emperor);
          picksecondchar = false
          bobacounter++
          arenafight()
      });
      $(".darth").on("click", function() {
          $("#arena2").append($(darthvader))
          $("#empire").append(bobafett,emperor);
          picksecondchar = false
          darthcounter++
          arenafight()
      });
      $(".emp").on("click", function() {
          $("#arena2").append($(emperor))
          $("#empire").append(bobafett,darthvader);
          picksecondchar = false
          empcounter++
          console.log('if emperor is second picked, what is counter',empcounter)
          arenafight()
      });

    }
  }
function arenafight() {
    if (pickfirstchar === false && picksecondchar === false) {

      if (yodacounter === 1 && empcounter === 2 ) {

          console.log('both characters picked',true)
      }




      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "");
      $(".third-arena").css("border", "solid 5px #ffc107");



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
