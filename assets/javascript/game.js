$(document).ready(function() {

var pickfirstchar = true;
var picksecondchar = false;
var img = new Image();


console.log(pickfirstchar);

document.getElementById("winimg").src="./assets/images/TaterTots.jpg"


///hardcode all below properties into character objects

var han = {
  name : "Han-Solo",
  health : "80",
  attack : "5",
  counterattack : "6",
  img: "han-solo.jpg"
};

console.log(han.image)
/*

var rebelcharacters = ["Han-Solo","Obi-Wan","Yoda"];
var rebelcharhealth = [80,120,150];
var rebelcharattack = [5,10,25];

var empirecharacters = ["Boba-Fett","Darth-Vader","Emperor"];
var empirecharhealth = [70,140,120];
var empirecharattack = [8,15,20];





var han = $("<img>");
var obi = $("<img>");
var yoda = $("<img>");

var boba = $("<img>");
var darth = $("<img>");
var emp = $("<img>");

//REBEL CHARACTERS//
han.addClass("rebelicon han");
han.attr("src", "assets/images/han-solo.jpg");
han.attr("health", rebelcharhealth[0]);
han.attr("attack", rebelcharattack[0]);

console.log(han.attr("name", rebelcharacters[0]));


obi.addClass("rebelicon obi");
obi.attr("src", "assets/images/obi-wan.jpg");
obi.attr("health", rebelcharhealth[1]);
obi.attr("attack", rebelcharattack[1]);


yoda.addClass("rebelicon yoda");
yoda.attr("src", "assets/images/yoda.jpg");
yoda.attr("health", rebelcharhealth[2]);
yoda.attr("attack", rebelcharattack[2]);

//EMPIRE CHARACTERS//
boba.addClass("empireicon boba");
boba.attr("src", "assets/images/bobafett.jpg");
boba.attr("health", empirecharhealth[0]);
boba.attr("attack", empirecharattack[0]);

console.log(boba.attr("name", empirecharacters[0]));


darth.addClass("empireicon darth");
darth.attr("src", "assets/images/darthvader.jpg");
darth.attr("health", empirecharhealth[1]);
darth.attr("attack", empirecharattack[1]);


emp.addClass("empireicon emp");
emp.attr("src", "assets/images/emperorpalp.jpg");
emp.attr("health", empirecharhealth[2]);
emp.attr("attack", empirecharattack[2]);

*/

var hansolo = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon han'>").append($("<div class='card-header iconfix1'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:110</p>").append($("<div class='card-body iconfix2'>").append($(han.image)))))));


/*

var obiwan = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon obi'>").append($("<div class='card-header iconfix1'>Obi-Wan</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:110</p>").append($("<div class='card-body iconfix2'>").append($(obi)))))));

var yodah = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon yoda'>").append($("<div class='card-header iconfix1'>Yoda</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:150</p>").append($("<div class='card-body iconfix2'>").append($(yoda)))))));

var bobafett = ($("<div class='card text-white bg-primary mb-3 iconfix3 empireicon boba'>").append($("<div class='card-header iconfix1'>Boba Fett</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:120</p>").append($("<div class='card-body iconfix2'>").append($(boba)))))));

var darthvader = ($("<div class='card text-white bg-primary mb-3 iconfix3 empireicon darth'>").append($("<div class='card-header iconfix1'>Darth Vader</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:110</p>").append($("<div class='card-body iconfix2'>").append($(darth)))))));

var emperor = ($("<div class='card text-white bg-primary mb-3 iconfix3 empireicon emp'>").append($("<div class='card-header iconfix1'>Emperor</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:150</p>").append($("<div class='card-body iconfix2'>").append($(emp)))))));

*/

$("#rebels").append(hansolo);

});

/*
$("#empire").append(bobafett,darthvader,emperor);

*/

//When a button is clicked the chosen icon will be sent to the arena1

/*
function initiateGame() {

    pickfirstchar=true

    if (pickfirstchar === true) {

        $(".gamesettings").text("PICK YOUR CHARACTER TO FIGHT IN THE ARENA");  //Make this blink so the person sees it more clearly

        $(".han").on("click", function() {
            $("#arena1").append($(hansolo))
            $("#rebels").empty()
            pickfirstchar = false
            picksecondchar = true
            pickempiresecond();
            console.log(pickfirstchar)

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

initiateGame ();
//end of code
});
///end of code



//WORKS
/*
var obiwan = $("<div class='col-xl-4 col-md-4 col-xs-4 iconfix1'>").append($("<div class='card text-white bg-primary mb-3 iconfix3'>").append($("<div class='card-header iconfix1'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>120</p>").append($(obi).append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>120</p>"))))))));
*/
//WORKS



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
