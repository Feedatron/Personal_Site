let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let hasStarted = false;

$("body").keypress(function (){
    if (!hasStarted)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        hasStarted = true;
    }
})

$(".btn").click(function (){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level " + level);
    
    
    let randomNum = Math.random() * 3;
    randomNum = Math.round(randomNum);
    let randomChosenColour = buttonColors[randomNum];

    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
     $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
}

function playSound(name) {
    let sound = new Audio("sounds/" + name + ".mp3")
    sound.play();
}
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    $("#" + currentColor).delay(100).queue(function(){
        $(this).removeClass("pressed").dequeue();
    })
}



function startOver()
{
    level = 0;
    gamePattern = [];
    hasStarted = false;
}


