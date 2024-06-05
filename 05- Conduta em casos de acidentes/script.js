const flashcards = [
    {
        question: "O que é considerado um acidente de trabalho?",
        answer: "É uma ocorrência não programada que causa danos físicos, funcionais, materiais ou econômicos ao trabalhador ou empresa"
    },
    {
        question: "Quais são as primeiras ações ao prestar socorro a uma vítima de choque elétrico?",
        answer: "Cortar a corrente elétrica, Afastar a vítima do fio e Iniciar RCP se necessário"
    },
    {
        question: "Quais são os passos para tratar queimaduras?",
        answer: "Retirar a roupa, Lavar a área queimada, Hidratar a vítima, Cobrir a queimadura e Encaminhar ao médico"
    },
    {
        question: "Como deve-se proceder em caso de ferimentos nos olhos?",
        answer: "Pedir para fechar os olhos para que as lágrimas retirem o corpo estranho, Lavar com água corrente se houver poeira ou produto químico, cobrir com gaze sem comprimir e encaminhar ao médico"
    },
    {
        question: "Qual é o procedimento correto em caso de fraturas?",
        answer: "Estancar hemorragia, Imobilizar a fratura, Evitar mover a vítima e Encaminhar ao médico."
    },
    {
        question: "Quais providências administrativas devem ser tomadas após um acidente com um militar?",
        answer: "Relatar o acidente em até 48 horas através da Parte de acidentes."
    },
    {
        question: "O que deve ser feito em caso de corte profundo?",
        answer: "Estancar a hemorragia, Aplicar torniquete em casos extremos e Encaminhar ao médico."
    },
    {
        question: "Quais são os tipos de riscos ocupacionais?",
        answer: "Riscos físicos, químicos, biológicos, ergonômicos e acidentais"
    },
    {
        question: "Quais são as providências administrativas para acidentes com servidores civis?",
        answer: "Processo semelhante ao militar, mas com inclusão da Ficha de Comunicação de Acidente de Trabalho (FCAT)."
    },
];
// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
}

// Embaralha o array de flashcards
shuffleArray(flashcards);
const flashcardsContainer = document.getElementById('flashcards');
const questionElement = document.getElementById('question-text');
const answerElement = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');
const previousButton = document.getElementById('previous');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;

const loadQuestion = () => {
    questionElement.innerHTML = flashcards[currentQuestionIndex].question;
    answerElement.value = '';
    feedbackElement.innerHTML = '';
    updateButtons();
};

const updateButtons = () => {
    previousButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = true;
};

const checkAnswer = () => {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
    const normalizedUserAnswer = removeAccents(userAnswer);
    const normalizedCorrectAnswer = removeAccents(correctAnswer);

    // Comparação aproximada das strings usando o algoritmo de Levenshtein
    const similarityThreshold = 0.8; // Limiar de similaridade (ajuste conforme necessário)
    const similarity = calculateSimilarity(normalizedUserAnswer, normalizedCorrectAnswer);
    
    if (similarity >= similarityThreshold) {
        feedbackElement.textContent = "Excelente! Você Acertou! Clique em Próxima";
        nextButton.disabled = false;
    } else {
        feedbackElement.textContent = "Tente novamente.";
    }
};

// Função para remover acentos
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Função para calcular a similaridade entre duas strings usando o algoritmo de Levenshtein
const calculateSimilarity = (str1, str2) => {
    const maxLength = Math.max(str1.length, str2.length);
    const distance = levenshteinDistance(str1, str2);
    return 1 - distance / maxLength;
};

// Função para calcular a distância de Levenshtein entre duas strings
const levenshteinDistance = (str1, str2) => {
    const matrix = [];

    // Inicialização da matriz
    for (let i = 0; i <= str1.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str2.length; j++) {
        matrix[0][j] = j;
    }

    // Preenchimento da matriz
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, // Deleção
                matrix[i][j - 1] + 1, // Inserção
                matrix[i - 1][j - 1] + cost // Substituição
            );
        }
    }

    return matrix[str1.length][str2.length];
};

submitButton.addEventListener('click', checkAnswer);

previousButton.addEventListener('click', () => {
    currentQuestionIndex--;
    loadQuestion();
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

loadQuestion();
