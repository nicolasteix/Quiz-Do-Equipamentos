const flashcards = [
    {
        question:
          "Qual é a norma regulamentadora que trata da segurança em instalações elétricas?",
        answer: "NR10",
      },
      {
        question:
          "Quais são os tipos de danos causados por acidentes com corrente elétrica?",
        answer: "Danos Materiais e Pessoais",
      },
      {
        question:
          "Quais são os tipos de Danos Pessoais que podem ser causados por acidentes com a corrente elétrica?",
        answer:
          "Percepção, Tetanização, Parada Respiratória, Queimadura e Fibrilação Muscular",
      },
      {
        question: "De modo geral, como podem ser descritos os metodos de proteção contra choques eletricos?",
        answer:
          "Sinalização Adequada, Proteção das Instalações e Tubulações, Proteção Contra Contatos Diretos e Indiretos, Cuidados com Cabos Condutores, Cuidados com Terminais e Ligações, Cuidados com Fusíveis, Procedimentos de Reparação do Circuito, capacitação e Treinamento, Inspeção e Manutenção Regular das Instalações Elétricas",
      },
      {
        question: "O que é um Contato Elétrico Direto?",
        answer:
          "É o contato com partes sob tensão de um condutor ativo ou neutro de uma instalação",
      },
      {
        question: "Como podemos nos proteger dos Contatos Elétricos Diretos?",
        answer:
          "Afastar as partes ativas, Isolar as partes da instalação e Interpor obstáculos",
      },
      {
        question: "O que é um Contato Elétrico Indireto?",
        answer:
          "É o contato com uma parte condutora que está Temporariamente Energizada",
      },
      {
        question: "Como podemos nos proteger dos Contatos Elétricos Indiretos?",
        answer:
          "Ligar as massas à terra e Usar dispositivos de corte automático da corrente.",
      },
      {
        question:
          "Quais os procedimentos de Cuidados de utilização e manutenção da corrente elétrica?",
        answer:
          "cuidados com Cabos Condutores, cuidados com Terminais e Ligações, cuidados com Fúsiveis e cuidados na Reparação do Circuito",
      },
      {
        question: "Quais cuidados devem ser tomados ao utilizar cabos condutores?",
        answer:
          "Evitar quinas vivas, Manter os cabos justos, Verificar o estado dos isolamentos, Nunca deixar cabos expostos e Não puxar os cabos para desconectar das tomadas",
      },
      {
        question:
          "O que deve ser feito para proteger os terminais e ligações de uma instalação elétrica?",
        answer:
          "Não colocar o fio direto na tomada e Verificar se as tomadas possuem polo de aterramento",
      },
      {
        question: "Quais cuidados devem ser tomados com os fusíveis?",
        answer:
          "Colocar o fusível após a chave que liga e desliga o circuito, Verificar a causa da queima, Não fazer ajustes técnicos e verificar a amperagem indicada",
      },
      {
        question:
          "Quais são as etapas essenciais a serem seguidas ao realizar a reparação de um circuito elétrico?",
        answer:
          "Desligar o circuito antes da reparação, Realizar o trabalho com um profissional habilitado, trabalhar em dupla, Remover objetos condutores pessoais e Utilizar EPI adequado",
      },
      {
        question: "O que são riscos mecânicos?",
        answer: "São aqueles que geram acidentes em função do arranjo do ambiente físico de trabalho",
      },
      {
        question: "Quais pontos que devem ser observados pelo chefe de oficina de forma a diminuir a incidência dos riscos mecânicos?",
        answer:
          "Arranjo físico da oficina, Iluminação adequada ao ambiente de trabalho, Correta instalação dos sistemas elétricos, Armazenamento adequado nos estoques de materiais, Aquisição de ferramental adequado e eficiente, Aquisição, distribuição e fiscalização do uso de EPI.",
      },
      {
        question: "Quais aspectos devem ser observados pelos chefes de oficina para zelar pela organização do ambiente de trabalho e proteger contra riscos mecânicos?",
        answer:
          "Agentes químicos, Agentes físicos, Agentes biológicos, Agentes ergonômicos e Riscos de acidentes decorrentes do ambiente de trabalho",
      },
      {
        question: "Quais são os 5 tipos de riscos ocupacionais?",
        answer:
          "QUÍMICOS, FÍSICOS, BIOLÓGICOS, ERGONÔMICOS e ACIDENTAIS.",
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
