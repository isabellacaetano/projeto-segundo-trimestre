const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Em uma cidade pacata à beira-mar, vivia uma mulher chamada Clara, que era conhecida por sua paixão em explorar a natureza o seu redor. Certo dia ela falou ao seus pais que iria fazer uma trilha próxima à praia, sem dar uma explicação muito detalhada, então ela",
        alternativas: [
            "Realmente foi fazer a trilha",
            "Foi se encontrar com alguém"
        ]
    },
    {
        enunciado: "Após sair de casa, Clara",
        alternativas: [
            "Caiu e se acidentou no caminho da trilha",
            "Se encontrou com seu ex-namorado, cujo homem que não aceitava o fim do relacionamento"
        ]
    },
    {
        enunciado: "A garota corre perigo, pois",
        alternativas: [
            "Ao começar a trilha, Clara caiu em cheio em uma área rochosa de difícil acesso,perto de uma cachoeira, assim, machucando sua perna e dificultando as formas de sair dali sozinha",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]
