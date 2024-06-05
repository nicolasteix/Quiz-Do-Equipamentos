const flashcards = [
    {
        question: "Quais são os principais objetivos de segurança nas oficinas das OM de Eng?",
        answer: "Eliminar Danos Pessoais, à Propriedade, ao Material e ao Meio ambiente"
    },
    {
        question: "Qual as regras básicas de segurança na oficina?",
        answer: "Atentar para as Condições e Emprego do local, Condições e Emprego do Material, Utilização das Máquinas e Cuidados e Ação de pessoal"
    },
    {
        question: "Qual a primeira regra básica de segurança na oficina?",
        answer: "Atentar para as condições e emprego do local"
    },
    {
        question: "Qual a segunda regra básica de segurança na oficina?",
        answer: "Atentar para as condições e emprego do material"
    },
    {
        question: "Qual a terceira regra básica de segurança na oficina?",
        answer: "Atentar para a utilização das máquinas"
    },
    {
        question: "Qual a quarta regra básica de segurança na oficina?",
        answer: "Atentar para os cuidados e ação de pessoal"
    },
    {
        question: "Quais são as principais atribuições do chefe de oficina?",
        answer: "Fazer discussões diárias de segurança e reunião de segurança, Reprimir as práticas inseguras, Investigar os acidentes, as causas e aplicar as medidas corretivas"
    },
    {
        question: "Quais condições propiciam o acidente no local de trabalho?",
        answer: "Luminosidade Local Tempo Equipamento Homem"
    },
    {
        question: "Dê um exemplo de como Atentar para as Condições e Emprego do Local.",
        answer: "Manter pisos livres de óleo e graxa Assegurar iluminação adequada Disponibilizar bancadas e cavaletes para desmontar peças"
    },
    {
        question: "Dê um exemplo de como Atentar para as Condições e Emprego do Material.",
        answer: "Utilizar ferramentas corretamente, Manter ferramentas limpas, Guardar ferramentas no local correto"
    },
    {
        question: "Dê um exemplo de como Atentar para a Utilização Das Máquinas.",
        answer: "Manter máquinas ajustadas e bem manutenidas, Respeitar sinais de alerta e segurança e Usar EPI adequado"
    },
    {
        question: "Dê um exemplo de como Atentar para os Cuidados e Ações de Pessoal.",
        answer: "Cobrar o uso de EPI e Divulgar planos de prevenção de acidentes, segurança e combate a incêndio"
    },
    {
        question: "O que deve ser mantido disponível na máquina para o operador?",
        answer: "O manual do operador"
    },
    {
        question: "O que deve ser amplamente divulgado na oficina?",
        answer: "O Plano de Prevenção de Acidentes, Plano de Segurança e o Plano de Combate a Incêndio"
    },
    {
        question: "Como avaliar o grau de segurança de uma oficina?",
        answer: "Observando condições ambientais, infraestrutura, equipamentos e ferramentas, conforto e segurança"
    },
    {
        question: "Quais fatores devem ser considerados na avaliação de segurança?",
        answer: "Excesso de calor ou frio, produtos químicos danosos, tipo da construção, condições dos equipamentos, máquinas e ferramentas, resíduos sólidos, dispositivos de segurança, iluminação, pavimento, revestimento, ventilação e conforto"
    }
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