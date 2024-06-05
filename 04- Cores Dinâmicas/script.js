const flashcards = [
    {
        question: "Quais são os principais objetivos do uso das Cores Dinâmicas no ambiente de trabalho?",
        answer: "Diminuir os acidentes, Aperfeiçoar o funcionamento,  Manter a boa produção e Aumentar a frequência ao trabalho"
    },
    {
        question: "Como as cores dinâmicas podem ajudar a manter a boa produção no ambiente de trabalho?",
        answer: "Promovendo tranquilidade e reduzindo o cansaço."
    },
    {
        question: "Qual norma da ABNT regulamenta o uso de cores para a segurança no ambiente de trabalho?",
        answer: "NBR 7195"
    },
    {
        question: "Qual é a cor utilizada para identificar equipamentos de proteção e combate a incêndio?",
        answer: "Vermelho"
    },
    {
        question: "O que a cor Laranja indica? Cite 1 exemplo de utilização",
        answer: "Indica perigo. É usada para indicar Partes móveis e perigosas de máquinas e equipamentos"
    },
    {
        question: "O que a cor Amarela indica? Cite 1 exemplo de utilização",
        answer: "Indica Cuidado. É utilizada em Corrimãos, parapeitos ou diferenças de nível"
    },
    {
        question: "Para que serve a cor verde no contexto das cores dinâmicas?",
        answer: "Caracterizar segurança, como em equipamentos de primeiros socorros"
    },
    {
        question: "O que a cor azul indica em ambientes de trabalho?",
        answer: "Ação obrigatória, como o uso de EPI"
    },
    {
        question: "Qual é a cor empregada para sinalizar riscos de radiação eletromagnética e partículas nucleares?",
        answer: "Púrpura"
    },
    {
        question: "Onde é aplicada a cor branca segundo as normas de segurança?",
        answer: "Na demarcação de passadiços, passarelas e corredores"
    },
    {
        question: "Onde é aplicada a cor Preto segundo as normas de segurança?",
        answer: "Em coletores de resíduos, exceto os de origem de serviços de saúde"
    },
    {
        question: "Qual é a finalidade da NBR 6493?",
        answer: "Emprego de cores para identificação de tubulações"
    },
    {
        question: "Para que é utilizada a cor preta nas normas de identificação de tubulações?",
        answer: "Para indicar combústiveis de alta viscosidade"
    },
    {
        question: "O que a cor amarela indica em tubulações?",
        answer: "Gases Não Liquefeitos"
    },
    {
        question: "Qual é a cor usada para identificar ar comprimido em tubulações?",
        answer: "Azul"
    },
    {
        question: "Qual é a cor empregada para sinalizar produtos químicos não gasosos?",
        answer: "Laranja"
    },
];

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