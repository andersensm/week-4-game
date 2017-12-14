
$(document).ready(function() {

  var wins = 0
  var losses = 0

  document.getElementsByClassName("attack").disabled = true;

  var han = {
    name : "Han-Solo",
    health : 90,
    attack : 4,
    baseattack: 1,
    counterattack : 6,
    img: "<img src='./assets/images/han-solo.jpg'>"
  };
  var obi = {
    name : "Obi-Wan",
    health : 110,
    attack : 6,
    baseattack: 2,
    img: "<img src='./assets/images/obi-wan.jpg'>"
  };
  var yoda = {
    name : "Yoda",
    health : 120,
    attack : 8,
    baseattack: 4,
    img: "<img src='./assets/images/yoda.jpg'>"
  };
  var boba = {
    name : "Boba-Fett",
    health : 80,
    counterattack : 5,
    img: "<img src='./assets/images/bobafett.jpg'>"
  };
  var darth = {
    name : "Darth-Vader",
    health : 140,
    counterattack : 8,
    img: "<img src='./assets/images/darthvader.jpg'>"
  };
  var emp = {
    name : "Emperor Palpatine",
    health : 100,
    counterattack : 10,
    img: "<img src='./assets/images/emperorpalp.jpg'>"
  };


  //empty objects to hold chosen & opponent based on character's objects
  var chosen = {}
  var opponent = {}

  var chosenpicked = false
  var opponentpicked = false

  var bobafettpicked = false
  var darthvaderpicked = false
  var emperorpicked = false

  var opponentscounter = 0


  function rebel(chosenrebel) {

    chosen.name = chosenrebel.name
    chosen.health = chosenrebel.health
    chosen.attack = chosenrebel.attack
    chosen.baseattack = chosenrebel.baseattack
  }

  function empire(chosenempire) {
    opponent.name = chosenempire.name
    opponent.health = chosenempire.health
    opponent.counterattack = chosenempire.counterattack
  }



  function defaultGame() {

    //reset for all chosen/opponent classes to be empty on new game
    $(".bobahealthspot").removeClass("opponent")
    $(".darthhealthspot").removeClass("opponent")
    $(".emperorhealthspot").removeClass("opponent")
    $(".hanhealthspot").removeClass("chosen")
    $(".obihealthspot").removeClass("chosen")
    $(".yodahealthspot").removeClass("chosen")

    console.log (boba.health, yoda.health, darth.health, emp.health)
    chosen = {}
    opponent = {}
    //confirm chosen and opponent empty object containers are undefined
    console.log('chosen health, opponent health',chosen.health, opponent.health)

    chosenpicked = false
    opponentpicked = false

    bobafettpicked = false
    darthvaderpicked = false
    emperorpicked = false

    //moves back the divs to original spots in the HTML DOM
    $("#rebels").append($(".han"))
    $("#rebels").append($(".obi"))
    $("#rebels").append($(".yoda"))
    $("#empire").append($(".boba"))
    $("#empire").append($(".darth"))
    $("#empire").append($(".emp"))

    //display healths back to original in the HTML DOM based on the character's original objects stats
    $("#hanhealth").text("Health: " + han.health)
    $("#obihealth").text("Health: " + obi.health)
    $("#yodahealth").text("Health: " + yoda.health)
    $("#bobahealth").text("Health: " + boba.health)
    $("#darthhealth").text("Health: " + darth.health)
    $("#emphealth").text("Health: " + emp.health)


    document.getElementsByClassName("attack").disabled = true;
    console.log('default game does work')
    //display divs again when empty
    $("#arena2").toggle(true)
    $("#arena3").toggle(true)
    $("#arena4").toggle(true)
    $("#rebels").toggle(true)
    bobafettpicked = false
    darthvaderpicked = false
    emperorpicked = false

    initiateGame();


    }


  function initiateGame() {

              //updates indicators for the Game Rules & settings for easier user interaction with the game
              $(".firstpick").css("border", "solid 5px #ffc107");
              $(".secondpick").css("border", "");
              $(".third-arena").css("border", "");
              $(".fourth-remaining").css("border", "");

              //settings for each chosen char when selected
              $(".han").on("click", function() {
                  //moves the html divs contained within class han to arena1
                  $("#arena1").append($(".han"))
                  //if chosen adds class chosen
                  $(".hanhealthspot").addClass("chosen")
                  //sets the object han property value into the chosen empty object container
                  rebel(han)
                  console.log(chosen)
                  //turns off display for other chars not chosen at this time
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  //moves to selecting opponent function
                  pickempiresecond()
              });
              //settings for each chosen char when selected
              $(".obi").on("click", function() {
                  //moves the html divs contained within class obi to arena1
                  $("#arena1").append($(".obi"))
                  //if chosen adds class chosen
                  $(".obihealthspot").addClass("chosen")
                  //sets the object obi property value into the chosen empty object container
                  rebel(obi)
                  console.log(chosen)
                  //turns off display for other chars not chosen at this time
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  //moves to selecting opponent function
                  pickempiresecond()
              });
              //settings for each chosen char when selected
              $(".yoda").on("click", function() {
                  //moves the html divs contained within class yoda to arena1
                  $("#arena1").append($(".yoda"))
                  //if chosen adds class chosen
                  $(".yodahealthspot").addClass("chosen")
                  //sets the object yoda property value into the chosen empty object container
                  rebel(yoda)
                  console.log(chosen)
                  //turns off display for other chars not chosen at this time
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  //moves to selecting opponent function
                  pickempiresecond()
              });

            }

  function pickempiresecond() {

          console.log('pick empire second true')

          //updates indicators for the Game Rules & settings for easier user interaction with the game
          $(".firstpick").css("border", "");
          $(".secondpick").css("border", "solid 5px #ffc107");
          //settings for each chosen char when selected
          $(".boba").on("click", function() {
              //moves the html divs contained within class boba to arena2
              $("#arena2").append($(".boba"))
              //if opponent adds class opponent
              $(".bobahealthspot").addClass("opponent")
              //sets the object boba property value into the empire empty object container
              empire(boba)
              console.log(boba)
              opponentpicked = true
              bobafettpicked = true
              //moves to arena fight function
              arenafight()
          });
          //settings for each chosen char when selected
          $(".darth").on("click", function() {
              //moves the html divs contained within class darth to arena3
              $("#arena3").append($(".darth"))
              //if opponent adds class opponent
              $(".darthhealthspot").addClass("opponent")
              //sets the object darth property value into the empire empty object container
              empire(darth)
              console.log(darth)
              opponentpicked = true
              darthvaderpicked = true
              //moves to arena fight function
              arenafight()
          });
          //settings for each chosen char when selected
          $(".emp").on("click", function() {
              //moves the html divs contained within class emp to arena4
              $("#arena4").append($(".emp"))
              //if opponent adds class opponent
              $(".emperorhealthspot").addClass("opponent")
              //sets the object emp property value into the empire empty object container
              empire(emp)
              console.log(emp)
              opponentpicked = true
              emperorpicked = true
              //moves to arena fight function
              arenafight()
          });

        }


  function arenafight() {

        document.getElementsByClassName("attack").disabled = false;
        //updates indicators for the Game Rules & settings for easier user interaction with the game
        $(".firstpick").css("border", "");
        $(".secondpick").css("border", "");
        $(".third-arena").css("border", "solid 5px #ffc107");

        console.log('arenafighttest')

            //chosen picked and opponent picked are both true
            if (chosenpicked === true && opponentpicked === true) {

              //attack button function
              $(".attack").off().on("click", function() {

                //power up chosen's attack based on chosen's base attack properties value
                chosen.attack = chosen.attack + chosen.baseattack

                console.log(chosen.attack, chosen.baseattack)

                //if both champions are above 0 health then their health is reduced based on each's attacks
                if (chosen.health >= 0 && opponent.health >= 0) {

                    chosen.health -= opponent.counterattack

                    opponent.health -= chosen.attack

                    //displays health for each champion in HTML DOM
                    $(".opponent").text("Health: " + opponent.health)
                    $(".chosen").text("Health: " + chosen.health)

                    //Combat text for how much damage was done to each champion when attack button is run
                    $("#attacktext").text("COMBAT LOG: " + chosen.name + " attacked for " + chosen.attack + " damage. " + opponent.name + " counterattacked for " + opponent.counterattack + " damage.")

                } else if (opponent.health <= 0) {
                    $("#attacktext").text("COMBAT LOG: You have defeated " + opponent.name + "! Pick another opponent.")
                    //updates indicators for the Game Rules & settings for easier user interaction with the game
                    $(".firstpick").css("border", "");
                    $(".secondpick").css("border", "");
                    $(".third-arena").css("border", "solid 5px #ffc107");
                    $(".fourth-remaining").css("border", "solid 5px #ffc107");
                    //resets the opponent
                    opponentpicked === false
                    //removes opponent class for whichever opponent loses in the fight
                    $(".bobahealthspot").removeClass("opponent")
                    $(".darthhealthspot").removeClass("opponent")
                    $(".emperorhealthspot").removeClass("opponent")

                    //turns off display for each opponent when defeated
                    if (bobafettpicked === true) {
                      $("#arena2").toggle(false)
                    }
                    if (darthvaderpicked === true) {
                      $("#arena3").toggle(false)
                    }
                    if (emperorpicked === true) {
                      $("#arena4").toggle(false)
                    }
                    //win track condition
                    if (bobafettpicked === true && darthvaderpicked === true && emperorpicked === true) {
                        $("#attacktext").text("You have defeated all three opponents! Pick another rebel character to play.")
                        wins++
                        $("#wins").text("Wins :" + wins)
                        defaultGame();
                    }
                    //select another opponent
                    pickempiresecond();
                //if chosen character loses, restarts game
              } else if (chosen.health <= 0) {
                    $(".hanhealthspot").removeClass("chosen")
                    $(".obihealthspot").removeClass("chosen")
                    $(".yodahealthspot").removeClass("chosen")
                    chosenpicked === false
                    $("#attacktext").text("You have been defeated.")
                    console.log('loss for ' +  chosen.name)
                    losses++
                    $("#losses").text("Losses :" + losses)
                    defaultGame();
                }

              })





        };
      }



initiateGame();
});
