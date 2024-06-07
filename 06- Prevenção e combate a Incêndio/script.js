const flashcards = [
    {
        question: "Quais são os componentes necessários para a formação do fogo?",
        answer: "Combustível,Comburente, Calor e Reação em cadeia"
    },
    {
        question: "Como se extingue o fogo segundo a teoria da extinção?",
        answer: "Retirando-se um dos elementos ou impedindo a reação química"
    },
    {
        question: "O que caracteriza um incêndio de Classe A?",
        answer: "Incêndio em materiais sólidos que deixam resíduos"
    },
    {
        question: "Quais são as características de um incêndio de Classe B?",
        answer: "Incêndio em líquidos, pastosos e gases inflamáveis, que não deixam resíduos"
    },
    {
        question: "O que caracteriza um incêndio de Classe D e como deve ser combatido?",
        answer: "Incêndio em metais pirofóricos. É combatido com extintor de Pó Químico (NaCl)"
    },
    {
        question: "Qual agente extintor deve ser usado em incêndios de Classe K?",
        answer: "Acetato de Potássio (CH3COOK)"
    },
    {
        question: "Que tipo de agente extintor é recomendado para incêndios em aparelhos elétricos energizados?",
        answer: "CO2 (Dióxido de Carbono) ou Pó Químico (Bicarbonato de Sódio)"
    },
    {
        question: "Quais são os dois tipos de prevenção contra incêndios?",
        answer: "Prevenção Construtural e Prevenção Operacional"
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
