// Array de flashcards contendo perguntas e respostas
const flashcards = [
  {
    question:
      "<img src='../imagens/alicate-bomba-dagua.png' alt='Alicate Bomba Dagua'>",
    answer: "Alicate Bomba D'água",
  },
  {
    question:
      "<img src='../imagens/alicate-de-corte-frontal.png' alt='alicate-de-corte-frontal'>",
    answer: "Alicate de corte frontal",
  },
  {
    question:
      "<img src='../imagens/alicate-de-corte-lateral.png' alt='alicate-de-corte-lateral'>",
    answer: "Alicate de corte lateral",
  },
  {
    question:
      "<img src='../imagens/alicate-universal.png' alt='alicate-universal'>",
    answer: "Alicate Universal",
  },
  {
    question:
      "<img src='../imagens/alicate-de-molas-do-tambor-de-freio.png' alt='alicate-de-molas-do-tambor-de-freio'>",
    answer: "Alicate De Molas do Tambor de Freio",
  },
  {
    question:
      "<img src='../imagens/alicate-de-pressao.png' alt='alicate-de-pressao'>",
    answer: "Alicate De Pressão",
  },
  {
    question:
      "<img src='../imagens/alicate-descascador.png' alt='Alicate descascador'>",
    answer: "Alicate Descascador",
  },
  {
    question:
      "<img src='../imagens/alicate-para-abracadeiras-elasticas.png' alt='alicate-para-abracadeiras-elasticas'>",
    answer: "Alicate Para Abraçadeiras Elásticas",
  },
  {
    question:
      "<img src='../imagens/alicate-para-aneis.png' alt='alicate-para-aneis'>",
    answer: "Alicate Para Anéis Internos e Externos, de ponta curva (de trava)",
  },
  {
    question:
      "<img src='../imagens/alicate-rebitador.png' alt='Alicate Rebitador'>",
    answer: "Alicate Rebitador",
  },
  {
    question: "<img src='../imagens/almotolia.png' alt='almotolia'>",
    answer: "Almotolia",
  },
  {
    question: "<img src='../imagens/arco-serra.png' alt='Arco-Serra'>",
    answer: "Arco-serra",
  },
  {
    question:
      "<img src='../imagens/cabo-auxiliar-de-partida.png' alt='cabo-auxiliar-de-partida'>",
    answer: "Cabo auxiliar de partida",
  },
  {
    question: "<img src='../imagens/cabo-de-forca.png' alt='cabo-de-forca'>",
    answer: "Cabo De Força",
  },
  {
    question:
      "<img src='../imagens/calibrador-de-folga.png' alt='calibrador-de-folga'>",
    answer: "Calibrador de Folga",
  },
  {
    question:
      "<img src='../imagens/carro-de-mecanico.png' alt='carro-de-mecanico'>",
    answer: "Carro de Mecânico",
  },
  {
    question:
      "<img src='../imagens/cavalete-ajustavel-5ton.png' alt='cavalete-ajustavel-5ton'>",
    answer: "Cavalete Ajustável 5 ton",
  },
  {
    question: "<img src='../imagens/chave-allen.png' alt='chave allen'>",
    answer: "Chave Allen",
  },
  {
    question:
      "<img src='../imagens/chave-catraca-para-soquetes.png' alt='chave-catraca-para-soquetes'>",
    answer: "Chave Catraca Para Soquetes",
  },
  {
    question:
      "<img src='../imagens/chave-combinada.png' alt='chave-combinada'>",
    answer: "chave combinada",
  },
  {
    question: "<img src='../imagens/chave-de-bater.png' alt='chave-de-bater'>",
    answer: "chave de bater",
  },
  {
    question:
      "<img src='../imagens/chave-de-boca-ajustavel.png' alt='chave-de-boca-ajustavel'>",
    answer: "chave de boca ajustavel",
  },
  {
    question:
      "<img src='../imagens/chave-de-estria-de-catraca.png' alt='chave-de-estria-de-catraca'>",
    answer: "chave de estria de catraca",
  },
  {
    question:
      "<img src='../imagens/chave-de-estria.png' alt='chave-de-estria'>",
    answer: "chave de estria",
  },
  {
    question: "<img src='../imagens/chave-de-fenda.png' alt='chave-de-fenda'>",
    answer: "chave de fenda",
  },
  {
    question: "<img src='../imagens/chave-de-roda.png' alt='chave-de-roda'>",
    answer: "chave de roda",
  },
  {
    question:
      "<img src='../imagens/chave-de-soquete-com-cabo.png' alt='chave-de-soquete-com-cabo'>",
    answer: "chave de soquete com cabo",
  },
  {
    question: "<img src='../imagens/chave-de-vela.png' alt='chave-de-vela'>",
    answer: "chave de vela",
  },
  {
    question:
      "<img src='../imagens/chave-fixa-de-boca-dupla.png' alt='chave-fixa-de-boca-dupla'>",
    answer: "chave fixa de boca dupla",
  },
  {
    question:
      "<img src='../imagens/chave-fixa-de-boca.png' alt='chave-fixa-de-boca'>",
    answer: "chave fixa de boca",
  },
  {
    question:
      "<img src='../imagens/chave-multiplicadora-de-torque.png' alt='chave-multiplicadora-de-torque'>",
    answer: "chave multiplicadora de torque",
  },
  {
    question:
      "<img src='../imagens/chave-para-filtros-tipo-corrente.png' alt='chave-para-filtros-tipo-corrente'>",
    answer: "chave para filtros tipo corrente",
  },
  {
    question:
      "<img src='../imagens/chave-para-filtros-tipo-fita.png' alt='chave-para-filtros-tipo-fita'>",
    answer: "Chave para filtros tipo fita",
  },
  {
    question:
      "<img src='../imagens/chave-para-tubos-grifon.png' alt='chave-para-tubos-grifon'>",
    answer: "chave para tubos grifon",
  },
  {
    question: "<img src='../imagens/chave-phillips.png' alt='chave-phillips'>",
    answer: "chave phillips",
  },
  {
    question:
      "<img src='../imagens/chave-pneumatica.png' alt='chave-pneumatica'>",
    answer: "chave pneumatica",
  },
  {
    question:
      "<img src='../imagens/chave-poligonal-aberta.png' alt='chave-poligonal-aberta'>",
    answer: "chave poligonal aberta",
  },
  {
    question:
      "<img src='../imagens/chave-starter-meialua.png' alt='chave-starter-meialua'>",
    answer: "chave starter meia-lua",
  },
  {
    question:
      "<img src='../imagens/chave-tipo-biela-com-passante.png' alt='chave-tipo-biela-com-passante'>",
    answer: "chave tipo biela com passante",
  },
  {
    question:
      "<img src='../imagens/chave-tipo-biela.png' alt='chave-tipo-biela'>",
    answer: "chave tipo biela",
  },
  {
    question: "<img src='../imagens/chave-torx.png' alt='chave-torx'>",
    answer: "chave torx",
  },
  {
    question:
      "<img src='../imagens/cinta-para-anel-de-segmento.png' alt='cinta-para-anel-de-segmento'>",
    answer: "cinta para anel de segmento",
  },
  {
    question: "<img src='../imagens/compasso-curvo.png' alt='Compasso curvo'>",
    answer: "compasso curvo",
  },
  {
    question: "<img src='../imagens/compasso-reto.png' alt='compasso-reto'>",
    answer: "compasso reto",
  },
  {
    question: "<img src='../imagens/corta-tubos.png' alt='corta-tubos'>",
    answer: "corta-tubos",
  },
  {
    question:
      "<img src='../imagens/cossinetes-ou-tarraxas.png' alt='cossinetes ou tarraxas'>",
    answer: "cossinetes ou tarraxas",
  },
  {
    question:
      "<img src='../imagens/elevador-eletrico.png' alt='elevador-eletrico>",
    answer: "elevador eletrico",
  },
  {
    question:
      "<img src='../imagens/elevador-pneumatico.png' alt='elevador-pneumatico'>",
    answer: "elevador pneumatico",
  },
  {
    question: "<img src='../imagens/espatula.png' alt='espatula'>",
    answer: "espatula",
  },
  {
    question:
      "<img src='../imagens/esquadro-de-precisao.png' alt='esquadro-de-precisao'>",
    answer: "esquadro de precisão",
  },
  {
    question:
      "<img src='../imagens/estilete-multifuncao.png' alt='estilete-multifuncao'>",
    answer: "estilete multifunção",
  },
  {
    question: "<img src='../imagens/extensao.png' alt='extensao'>",
    answer: "extensao",
  },
  {
    question:
      "<img src='../imagens/furadeira-eletrica.png' alt='furadeira-eletrica.'>",
    answer: "furadeira elétrica",
  },
  {
    question: "<img src='../imagens/guilhotina.png' alt='guilhotina'>",
    answer: "guilhotina",
  },
  {
    question: "<img src='../imagens/jogo-de-puncao.png' alt='jogo-de-puncao'>",
    answer: "jogo de punção",
  },
  {
    question:
      "<img src='../imagens/imagens/junta-articulada.png' alt='junta-articulada'>",
    answer: "Junta Articulada",
  },
  {
    question:
      "<img src='../imagens/lixadeira-eletrica.png' alt='lixadeira-eletrica'>",
    answer: "Lixadeira Elétrica",
  },
  {
    question:
      "<img src='../imagens/lupa.png' alt='lupa'>",
    answer: "Lupa",
  },
  {
    question:
      "<img src='../imagens/macaco-girafa.png' alt='macaco-girafa'>",
    answer: "Macaco Girafa",
  },
  {
    question:
      "<img src='../imagens/macaco-jacare.png' alt='macaco-jacare'>",
    answer: "Macaco Jacaré",
  },
  {
    question:
      "<img src='../imagens/macaco-para-caixa-de-marcha.png' alt='macaco-para-caixa-de-marcha'>",
    answer: "Macaco para caixa de marcha",
  },
  {
    question:
      "<img src='../imagens/macho-de-roscar.png' alt='macho-de-roscar'>",
    answer: "Macho de roscar",
  },
  {
    question:
      "<img src='../imagens/mandril e chave de mandril.png' alt='mandril e chave de mandril'>",
    answer: "mandril e chave de mandril",
  },
  {
    question:
      "<img src='../imagens/manivela-para-soquetes.png' alt='manivela-para-soquetes'>",
    answer: "Manivela para soquetes",
  },
  {
    question:
      "<img src='../imagens/marretas diversas.png' alt='marretas diversas'>",
    answer: "Marretas diversas",
  },
  {
    question:
      "<img src='../imagens/martelo-anti-retrocesso.png' alt='martelo-anti-retrocesso'>",
    answer: "martelo anti-retrocesso",
  },
  {
    question:
      "<img src='../imagens/martelo-de-borracha.png' alt='martelo-de-borracha'>",
    answer: "martelo de borracha",
  },
  {
    question:
      "<img src='../imagens/martelo-de-nylon.png' alt='martelo-de-nylon'>",
    answer: "martelo de nylon",
  },
  {
    question:
      "<img src='../imagens/martelo-pena.png' alt='martelo-pena'>",
    answer: "martelo pena",
  },
  {
    question:
      "<img src='../imagens/martelo-tipo-bola.png' alt='martelo-tipo-bola'>",
    answer: "martelo tipo bola",
  },
  {
    question:
      "<img src='../imagens/micrometro-com-arco-profundo.png' alt='micrometro-com-arco-profundo'>",
    answer: "micrometro com arco profundo",
  },
  {
    question:
      "<img src='../imagens/micrometro-de-profundidade.png' alt='micrometro-de-profundidade'>",
    answer: "micrometro de profundidade",
  },
  {
    question:
      "<img src='../imagens/micrometro-externo-digital.png' alt='micrometro-externo-digital'>",
    answer: "Micrometro externo digital",
  },
  {
    question:
      "<img src='../imagens/micrometro-externo.png' alt='micrometro-externo'>",
    answer: "micrometro externo",
  },
  {
    question:
      "<img src='../imagens/micrometro-interno-tipo-paquimetro.png' alt='micrometro-interno-tipo-paquimetro'>",
    answer: "micrometro interno tipo paquimetro",
  },
  {
    question:
      "<img src='../imagens/micrometro-interno.png' alt='micrometro-interno'>",
    answer: "micrometro interno",
  },
  {
    question:
      "<img src='../imagens/motor-esmeril.png' alt='motor-esmeril'>",
    answer: "Motor Esmeril",
  },
  {
    question:
      "<img src='../imagens/multimetro.png' alt='multimetro'>",
    answer: "Multimetro",
  },
  {
    question:
      "<img src='../imagens/paquimetro-de-profundidade.png' alt='paquimetro-de-profundidade'>",
    answer: "Paquimetro de profundidade",
  },
  {
    question:
      "<img src='../imagens/paquimetro-digital.png' alt='paquimetro-digital'>",
    answer: "paquimetro digital",
  },
  {
    question:
      "<img src='../imagens/paquimetro-universal-com-relogio.png' alt='paquimetro-universal-com-relogio'>",
    answer: "paquimetro universal com relogio",
  },
  {
    question:
      "<img src='../imagens/paquimetro-universal.png' alt='paquimetro-universal'>",
    answer: "Paquimetro Universal",
  },
  {
    question:
      "<img src='../imagens/pe-de-cabra.png' alt='pe-de-cabra'>",
    answer: "pé de cabra",
  },
  {
    question:
      "<img src='../imagens/pegador-magnetico.png' alt='pegador-magnetico'>",
    answer: "pegador magnetico",
  },
  {
    question:
      "<img src='../imagens/pendente-luz auxiliar de mecanico.png' alt='pendente-luz auxiliar de mecanico'>",
    answer: "pendente (luz auxiliar de mecânico)",
  },
  {
    question:
      "<img src='../imagens/porta-cossinetes.png' alt='porta-cossinetes'>",
    answer: "Porta Cossinetes",
  },
  {
    question:
      "<img src='../imagens/relogio-comparador.png' alt='relogio-comparador'>",
    answer: "relogio comparador",
  },
  {
    question:
      "<img src='../imagens/riscador.png' alt='riscador'>",
    answer: "riscador",
  },
  {
    question:
      "<img src='../imagens/rosqueador.png' alt='rosqueador'>",
    answer: "rosqueador",
  },
  {
    question:
      "<img src='../imagens/saca-polia-de-duas-garras-deslizantes.png' alt='saca-polia-de-duas-garras-deslizantes'>",
    answer: "saca-polia de duas garras deslizantes",
  },
  {
    question:
      "<img src='../imagens/saca-polia-de-tres-garras-articuladas.png' alt='saca-polia-de-tres-garras-articuladas'>",
    answer: "Saca-polia de três garras articuladas",
  },
  {
    question:
      "<img src='../imagens/saca-polias-de-3-garras-deslizantes-e-fuso-hidráulico.png' alt='saca-polias-de-3-garras-deslizantes-e-fuso-hidráulico'>",
    answer: "saca-polia de três garras deslizantes e fuso hidráulico",
  },
  {
    question:
      "<img src='../imagens/saca-polias-de-duas-garras-articuladas.png' alt='saca-polias-de-duas-garras-articuladas'>",
    answer: "saca-polia de duas garras articuladas",
  },
  {
    question:
      "<img src='../imagens/sacador-de-porca.png.png' alt='sacador-de-porca'>",
    answer: "Sacador de porca",
  },
  {
    question:
      "<img src='../imagens/soquetes de impacto.png' alt='soquetes de impacto'>",
    answer: "soquetes de impacto",
  },
  {
    question:
      "<img src='../imagens/soquetes.png' alt='soquetes'>",
    answer: "soquetes",
  },
  {
    question:
      "<img src='../imagens/talhadeira.png' alt='talhadeira'>",
    answer: "talhadeira",
  },
  {
    question:
      "<img src='../imagens/torquês-de-armador.png' alt='torquês-de-armador'>",
    answer: "torquês de armador",
  },
  {
    question:
      "<img src='../imagens/torquimetro de vareta.png' alt='torquimetro de vareta'>",
    answer: "torquimetro de vareta",
  },
  {
    question:
      "<img src='../imagens/torquimetro-com-relogio.png' alt='torquimetro-com-relogio'>",
    answer: "torquimetro com relogio",
  },
  {
    question:
      "<img src='../imagens/torquimetro-de-estalo.png' alt='torquimetro-de-estalo'>",
    answer: "torquimetro de estalo",
  },
  {
    question:
      "<img src='../imagens/torquimetro-digital.png' alt='torquimetro-digital'>",
    answer: "torquimetro digital",
  },
  {
    question:
      "<img src='../imagens/torquimetro-eletronico.png' alt='torquimetro-eletronico'>",
    answer: "torquimetro eletronico",
  },
  {
    question:
      "<img src='../imagens/trena.png' alt='trena'>",
    answer: "trena",
  },
  {
    question:
      "<img src='../imagens/tesoura-reta-de-laminas-estreitas.png' alt='tesoura-reta-de-laminas-estreitas'>",
    answer: "tesoura reta de laminas estreitas",
  },
  {
    question:
      "<img src='../imagens/tesoura-curva.png' alt='tesoura-curva'>",
    answer: "tesoura curva",
  },



  // Adicione outras perguntas e respostas conforme necessário
];

// Elementos HTML
const questionElement = document.getElementById("question-text");
const answerElement = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const previousButton = document.getElementById("previous");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

// Índice da pergunta atual
let currentQuestionIndex = 0;

// Função para carregar a pergunta atual
const loadQuestion = () => {
  questionElement.innerHTML = flashcards[currentQuestionIndex].question;
  answerElement.value = "";
  feedbackElement.innerHTML = "";
  updateButtons();
};

// Função para atualizar os botões de navegação
const updateButtons = () => {
  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = true; //isso oculta e desoculta o botao de proximo e anterior
};

// Função para verificar a resposta fornecida pelo usuário
const checkAnswer = () => {
  const userAnswer = answerElement.value.trim().toLowerCase();
  const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
  const normalizedUserAnswer = removeAccents(userAnswer);
  const normalizedCorrectAnswer = removeAccents(correctAnswer);

  // Comparação aproximada das strings usando o algoritmo de Levenshtein
  const similarityThreshold = 0.8; // Limiar de similaridade (ajuste conforme necessário)
  const similarity = calculateSimilarity(
    normalizedUserAnswer,
    normalizedCorrectAnswer
  );

  if (similarity >= similarityThreshold) {
    feedbackElement.textContent = "Excelente! Você Acertou! Clique em Próxima";
    nextButton.disabled = false;
  } else {
    feedbackElement.textContent = "Tente novamente.";
  }
};

// Função para remover acentos das strings
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

// Adicionando eventos aos botões
submitButton.addEventListener("click", checkAnswer);
previousButton.addEventListener("click", () => {
  currentQuestionIndex--;
  loadQuestion();
});
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  loadQuestion();
});

// Carregando a primeira pergunta ao iniciar
loadQuestion();
