const flashcards = [
    {
        question:"Qual é a principal vantagem do torno mecânico?",
        answer: "A versatilidade em executar uma grande variedade de trabalhos e a simplicidade de sua ferramenta de corte",
      },
    {
        question: "Quais operações, normalmente feitas em outras máquinas, podem ser executadas no torno?",
        answer: "Operações de furadeira, fresadora e retificadora"
    },
    {
        question: "Para que tipo de peças é utilizado o torno horizontal?",
        answer: "Peças de pequeno diâmetro e grande comprimento"
    },
    {
        question: "Qual a principal aplicação do torno vertical?",
        answer: "Usinagem de peças de grande diâmetro ou altura, como turbinas de hidrelétricas"
    },
    {
        question: "Que tipo de produção é ideal para o torno revolver?",
        answer: "Produção em série de peças pequenas, como buchas"
    },
    {
        question: "Para que tipo de peças é utilizado o torno copiador?",
        answer: "Peças de grandes diâmetros, como aros de rodas de locomotivas e vagões"
    },
    {
        question: "Qual a vantagem dos tornos automáticos em relação aos tornos mecânicos?",
        answer: "Melhor acabamento e maior eficiência no tempo de produção"
    },
    {
        question: "Quais são os componentes básicos de um torno horizontal?",
        answer: "Cama ou base com mecanismo de movimentação, cabeçote fixo e móvel."
    },
    {
        question: "Qual tipo de torno é ideal para a fabricação de pequenas peças em série?",
        answer: "Torno revolver"
    },
    {
        question: "Para que tipo de operações é usado um torno copiador?",
        answer: "Para copiar perfis em peças seguindo um modelo semelhante"
    },
    {
        question: "Em que consiste a fresagem?",
        answer: "A fresagem consiste na retirada do excesso de metal ou sobre metal da superfície de uma peça, a fim de dar a esta uma forma e acabamento desejados"
    },
    {
        question: "Quais são os dois movimentos combinados na fresagem?",
        answer: "Rotação da ferramenta (fresa) e movimento de avanço da mesa"
    },
    {
        question: "Como são classificadas as fresadoras?",
        answer: "De acordo com a posição do eixo-árvore em relação à mesa de trabalho: horizontal, vertical e universal"
    },
    {
        question: "O que caracteriza uma fresadora vertical?",
        answer: "O eixo-árvore é perpendicular à mesa da máquina."
    },
    {
        question: "Quantos eixos-árvore possui uma fresadora universal?",
        answer: "Dois, um horizontal e um vertical"
    },
    {
        question: "Qual a vantagem de uma fresadora universal?",
        answer: "Pode ser utilizada tanto na posição horizontal quanto na vertical."
    },
    {
        question: "O que é uma plaina limadora?",
        answer: "Uma máquina-ferramenta que realiza operações de aplainamento, rasgos, estrias, rebaixos e chanfros através do movimento retilíneo alternativo da ferramenta"
    },
    {
        question: "Qual é a operação principal da plaina limadora?",
        answer: "Aplainamento"
    },
    {
        question: "Como é o movimento da ferramenta na plaina limadora?",
        answer: "Movimento retilíneo alternativo"
    },
    {
        question: "Para que são usadas as fresas?",
        answer: "Usinar os dentes das engrenagens, abrir fendas em eixos ou copiar outras peças"
    },
    {
        question: "Qual a diferença entre o movimento da ferramenta na fresadora e na limadora?",
        answer: "Na fresadora, a ferramenta gira, na limadora, a ferramenta se move retilíneamente"
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