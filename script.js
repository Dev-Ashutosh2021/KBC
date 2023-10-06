var count=0;
empty = "";
var selectedOption;
money=0;
const questions = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "Who wrote the play 'Romeo and Juliet'?",
    "What is the largest mammal in the world?",
    "Which gas is most abundant in Earth's atmosphere?"
];

const options = [
    ["London", "Paris", "Berlin", "Madrid"],
    ["Earth", "Mars", "Venus", "Jupiter"],
    ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]
];

const correctAnswers = [
    "Paris",
    "Mars",
    "William Shakespeare",
    "Blue Whale",
    "Nitrogen"
];

function loadQuestion() {
    document.getElementById("ques").innerText = (count + 1) + ". " + questions[count];
    for (i = 0; i < 4; i++) {
        empty += ` <input type="radio" name="option" value="${options[count][i]}" id="option${i + 1}" onclick="getValue()"><label for="option${i + 1}"> ${options[count][i]}</label><br>`;
    }
    document.getElementById("option").innerHTML = empty;
    empty = "";
    count++;
}

function getValue() {
    var radioButtons = document.getElementsByName("option");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedOption = radioButtons[i].value
            console.log(selectedOption,1);
            // var selectedValue = radioButtons[i].value;
            // alert("Selected option: " + selectedValue);
            // checked = true;
        }
    }
}


function checkAnswer() {
    // console.log(selectedOption,2);
    // console.log(correctAnswers[count-1],3);
    if(count<correctAnswers.length)
    {
        if (selectedOption == null) {
            alert("Please select an option before submitting.");
          } else {
              if ((correctAnswers[count-1] == selectedOption)) {
                  money+=1000;
                //   console.log(count);
                  document.getElementById("money").innerText = money;
                  loadQuestion();
              }
              else
              {
                  alert("Afsos galat jawab aap jeete h ₹ " + money);
                  window.location.href = 'index.html';
                  money=0;
              }
          }
    }
    else
    {
        money=money*2;
        document.getElementById("money").innerText = money;
        alert("Congratulations! You've completed the game and won ₹ " + money);
        setTimeout(function() {
            window.location.href = 'index.html';
          }, 1000);
    } 
    selectedOption=null;
  }