const quizInfo = [
    {
        ques: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: 1
    },
    {
        ques: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: 2
    },
    {
        ques: "What is the capital city of Japan?",
        choices: ["Kyoto", "Osaka", "Nagoya", "Tokyo"],
        answer: 3
    }
];

let currentIndx = 0;
let choiceSelected = new Array(quizInfo.length).fill(null);

function displayQuizInfo(indx) {
    const quizContainer = document.getElementById("displayInfo");
    let quizContnt = `
       <div class = "question">${indx + 1}. ${quizInfo[indx].ques}</div>
        <ul class = "options">
            ${quizInfo[indx].choices.map((optn, m) => `                 
                <li>
                    <label>
                        <input type = "radio" name = "ques${indx}" value = "${m}" 
                        ${choiceSelected[indx] === m ? 'checked' : ' '}>
                        ${optn}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;
    quizContainer.innerHTML = quizContnt;
    updateButtons();

    const radioBtns = quizContainer.querySelectorAll(`input[name="ques${indx}"]`);
    radioBtns.forEach(radio => {
        radio.addEventListener('change', (e) => {
            choiceSelected[indx] = parseInt(e.target.value);
        });
    });
}

function updateButtons() {
    document.getElementById("backBtn").disabled = currentIndx === 0;
    if (currentIndx === quizInfo.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("resultBtn").style.display = "inline-block";
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("resultBtn").style.display = "none";
        document.getElementById("score").style.display = "none";
    }

}

function nextInfo() {
    if (currentIndx < quizInfo.length -1) {
        currentIndx++;
        displayQuizInfo(currentIndx);
    }
}

function previousInfo() {
    if (currentIndx > 0) {
        currentIndx--;
        displayQuizInfo(currentIndx);
    }
}

function submitQuiz() {
    let score = 0;

    quizInfo.forEach((question, m) => {
        if(choiceSelected[m] === question.answer) {
            score++;
        }
    });

    document.getElementById("restartBtn").style.display = "inline-block";
    document.getElementById('score').innerText = `You score ${score} out of ${quizInfo.length}`;
    document.getElementById("resultBtn").style.display = "none";
    document.getElementById("score").style.display = "inline-block";
    document.getElementById("backBtn").style.display = "none";
}

function restartBtn() {
    choiceSelected = new Array(quizInfo.length).fill(null)
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("info-container1").style.display = "none";
    document.getElementById("intro1").style.display = "block";

}

function playNow() { 
    document.getElementById("startContainer").style.display = "block";
    document.getElementById("intro1").style.display = "none";
}


document.getElementById("playNow").addEventListener('click', playNow);
document.getElementById("backBtn").addEventListener('click', previousInfo);
document.getElementById("nextBtn").addEventListener('click', nextInfo);
document.getElementById("restartBtn").addEventListener('click', restartBtn);
document.getElementById("resultBtn").addEventListener('click', submitQuiz);

document.getElementById("startBtn").addEventListener('click', () =>{
    currentIndx = 0;
    document.getElementById("intro1").style.display = "none";
    document.getElementById("startContainer").style.display = "none";
    displayQuizInfo(currentIndx);
    document.getElementById("info-container1").style.display = "inline-block";
    document.getElementById("backBtn").style.display = "inline-block";
});

document.getElementById("endBtn").addEventListener('click', () => {
    document.getElementById("intro1").style.display = "block";
    document.getElementById("startContainer").style.display = "none";
});
