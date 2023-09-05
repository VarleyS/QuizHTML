const questions = [
    {
        question: "Qual é a função principal das raízes de uma planta?",
        options: ["A) Armazenar água", "B) Absorver nutrientes", "C) Realizar a fotossíntese"],
        answer: "B"
    },
    {
        question: "Qual é o nome da estrutura que permite a troca de gases entre as plantas e a atmosfera?",
        options: ["A) Cutícula", "B) Clorofila", "C) Estômatos"],
        answer: "C"
    },
    {
        question: "Qual é a função das células da epiderme das folhas das plantas?",
        options: ["A) Proteger a planta de insetos", "B) Controlar a abertura dos estômatos", "C) Realizar a fotossíntese"],
        answer: "B"
    },
    {
        question: "Em que parte da planta ocorre a fotossíntese?",
        options: ["A) Raízes", "B) Folhas", "C) Caule"],
        answer: "B"
    },
    {
        question: "Qual é o nome da substância responsável pela coloração das plantas?",
        options: ["A) Celulose", "B) Clorofila", "C) Caroteno"],
        answer: "B"
    },
    {
        question: "Como as plantas carnívoras obtêm nutrientes adicionais?",
        options: ["A) Capturando e digerindo insetos", "B) Por meio da fotossíntese", "C) Absorvendo nutrientes do solo"],
        answer: "A"
    },
    {
        question: "Qual é o processo pelo qual as plantas produzem açúcares a partir da luz solar?",
        options: ["A) Transpiração", "B) Respiração celular", "C) Fotossíntese"],
        answer: "C"
    },
    {
        question: "Qual é o nome da parte da planta responsável pela reprodução sexual?",
        options: ["A) Caule", "B) Flor", "C) Raiz"],
        answer: "B"
    },
    {
        question: "O que é a polinização cruzada?",
        options: ["A) Quando uma planta se autofecunda", "B) Quando o pólen de uma planta fertiliza a mesma planta", "C) Quando o pólen de uma planta fertiliza outra planta da mesma espécie"],
        answer: "C"
    },
    {
        question: "Qual é a função das sementes em uma planta?",
        options: ["A) Realizar a fotossíntese", "B) Armazenar água", "C) Garantir a reprodução e disseminação da planta"],
        answer: "C"
    },
];

const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.querySelector('.result-container');
const submitButton = document.querySelector('#submit-button');
const scoreElement = document.querySelector('#score');
const questionElement = document.querySelector('.question');
const optionsList = document.querySelector('.options');

let score = 0;
let currentQuestion = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        const currentQ = questions[currentQuestion];
        questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQ.question}`;
        optionsList.innerHTML = "";

        currentQ.options.forEach((option, index) => {
            const li = document.createElement("li");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer";
            radio.value = String.fromCharCode(65 + index); // Converte 0 para "A", 1 para "B", etc.
            li.appendChild(radio);
            li.appendChild(document.createTextNode(option));
            optionsList.appendChild(li);
            updateProgressBar();
        });
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name=answer]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        selectedOption.checked = false;
        showQuestion();
    }
}

function updateProgressBar(){
    const progress = (currentQuestion / questions.length) * 100;
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${progress}%`;
}

submitButton.addEventListener('click', checkAnswer);
showQuestion();
updateProgressBar();