const quizData = [
    {
        question: "Orange Cap Holder of IPL 2020?",
        a: "KL Rahul",
        b: "David Warner",
        c: "Shreyas Iyer",
        d: "Shikhar Dhawan",
        correct: "a",
    },
    {
        question: "Who made the first IPL century ?",
        a: "Chris Gayle",
        b: "Virat Kolhi",
        c: "Brendon McCullum",
        d: "AB D Villiers",
        correct: "c",
    },
    {
        question: "Which team won ipl 2023?",
        a: "CSK",
        b: "MI",
        c: "GT",
        d: "LSG",
        correct: "a",
    },
    {
        question: "Who won orange cap in ipl 2023",
        a: "Virat kohli",
        b: "Faf du plessis",
        c: "Shubman Gill",
        d: "Devon COnvay",
        correct: "c",
    },
    {
        question: "When did IPL began?",
        a: "2009",
        b: "2008",
        c: "2007",
        d: "2006",
        correct: "b",
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    

    return answer;
}


submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    deselectAnswers();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});




