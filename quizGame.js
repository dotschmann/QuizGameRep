const quizInfo = [
    {
        ques: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Mars"],
        Answer: 1
    },
    {
        ques: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        Answer: 2
    },
    {
        ques: "What is the capital city of Japan?",
        choices: ["Kyoto", "Osaka", "Nagoya", "Tokyo"],
        Answer: 3
    }
];

let currentIndx = 0;

function displayQuizInfo(indx) {
    const quizContainer = document.getElementById("displayInfo");
    let quizContnt = `
       <div class = "question">${indx + 1}. ${quizInfo[indx].ques}</div>
    `;
    quizContainer.innerHTML = quizContnt;
}

window.addEventListener('load', () => {
    displayQuizInfo(currentIndx);
});