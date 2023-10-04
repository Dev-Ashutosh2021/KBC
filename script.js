count = 0;
empty = "";
selectedOption = "";
money = 0;
checked=false;
correct=true;
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

function getData() {
    checked=false;
    console.log(selectedOption, 1)
    console.log(correctAnswers[count], 2)
    if (selectedOption == correctAnswers[count-1]) {
        console.log("correct answer")
        money += 1000;
        correct=false;
        document.getElementById("money").innerText = money;
    }

    console.log(count);
    if (count == questions.length) {
        count=0;
        alert("Game Ended, You won "+money+" Rupees!");
        window.location.href = 'index.html';
        return;
    }
    document.getElementById("ques").innerText = (count + 1) + ". " + questions[count];
    for (i = 0; i < 4; i++) {
        empty += ` <input type="radio" name="option" value="${options[count][i]}" id="option${i + 1}" onclick="getAnswer()"><label for="option${i + 1}"> ${options[count][i]}</label><br>`;
    }
    document.getElementById("option").innerHTML = empty;
    empty = "";
    count++;
}


function getAnswer() {
    var radioButtons = document.getElementsByName("option");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedOption = radioButtons[i].value
            console.log(selectedOption);
            // var selectedValue = radioButtons[i].value;
            // alert("Selected option: " + selectedValue);
            checked=true;
        }
    }
}

function validate()
{
    if(checked==true)
    {
        if(correct==false)
    {
        alert('Afsos galat jawab aap jeete h '+money+' rupees');
        window.location.href = 'index.html';
        return
    }
        getData();
    }
    else
    {
        alert("No option is selected, please select any option");
    }

}