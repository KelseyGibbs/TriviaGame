var counter = 0;
var correct = 0;
var incorrect = 0;

var questions = [{
  question: "1. The first cookbook to mention a donut was published in what year?",
  options: ["1601", "1702", "1803", "1904"],
  correct: "1803"
},
{
  question: "2. Below are the top four cities with the most donut shops per person. Which city has the most donut shops per person?",
  options: ["Long Beach, CA", "Dallas, TX", "Boston, MA", "Sacremento, CA"],
  correct: "Boston, MA"
},
{
  question: "3. Researchers have noted that the size of a donut hole correlates with the quality of the local economy. Specifically, the worse the economy the _________ the donut hole.",
  options: ["More Unstable", "Bigger", "Smaller", "Worse"],
  correct: "Bigger"
},
{
  question: "4. National donut day was established to celebrate the Salvation Army donut bakers who made donuts for the soldiers during World War I. When is this glorious day?",
  options: ["July 4th", "May 12th", "December 25th", "June 5th"],
  correct: "June 5th"
},
{
  question: "5. In 1933 donuts were given what title at the Chicago World's Fair?",
  options: ["Super Amazing Fried Delicious-ness", "Best Food for Progress", "Hit Food of the Century of Progress", "Sugar High of the Century"],
  correct: "Hit Food of the Century of Progress"
}
];

function timer() {
  var sec = 60;
  var timer = setInterval(function () {
    document.getElementById("TimerDisplay").innerHTML = sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

$(document).ready(function () {
  $("#timer").hide();

  
  function appendQuestion() {
  if(counter <= 4) {
      $("#quiz").html("<p>" + 
      questions[counter].question + 
      "</p><button class='options'>" + 
      questions[counter].options[0] + "</button><button class='options'>" + 
      questions[counter].options[1] + "</button><button class='options'>" + 
      questions[counter].options[2] + "</button><button class='options'>" + 
      questions[counter].options[3] + 
      "</button>");
      $("#start").hide();
    } else{
      $("#quiz").html("You got " + correct + " of the questions right!")
      $("#timer").hide();
    }
  }
  
  $("#quiz").on("click", ".options", (function () {
    var userGuess=$(this).text();
    if (userGuess === questions[counter].correct){
      counter++;
      mainGame();
    } else {
      counter++;
      mainGame();
    }
  }));
  
  $("#start").click(startGame);
  
  function startGame(){
    $("#timer").show();
    $("#directions").hide();
    timer();
    appendQuestion();
  }

  function mainGame() {
    appendQuestion();
  }


  console.log(questions);
});