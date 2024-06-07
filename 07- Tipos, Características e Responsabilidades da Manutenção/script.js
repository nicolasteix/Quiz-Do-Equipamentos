const flashcards = [
    {
        question:
          "<img src='../imagens/tabela mcc.png' alt='tabela mcc.png'> <br><br> <p>complete os dados da tabela mcc</p>",
        answer: "Função, Preservar a Função, Obrigatório e sistematica e consequencia das falhas",
      },
    {
        question: "O que é manutenção?",
        answer: "É o conjunto de ações necessárias para manter ou restaurar um equipamento em uma condição específica de operação"
    },
    {
        question: "Quais são os três tipos básicos de manutenção?",
        answer: "Manutenção corretiva, preventiva e preditiva"
    },
    {
        question: "Qual é a principal característica da manutenção corretiva emergencial?",
        answer: "É realizada após a ocorrência de uma falha inesperada, com alto custo e impacto nas operações."
    },
    {
        question: "Quais são os objetivos da manutenção preventiva?",
        answer: "Redução de custos, aumento da produtividade e vida útil dos equipamentos, redução de acidentes e impactos ambientais."
    },
    {
        question: "O que é manutenção preditiva?",
        answer: "Manutenção que monitora os equipamentos em operação para prever falhas e realizar intervenções antes que ocorram"
    },
    {
        question: "Quais são os métodos de inspeção preditivos mais comuns?",
        answer: "Inspeções sensitivas, análise de vibrações, análise termográfica e análise por ultrassom"
    },
    {
        question: "Qual é o objetivo da Manutenção Centrada em Confiabilidade (MCC)?",
        answer: "Estimar a confiabilidade de componentes e sistemas, melhorar a segurança e otimizar os custos de manutenção"
    },
    {
        question: "Explique o que é o POP (Procedimento Operacional Padrão)",
        answer: "É um documento que descreve os passos específicos para realizar uma tarefa de maneira padronizada"
    },
    {
        question: "Quais são as etapas básicas da implantação da MCC?",
        answer: "Definição e delimitação do sistema, funções e falhas funcionais, FMEA/FMECA, diagrama de decisão e seleção e formulação e implementação de um plano de manutenção."
    
    },
    {
        question: "O que é manutenção preventiva?",
        answer: "é um conjunto de atividades planejadas realizadas para reduzir ou evitar falhas em equipamentos, seguindo um plano previamente elaborado com base em intervalos definidos de tempo"
    },
    {
        question: "Qual técnica de manutenção preditiva utiliza a medição de temperatura para formar imagens térmicas?",
        answer: "Analise Termológica"
    },
    {
        question: "Em qual geração da manutenção surgiu a Manutenção Produtiva Total (TPM)?",
        answer: "Terceira Geração"
    },
    {
        question: "Descreva os métodos de inspeção preditivos usados na manutenção preditiva.",
        answer: "Inspeções sensitivas e Uso de equipamentos especializados para identificar falhas não perceptíveis pelos sentidos humanos."
    },
    {
        question: "Quais são os principais objetivos de um plano de manutenção preventiva?",
        answer: "Planejar processos de execução, Prever falhas e resolvê-las, Conferir resultados e promover a melhoria contínua de processos, Contribuir para o entendimento de como surgem problemas e como podem ser solucionados, focando na causa, não nas consequências."
    },
   
    {
        question: "Explique a diferença entre manutenção corretiva planejada e emergencial.",
        answer: "A manutenção corretiva planejada é realizada para corrigir desempenho menor que o esperado, com base em acompanhamento preditivo, a manutenção corretiva emergencial é a correção de falhas que ocorrem de maneira inesperada"
    },
    {
        question: "Quais são as vantagens e desvantagens da manutenção preventiva por tempo?",
        answer: "garantia das funções do equipamento durante a produção, melhor ritmo de trabalho e menores chances de erros. As desvantagens incluem a possibilidade de substituição de componentes ainda em condições de uso e a ocorrência de falhas entre os períodos planejados"
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
