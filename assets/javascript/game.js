
$(document).ready(function() {

  var wins = 0
  var losses = 0

  var han = {
    name : "Han-Solo",
    health : 90,
    attack : 1,
    baseattack: 1,
    counterattack : 6,
    img: "<img src='./assets/images/han-solo.jpg'>"
  };
  var obi = {
    name : "Obi-Wan",
    health : 110,
    attack : 3,
    baseattack: 2,
    img: "<img src='./assets/images/obi-wan.jpg'>"
  };
  var yoda = {
    name : "Yoda",
    health : 120,
    attack : 4,
    baseattack: 2,
    img: "<img src='./assets/images/yoda.jpg'>"
  };
  var boba = {
    name : "Boba-Fett",
    health : 80,
    counterattack : 2,
    img: "<img src='./assets/images/bobafett.jpg'>"
  };
  var darth = {
    name : "Darth-Vader",
    health : 140,
    counterattack : 4,
    img: "<img src='./assets/images/darthvader.jpg'>"
  };
  var emp = {
    name : "Emperor Palpatine",
    health : 100,
    counterattack : 5,
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

    $(".bobahealthspot").removeClass("opponent")
    $(".darthhealthspot").removeClass("opponent")
    $(".emperorhealthspot").removeClass("opponent")
    $(".hanhealthspot").removeClass("chosen")
    $(".obihealthspot").removeClass("chosen")
    $(".yodahealthspot").removeClass("chosen")

    console.log (boba.health, yoda.health, darth.health, emp.health)
    chosen = {}
    opponent = {}

    console.log('chosen health, opponent health',chosen.health, opponent.health)

    chosenpicked = false
    opponentpicked = false

    bobafettpicked = false
    darthvaderpicked = false
    emperorpicked = false

    opponentscounter = 0


    $("#attacktext").text("COMBAT LOG: You have been defeated! Play again.")
    $("#rebels").append($(".han"))
    $("#rebels").append($(".obi"))
    $("#rebels").append($(".yoda"))
    $("#empire").append($(".boba"))
    $("#empire").append($(".darth"))
    $("#empire").append($(".emp"))

    $("#hanhealth").text("Health: " + han.health)
    $("#obihealth").text("Health: " + obi.health)
    $("#yodahealth").text("Health: " + yoda.health)
    $("#bobahealth").text("Health: " + boba.health)
    $("#darthhealth").text("Health: " + darth.health)
    $("#emphealth").text("Health: " + emp.health)

    document.getElementsByClassName("attack").disabled = true;
    console.log('default game does work')
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

              $(".firstpick").css("border", "solid 5px #ffc107");
              $(".secondpick").css("border", "");
              $(".third-arena").css("border", "");
              $(".fourth-remaining").css("border", "");

              $(".han").on("click", function() {
                  $("#arena1").append($(".han"))
                  $(".hanhealthspot").addClass("chosen")
                  rebel(han)
                  console.log(chosen)
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  pickempiresecond()
              });
              $(".obi").on("click", function() {
                  $("#arena1").append($(".obi"))
                  $(".obihealthspot").addClass("chosen")
                  rebel(obi)
                  console.log(chosen)
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  pickempiresecond()
              });
              $(".yoda").on("click", function() {
                  $("#arena1").append($(".yoda"))
                  $(".yodahealthspot").addClass("chosen")
                  rebel(yoda)
                  console.log(chosen)
                  $("#rebels").toggle(false)
                  chosenpicked = true
                  pickempiresecond()
              });

            }

  function pickempiresecond() {

          console.log('pick empire second true')


          $(".firstpick").css("border", "");
          $(".secondpick").css("border", "solid 5px #ffc107");

          $(".boba").on("click", function() {
              $("#arena2").append($(".boba"))
              $(".bobahealthspot").addClass("opponent")
              empire(boba)
              console.log(boba)
              opponentpicked = true
              bobafettpicked = true
              arenafight()
          });
          $(".darth").on("click", function() {
              $("#arena3").append($(".darth"))
              $(".darthhealthspot").addClass("opponent")
              empire(darth)
              console.log(darth)
              opponentpicked = true
              darthvaderpicked = true
              arenafight()
          });
          $(".emp").on("click", function() {
              $("#arena4").append($(".emp"))
              $(".emperorhealthspot").addClass("opponent")
              empire(emp)
              console.log(emp)
              opponentpicked = true
              emperorpicked = true
              arenafight()
          });

        }


  function arenafight() {

        //updates indicators for the Game Rules & settings for easier user interaction with the game
        $(".firstpick").css("border", "");
        $(".secondpick").css("border", "");
        $(".third-arena").css("border", "solid 5px #ffc107");

        console.log('arenafighttest')

            //chosen picked and opponent picked are both true
            if (chosenpicked === true && opponentpicked === true) {

              //attack button function
              $(".attack").on("click", function() {

                //power up chosen's attack based on chosen base attack propertie's value
                chosen.attack = chosen.attack + chosen.baseattack

                if (chosen.health >= 0 && opponent.health >= 0) {

                    chosen.health -= opponent.counterattack

                    opponent.health -= chosen.attack


                    $(".opponent").text("Health: " + opponent.health)
                    $(".chosen").text("Health: " + chosen.health)

                    $("#attacktext").text("COMBAT LOG: " + chosen.name + " attacked for " + chosen.attack + " damage. " + opponent.name + " counterattacked for " + opponent.counterattack + " damage.")

                } else if (opponent.health <= 0) {
                    $("#attacktext").text("COMBAT LOG: You have defeated " + opponent.name + "! Pick another opponent.")
                    $(".firstpick").css("border", "");
                    $(".secondpick").css("border", "");
                    $(".third-arena").css("border", "solid 5px #ffc107");
                    $(".fourth-remaining").css("border", "solid 5px #ffc107");
                    //resets the opponent
                    opponentpicked === false
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
                        wins++
                        $("#wins").text("Wins :" + wins)
                        defaultGame();
                    }
                    //select another opponent
                    pickempiresecond();
                //
                } else if (chosen.health <= 0) {
                    $(".hanhealthspot").removeClass("chosen")
                    $(".obihealthspot").removeClass("chosen")
                    $(".yodahealthspot").removeClass("chosen")
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
