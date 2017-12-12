$(document).ready(function() {
  var pickfirstchar= true;
  var picksecondchar= false;
  var wins = 0
  var losses = 0
  var emperordead= false
  var darthdead = false
  var bobadead = false
  $("#tempspot").toggle(false)
  document.getElementsByClassName("attack").disabled = true;



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

  var hanpicked = false
  var obipicked = false
  var yodapicked = false

  var bobapicked = false
  var darthpicked = false
  var emperorpicked = false


function defaultGame() {
  document.getElementsByClassName("attack").disabled = true;
  console.log('default game does work')
  $("#arena2").toggle(true)
  $("#arena3").toggle(true)
  $("#arena4").toggle(true)
  $("#rebels").toggle(true)
  console.log(emp.health,darth.health,boba.health,yoda.health)
  han = {
    name : "Han-Solo",
    health : 90,
    attack : 9,
    counterattack : 6,
    img: "<img src='./assets/images/han-solo.jpg'>"
  };
  obi = {
    name : "Obi-Wan",
    health : 110,
    attack : 10,
    counterattack : 15,
    img: "<img src='./assets/images/obi-wan.jpg'>"
  };
  yoda = {
    name : "Yoda",
    health : 120,
    attack : 14,
    counterattack : 16,
    img: "<img src='./assets/images/yoda.jpg'>"
  };
  boba = {
    name : "Boba-Fett",
    health : 80,
    attack : 6,
    counterattack : 9,
    img: "<img src='./assets/images/bobafett.jpg'>"
  };
  darth = {
    name : "Darth-Vader",
    health : 140,
    attack : 18,
    counterattack : 12,
    img: "<img src='./assets/images/darthvader.jpg'>"
  };
  emp = {
    name : "Emperor",
    health : 100,
    attack : 20,
    counterattack : 10,
    img: "<img src='./assets/images/emperorpalp.jpg'>"
  };
  console.log(emp.health,darth.health,boba.health,yoda.health)
  $("#emphealth").text("Health :" + emp.health)
  $("#darthhealth").text("Health :" + darth.health)
  $("#bobahealth").text("Health :" + boba.health)
  $("#yodahealth").text("Health :" + yoda.health)
  console.log(emp.health,darth.health,boba.health,yoda.health)
  $("#rebels").append($(".han"))
  $("#rebels").append($(".obi"))
  $("#rebels").append($(".yoda"))
  $("#empire").append($(".boba"))
  $("#empire").append($(".darth"))
  $("#empire").append($(".emp"))
  hanpicked = false
  obipicked = false
  yodapicked = false

  bobapicked = false
  darthpicked = false
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
              $("#rebels").toggle(false)
              hanpicked = true
              console.log('if han first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".obi").on("click", function() {
              $("#arena1").append($(".obi"))
              $("#rebels").toggle(false)
              obifirstpick = true
              console.log('if obi first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".yoda").on("click", function() {
              $("#arena1").append($(".yoda"))
              $("#rebels").toggle(false)
              yodapicked = true
              console.log('if yoda first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });


function pickempiresecond() {

      console.log('empire second pick test',picksecondchar)

      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "solid 5px #ffc107");

      $(".boba").on("click", function() {
          $("#arena2").append($(".boba"))
          bobapicked = true
          arenafight()
      });
      $(".darth").on("click", function() {
          $("#arena3").append($(".darth"))
          darthpicked = true
          arenafight()
      });
      $(".emp").on("click", function() {
          $("#arena4").append($(".emp"))
          emperorpicked = true
          arenafight()
      });




function arenafight() {

      document.getElementsByClassName("attack").disabled = false;

      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "");
      $(".third-arena").css("border", "solid 5px #ffc107");

      console.log('arenafighttest')




//My alerts for wins & losses are making the character(s) health go down 


      console.log('whospickedrightnow',emperorpicked,bobapicked,darthpicked)

          if (yodapicked === true && emperorpicked === true ) {


                  console.log('yoda first pick, emperor second pick')
                  $(".attack").on("click", function() {
                    emp.health -= yoda.attack
                    yoda.health -= emp.counterattack
                    console.log('emp health',emp.health)
                      if (yoda.health > 0 && emp.health > 0) {
                          $("#emphealth").text("Health :" + emp.health)
                          $("#yodahealth").text("Health :" + yoda.health)
                          console.log('emp.health is > 0')
                      } else if (yoda.health < 0) {
                        $("#arena4").toggle(false)
                        document.getElementsByClassName("attack").disabled = true;
                        alert("you lose!! Start again with a new character!")
                        yoda.health  = 120
                        losses++
                        $("#losses").text("Losses :" + losses)
                        defaultGame();
                      } else if(emp.health < 0) {
                        $("#arena4").toggle(false)
                        document.getElementsByClassName("attack").disabled = true;
                        alert("you beat emperor palpatine")
                        emperordead = true
                        emperorpicked = false
                        console.log('empirecharsdead',bobadead,darthdead,emperordead)
                        emp.health = 500000
                        $(".firstpick").css("border", "");
                        $(".secondpick").css("border", "");
                        $(".third-arena").css("border", "solid 5px #ffc107");
                        $(".fourth-remaining").css("border", "solid 5px #ffc107");
                        if (emperordead === true && bobadead === true && darthdead === true) {
                          wins++
                          $("#wins").text("Wins :" + wins)
                          defaultGame();
                        }
                        pickempiresecond();
                      }
                    });
            } else if (yodapicked === true && darthpicked === true) {
                    console.log('yoda first pick, darth vader second pick')
                    $(".attack").on("click", function() {
                      darth.health -= yoda.attack
                      yoda.health -= darth.counterattack
                      console.log('darth health',darth.health)
                        if (yoda.health > 0 && darth.health > 0) {
                            $("#darthhealth").text("Health :" + darth.health)
                            $("#yodahealth").text("Health :" + yoda.health)
                            console.log('darth.health is > 0')
                        } else if (yoda.health < 0) {
                          $("#arena3").toggle(false)
                          document.getElementsByClassName("attack").disabled = true;
                          alert("you lose!! Start again with a new character!")
                          yoda.health  = 120
                          losses++
                          $("#losses").text("Losses :" + losses)
                          defaultGame();
                        } else if(darth.health < 0) {
                          $("#arena3").toggle(false)
                          document.getElementsByClassName("attack").disabled = true;
                          alert("you beat darth vader")
                          darthdead = true
                          darthpicked = false
                          console.log('empirecharsdead',bobadead,darthdead,emperordead)
                          darth.health = 5000000
                          $(".firstpick").css("border", "");
                          $(".secondpick").css("border", "");
                          $(".third-arena").css("border", "solid 5px #ffc107");
                          $(".fourth-remaining").css("border", "solid 5px #ffc107");
                          if (emperordead === true && bobadead === true && darthdead === true) {
                            wins++
                            $("#wins").text("Wins :" + wins)
                            defaultGame();
                          }
                          pickempiresecond();
                        }
                     })
              } else if (yodapicked === true && bobapicked === true) {
                    console.log('yoda first pick, boba fett second pick')
                    $(".attack").on("click", function() {
                      boba.health -= yoda.attack
                      yoda.health -= boba.counterattack
                      console.log('boba health', boba.health)
                        if (yoda.health > 0 && boba.health > 0) {
                            $("#bobahealth").text("Health :" + boba.health)
                            $("#yodahealth").text("Health :" + yoda.health)
                            console.log('boba.health is > 0')
                        } else if (yoda.health < 0) {
                          $("#arena2").toggle(false)
                          document.getElementsByClassName("attack").disabled = true;
                          alert("you lose!! Start again with a new character!")
                          yoda.health  = 120
                          losses++
                          $("#losses").text("Losses :" + losses)
                          defaultGame();
                        } else if(boba.health < 0) {
                          $("#arena2").toggle(false)
                          document.getElementsByClassName("attack").disabled = true;
                          alert("you beat boba fett")
                          bobadead = true
                          bobapicked = false
                          console.log('empirecharsdead',bobadead,darthdead,emperordead)
                          boba.health = 500000
                          console.log(boba.health)
                          console.log(bobapicked)
                          $(".firstpick").css("border", "");
                          $(".secondpick").css("border", "");
                          $(".third-arena").css("border", "solid 5px #ffc107");
                          $(".fourth-remaining").css("border", "solid 5px #ffc107");
                          if (emperordead === true && bobadead === true && darthdead === true) {
                            wins++
                            $("#wins").text("Wins :" + wins)
                            defaultGame();
                          }
                          pickempiresecond();
                        }
                    });
                  }

/*


    }if (hanfirstpick === true && darthsecondpick === true ) {
            console.log('han first pick, darth second pick')
            $(".attack").on("click", function() {
              darth.health -= han.attack
              han.health -= darth.counterattack
              console.log(darth.health)
                if (han.health > 0 && darth.health > 0) {
                    $("#darthhealth").text("Health :" + darth.health)
                    $("#hanhealth").text("Health :" + han.health)
                    console.log('darth.health is > 0')
                } else if (han.health < 0) {
                  alert("you lose!! Start again with a new character!")
                  losses++
                  $("#losses").text("Losses :" + losses)
                  defaultGame()
                } else if(darth.health < 0) {
                  alert("you beat darth vader")
                  wins++
                  $("#wins").text("Wins :" + wins)
                  /*
                    if (bobacounter === true && darthcounter === true && empcounter === true){
                      alert("you beat all opponents! Start again with a new character!")
                    }
                    */
                  }
                }
              }

initiateGame();
});
