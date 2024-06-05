const flashcards = [
    {
        question:"Onde é mais comumente aplicada a soldagem por arco elétrico?",
        answer: "na construção civil, construção naval e na fabricação de grandes estruturas metálicas",
      },
    {
        question: "Para que tipo de peças é ideal a soldagem oxiacetilênica?",
        answer: "Ideal para a união de peças de metal de espessura variada, como tubos e chapas finas"
    },
    {
        question: "Quais indústrias utilizam largamente a soldagem MIG/MAG?",
        answer: "Indústrias automotiva e aeroespacial"
    },
    {
        question: "Em que situações é preferível a soldagem TIG?",
        answer: "E soldagens de alta qualidade e precisão, especialmente em alumínio e aços inoxidáveis."
    },
    {
        question: "Quais são as principais aplicações da soldagem por forjamento?",
        answer: "Utilizada na fabricação de peças de grande porte e alta resistência, como eixos e rodas ferroviárias"
    },
    {
        question: "Para que tipo de componentes é usada a solda fraca?",
        answer: "componentes eletrônicos onde as temperaturas não podem exceder 450ºC"
    },
    {
        question: "Para que tipo de soldagem é usada a solda forte?",
        answer: "Usada em peças que requerem grande resistência e sofrem impactos, como estruturas metálicas pesadas"
    },
    {
        question: "Quais são as aplicações típicas da soldagem de resistência elétrica?",
        answer: "Em peças pequenas, como componentes automotivos e eletrodomésticos"
    },
    {
        question: "O que é soldagem?",
        answer: "Processo de junção de duas ou mais partes, geralmente de metal"
    },
    {
        question: "O que é Soldagem por fusão?",
        answer: "é um processo de união de metais através do calor, onde ambos os metais se fundem"
    },
    {
        question: "Quais são os principais processos de soldagem por fusão?",
        answer: "Soldagem por arco elétrico, a gás e por feixe de alta energia."
    },
    {
        question: "Quais são os principais processos de Soldagem por pressão",
        answer: "Soldagem por Ultrassom, Difusão e Soldagem por Forjamento"
    },
    {
        question: "<img src='../imagens/componentes de soldagem.png' alt='componentes de soldagem'><br><br>Qual os nomes dos equipamentos da solda oxiacetileno em ordem crescente?",
        answer: "cilindro oxigênio, cilindro acetileno, manômetro de pressão, reguladores de pressão, válvula corta-chama, mangueira de gases, canetas de solda/corte, capacetes de proteção dos registros de gases"
    },
    {
        question: "Qual é a principal diferença entre soldagem por fusão e soldagem por pressão?",
        answer: "Soldagem por fusão envolve a fusão dos metais, enquanto soldagem por pressão envolve a união das peças na fase sólida"
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