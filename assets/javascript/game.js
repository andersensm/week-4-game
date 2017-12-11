$(document).ready(function() {
  var pickfirstchar= true;
  var picksecondchar= false;
  var wins = 0
  var losses = 0
  var emperordead= false
  var darthdead = false
  var bobadead = false


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

  var bobasecondpick = false
  var darthsecondpick = false
  var empsecondpick = false

  var hansolo = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon han'>").append($("<div class='card-header rebelcharactericon'>Han Solo</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + han.health + "</p>").append($("<div class='card-body iconfix2'>").append($(han.img)))))));


  var obiwan = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon obi'>").append($("<div class='card-header rebelcharactericon'>Obi-Wan</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + obi.health + "</p>").append($("<div class='card-body iconfix2'>").append($(obi.img)))))));

  var yodah = ($("<div class='card text-white bg-primary mb-3 iconfix3 rebelicon yoda'>").append($("<div class='card-header rebelcharactericon'>Yoda</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + yoda.health + "</p>").append($("<div class='card-body iconfix2'>").append($(yoda.img)))))));

  var bobafett = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon boba'>").append($("<div class='card-header empirecharactericon'>Boba Fett</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health: " + boba.health + "</p>").append($("<div class='card-body iconfix2'>").append($(boba.img)))))));

  var darthvader = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon darth'>").append($("<div class='card-header empirecharactericon'>Darth Vader</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + darth.health + "</p>").append($("<div class='card-body iconfix2'>").append($(darth.img)))))));

  var emperor = ($("<div class='card text-white bg-danger mb-3 iconfix3 empireicon emp'>").append($("<div class='card-header empirecharactericon'>Emperor</div>").append($("<div class='card-body iconfix2'>").append($("<p class='card-text'>Health:" + emp.health + "</p>").append($("<div class='card-body iconfix2'>").append($(emp.img)))))));


  function defaultGame() {
    window.location.reload(true);
    initiateGame();


  }


function initiateGame() {

      if (pickfirstchar === true && picksecondchar === false) {
          $(".firstpick").css("border", "solid 5px #ffc107");

          /*
          $(".gamesettings").text("PICK YOUR CHARACTER TO FIGHT IN THE ARENA");  //Make this blink so the person sees it more clearly
          */
          $(".han").on("click", function() {
              $("#arena1").append($(".han"))
              $("#rebels").remove()
              pickfirstchar = false
              picksecondchar = true
              hanfirstpick = true
              console.log('if han first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".obi").on("click", function() {
              $("#arena1").append($(".obi"))
              $("#rebels").remove()
              pickfirstchar = false
              picksecondchar = true
              obifirstpick = true
              console.log('if obi first picked, second pick should be true',picksecondchar)
              pickempiresecond()
          });
          $(".yoda").on("click", function() {
              $("#arena1").append($(".yoda"))
              $("#rebels").remove()
              pickfirstchar = false
              picksecondchar = true
              yodafirstpick = true
              console.log('if yoda first picked, second pick should be true',picksecondchar)
              pickempiresecond()
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
          picksecondchar = false
          pickfirstchar = false
          bobasecondpick = true
          arenafight()
      });
      $(".darth").on("click", function() {
          $("#arena2").append($(".darth"))
          picksecondchar = false
          pickfirstchar = false
          darthsecondpick = true
          arenafight()
      });
      $(".emp").on("click", function() {
          $("#arena2").append($(".emp"))
          picksecondchar = false
          pickfirstchar = false
          empsecondpick = true
          arenafight()
      });
    }
  }


function arenafight() {

    pickfirstchar = false
    picksecondchar = false

    if (pickfirstchar === false && picksecondchar === false) {
      $(".firstpick").css("border", "");
      $(".secondpick").css("border", "");
      $(".third-arena").css("border", "solid 5px #ffc107");

      console.log('arenafighttest')

//YODA VS THREE//////////////////////////

          if (yodafirstpick === true && empsecondpick === true ) {
                  console.log('yoda first pick, emperor second pick')
                  $(".emp").on("click", function() {
                    $("#arena2").append($(".emp"))
                    console.log('second champ test working?')
                  });//NOTWORKING-----------------------------------------------------
                  $(".attack").on("click", function() {
                    emp.health -= yoda.attack*4//For fast testing purposes
                    yoda.health -= emp.counterattack
                    console.log(emp.health)
                      if (yoda.health > 0 && emp.health > 0) {
                          $("#emphealth").text("Health :" + emp.health)
                          $("#yodahealth").text("Health :" + yoda.health)
                          console.log('emp.health is > 0')
                      } else if (yoda.health < 0) {
                        alert("you lose!! Start again with a new character!")
                        losses++
                        $("#losses").text("Losses :" + losses)
                      } else if(emp.health < 0) {
                        alert("you beat emperor palpatine")
                        $("#arena2").remove()
                        emperordead = true
                        empsecondpick = false
                        console.log('empirecharsdead',bobadead,darthdead,emperordead)
                        if (emperordead === true && bobadead === true && darthdead === true) {
                          wins++
                          $("#wins").text("Wins :" + wins)
                        }
                        arenafight()
                      }
                    });
            } else if (yodafirstpick === true && darthsecondpick === true) {
                    console.log('yoda first pick, darth vader second pick')
                    $(".darth").on("click", function() {
                      $("#arena2").append($(".darth"))
                      console.log('second champ test working?')
                    });//NOTWORKING-----------------------------------------------------
                    $(".attack").on("click", function() {
                      darth.health -= yoda.attack*4//For fast testing purposes
                      yoda.health -= darth.counterattack
                      console.log(darth.health)
                        if (yoda.health > 0 && darth.health > 0) {
                            $("#darthhealth").text("Health :" + darth.health)
                            $("#yodahealth").text("Health :" + yoda.health)
                            console.log('darth.health is > 0')
                        } else if (yoda.health < 0) {
                          alert("you lose!! Start again with a new character!")
                          losses++
                          $("#losses").text("Losses :" + losses)
                        } else if(darth.health < 0) {
                          alert("you beat darth vader")
                          $("#arena2").remove()
                          darthdead = true
                          darthsecondpick = false
                          console.log('empirecharsdead',bobadead,darthdead,emperordead)
                          if (emperordead === true && bobadead === true && darthdead === true) {
                            wins++
                            $("#wins").text("Wins :" + wins)
                          }
                            arenafight()
                        }
                     })
              } else if (yodafirstpick === true && bobasecondpick === true) {
                    console.log('yoda first pick, boba fett second pick')
                    $(".boba").on("click", function() {
                      $("#arena2").append($(".darth"))
                      console.log('second champ test working?')
                    });//NOTWORKING-----------------------------------------------------
                    $(".attack").on("click", function() {
                      boba.health -= yoda.attack*4//For fast testing purposes
                      yoda.health -= boba.counterattack
                      console.log(boba.health)
                        if (yoda.health > 0 && boba.health > 0) {
                            $("#bobahealth").text("Health :" + boba.health)
                            $("#yodahealth").text("Health :" + yoda.health)
                            console.log('darth.health is > 0')
                        } else if (yoda.health < 0) {
                          alert("you lose!! Start again with a new character!")
                          losses++
                          $("#losses").text("Losses :" + losses)
                        } else if(boba.health < 0) {
                          alert("you beat boba fett")
                          $("#arena2").remove()
                          bobadead = true
                          bobasecondpick = false
                          console.log('empirecharsdead',bobadead,darthdead,emperordead)
                          if (emperordead === true && bobadead === true && darthdead === true) {
                            wins++
                            $("#wins").text("Wins :" + wins)
                          }
                          arenafight()
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

initiateGame();
});
