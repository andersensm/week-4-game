$(document).ready(function() {


var rebelcharacters = ["Han-Solo","Obi-Wan","Yoda"];
var rebelcharhealth = [80,120,150];
var rebelcharattack = [5,10,25];

var empirecharacters = ["Boba-Fett","Darth-Vader","Emperor"];
var empirecharhealth = [70,140,120];
var empirecharattack = [8,15,20];


var han = $("<img>");
var obi = $("<img>");
var yoda = $("<img>");


han.addClass("icon han");
han.attr("src", "assets/images/han-solo.jpg");
han.attr("health", rebelcharhealth[0]);
han.attr("attack", rebelcharattack[0]);
han.attr("name", rebelcharacters[0]);


obi.addClass("icon obi");
obi.attr("src", "assets/images/obi-wan.jpg");
obi.attr("health", rebelcharhealth[1]);
obi.attr("attack", rebelcharattack[1]);
han.attr("name", rebelcharacters[1]);


yoda.addClass("icon yoda");
yoda.attr("src", "assets/images/yoda.jpg");
yoda.attr("health", rebelcharhealth[2]);
yoda.attr("attack", rebelcharattack[2]);
han.attr("name", rebelcharacters[2]);



var hansolo = ($("<div class='card text-white bg-primary mb-3 iconfix3'>").append($("<div class='card-header iconfix1'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:120</p>").append($("<div class='card-body iconfix2'>").append($(han)))))));

var obiwan = ($("<div class='card text-white bg-primary mb-3 iconfix3'>").append($("<div class='card-header iconfix1'>Obi-Wan</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:110</p>").append($("<div class='card-body iconfix2'>").append($(obi)))))));

var yodah = ($("<div class='card text-white bg-primary mb-3 iconfix3'>").append($("<div class='card-header iconfix1'>Yoda</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:150</p>").append($("<div class='card-body iconfix2'>").append($(yoda)))))));

$("#rebels").append(hansolo,obiwan,yodah);


$(".gamesettings").text("PICK A CHARACTER TO FIGHT IN THE ARENA"); //Make this blink so the person sees it more clearly

//When a button is clicked the chosen icon will be sent to the arena1

$(".icon").on("click", function() {

              if (rebelcharacters[0]) {
                $(".arena2").append($(hansolo))
                $("#rebels").empty(".icon")
              } else if (rebelcharacters[1]) {
                  $(".arena2").append($(obiwan))
                  $("#rebels").empty(".icon")
              } else if (rebelcharacters[2]) {
                    $(".arena2").append($(yodah))
                    $("#rebels").empty(".icon")
                  }
});

});

/*
 $("<div class='col-xl-4 col-md-4 col-xs-4'>").append($("<div class='card'>").append($(han).append($("<div class='card-body'>").append($("<h4 class='card-title'>Card title</h4>").append($("<p class='card-text'>TEST-1-2</p>").append($("<ul class='list-group list-group-flush'>").append($("<li class='list-group-item'>Cras justo odio</li>").append($("<li class='list-group-item'>Dapibus ac facilisis in</li>").append($("<li class='list-group-item'>Vestibulum at eros</li>"))))))))));

*/


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
