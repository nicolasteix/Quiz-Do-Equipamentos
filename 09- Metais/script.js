const flashcards = [
    {
        question:
          "O que caracteriza uma liga metálica ferrosa?",
        answer: "Apresenta o ferro como principal constituinte",
      },
    {
        question: "Quais são os principais elementos do aço?",
        answer: "Ferro e carbono"
    },
    {
        question: "Em que é utilizado o aluminio?",
        answer: "bombas hidráulicas, engrenagens, buchas"
    },
    {
        question: "Qual a composição do latão?",
        answer: "cobre e zinco"
    },
    {
        question: "Quais são as principais aplicações do latão?",
        answer: "Produção de armas, munições e parafusos"
    },
    {
        question: "Quais são os usos comuns do ferro fundido em viaturas e equipamentos?",
        answer: "Blocos de motor, coletor de descarga, mancais e tampas"
    },
    {
        question: "O que diferencia uma liga metálica não-ferrosa de uma ferrosa?",
        answer: "elas não contêm ferro como principal componente e são mais resistentes à corrosão"
    },
    {
        question: "O que é tratamento térmico?",
        answer: "Conjunto de operações de aquecimento e resfriamento sob condições controladas de temperatura, tempo, atmosfera e velocidade de esfriamento"
    },
    {
        question: "Qual a diferença entre tratamento térmico calórico e termoquímico?",
        answer: "o termoquímico inclui a adição de elementos químicos na superfície do metal"
    },
    {
        question: "O que é têmpera e qual seu objetivo?",
        answer: "Processo de aquecimento seguido de resfriamento brusco"
    },
    {
        question: "Qual o objetivo do revenimento após a têmpera?",
        answer: "Reduzir tensões internas, ajustar a dureza e obter valores adequados de resistência mecânica"
    },
    {
        question: "Qual é o processo de recozimento e seu objetivo?",
        answer: "é o aquecimento seguido de resfriamento lento, para melhorar a ductilidade e aliviar tensões internas"
    },
    {
        question: "O que é nitretação?",
        answer: "Introdução de nitrogênio na superfície do aço"
    },
    {
        question: "o que é o processo de carbonitretação?",
        answer: "Introdução de carbono e nitrogênio na superfície do aço"
    },
    {
        question: "Cite 3 aplicações práticas para a liga metálica ferrosa?",
        answer: "Chassis, implementos de equipamentos e fabricações de ferramentas"
    },
    {
        question: "Cite 3 aplicações práticas para a liga metálica não ferrosa?",
        answer: "Bomba hidráulica, munições e buchas"
    },
    {
        question: "Conceitue Tratamento Térmico?",
        answer: "é o conjunto de operações de aquecimento e resfriamento a que são submetidos os materiais metálicos, sob condições controladas de temperatura, tempo, atmosfera e velocidade de esfriamento."
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
