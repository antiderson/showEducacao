interface Alternativa {
    id: number;
    texto: string;
    correta: boolean;
}

interface Questao {
    id: number;
    enunciado: string;
    alternativas: Alternativa[];
}

interface Questoes {
    facil: Questao[];
    medio: Questao[];
    dificil: Questao[];
}

const questoes: Questoes = {
    facil: [
        {
            "id": 1,
            "enunciado": "Qual é a capital do Brasil?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Rio de Janeiro",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "São Paulo",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Brasília",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "Belo Horizonte",
                    "correta": false
                }
            ]
        }, {
            "id": 2,
            "enunciado": "Quem pintou a Mona Lisa?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Leonardo da Vinci",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "Michelangelo",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Pablo Picasso",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Vincent Van Gogh",
                    "correta": false
                }
            ]
        }, {
            "id": 3,
            "enunciado": "Qual é o maior planeta do sistema solar?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Urano",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Netuno",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Saturno",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Júpiter",
                    "correta": true
                }
            ]
        }, {
            "id": 4,
            "enunciado": "Qual é o maior oceano do mundo?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Oceano Atlântico",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Oceano Índico",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Oceano Pacífico",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "Oceano Ártico",
                    "correta": false
                }
            ]
        }, {
            "id": 5,
            "enunciado": "Quem foi o primeiro presidente do Brasil?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Juscelino Kubitscheck",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Catelo Branco",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Getúlio Vargas",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Deodoro da Fonseca",
                    "correta": true
                }
            ]
        }, {
            "id": 6,
            "enunciado": "Quanto é 7x8?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "56",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "57",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "58",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "59",
                    "correta": false
                }
            ]
        }, {
            "id": 7,
            "enunciado": "Qual a cor do céu durante o dia?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Amarelo",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Acizentado",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Bege",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Azul",
                    "correta": true
                }
            ]
        }, {
            "id": 8,
            "enunciado": "Quem é o autor da obra 'Romeu e Julieta'?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Machado de Assis",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "William Shakespeare",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Leonardo da Vinci",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "J. K. Rowling",
                    "correta": false
                }
            ]
        }, {
            "id": 9,
            "enunciado": "Qual a fórmula química do oxigênio?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "O",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "O2",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "O3",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "O4",
                    "correta": false
                }
            ]
        }, {
            "id": 10,
            "enunciado": "Quem foi o inventor da lâmpada elétrica?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Nikola Tesla",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Thomas Edison",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Albert Einstein",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Alexander Graham Bell",
                    "correta": false
                }
            ]
        }
    ],
    medio: [
        {
            "id": 11,
            "enunciado": "Qual a fórmula química do água?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "H2O",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "H2O2",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "H3O",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "H4O",
                    "correta": false
                }
            ]
        }, {
            "id": 12,
            "enunciado": "Quem foi o primeiro homem a pisar na Lua?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Yuri Gagarin",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Neil Armstrong",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Buzz Aldrin",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "John Glenn",
                    "correta": false
                }
            ]
        }, {
            "id": 13,
            "enunciado": "Quem foi o autor de 'A Origem das Espécies'?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Albert Einstein",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Isaac Newton",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Galileu Galilei",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Charles Darwin",
                    "correta": true
                }
            ]
        }, {
            "id": 14,
            "enunciado": "Quem foi o primeiro presidente dos Estados Unidos?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "George Washington",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "Thomas Jefferson",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Abraham Lincoln",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Theodore Roosevelt",
                    "correta": false
                }
            ]
        }, {
            "id": 15,
            "enunciado": "Quem foi o autor de 'O Pequeno Principe'?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Antoine de Saint-Exupéry",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "Victor Hugo",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Gustave Flaubert",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Alexandre Dumas",
                    "correta": false
                }
            ]
        }, {
            "id": 16,
            "enunciado": "Qual é o maior país do mundo em extensão territorial?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Canadá",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Rússia",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "China",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Estados Unidos",
                    "correta": false
                }
            ]
        }, {
            "id": 17,
            "enunciado": "Qual o estado com a maior avaliação de educação do Brasil?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "São Paulo",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "Santa Catarina",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Rio Grande do Sul",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Distrito Federal",
                    "correta": false
                }
            ]
        }, {
            "id": 18,
            "enunciado": "Qual o maior orgão do corpo humano?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Pulmão",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Fígado",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Coração",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Pele",
                    "correta": true
                }
            ]
        }, {
            "id": 19,
            "enunciado": "Qual é a capital do Canadá?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Toronto",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Montreal",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Ottawa",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "Vancouver",
                    "correta": false
                }
            ]
        }, {
            "id": 20,
            "enunciado": "Qual o resultado da equação 3 + 2 x 0 ?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "3",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "2",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "0",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "5",
                    "correta": false
                }
            ]
        }
    ],
    dificil: [
        {
            "id": 21,
            "enunciado": "Qual o maior deserto do mundo?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Deserto do Saara",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Antártica",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Deserto do Atacana",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Deserto Arábico",
                    "correta": false
                }
            ]
        }, {
            "id": 22,
            "enunciado": "Qual das alternativas NÃO é uma das sete maravilhas do mundo antigo?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Pirâmides de Gizé",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Jardins Suspensos da Babilônia",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Estátua de Zeus em Olímpia",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Muralha da China",
                    "correta": true
                }
            ]
        }, {
            "id": 23,
            "enunciado": "Quem foi o primeiro cientista a formular a teoria da relatividade?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Isaac Newton",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Albert Einstein",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Galileu Galilei",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Nikola Tesla",
                    "correta": false
                }
            ]
        }, {
            "id": 24,
            "enunciado": "Qual é o número de Avogadro?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "6,022 x 10^22",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "6,022 x 10^24",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "6,022 x 10^23",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "6,022 x 10^25",
                    "correta": false
                }
            ]
        }, {
            "id": 25,
            "enunciado": "Quem foi o primeiro imperador do Brasil?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Dom Pedro I",
                    "correta": true
                },
                {
                    "id": 2,
                    "texto": "Dom Pedro II",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Dom João VI",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Dom João V",
                    "correta": false
                }
            ]
        }, {
            "id": 26,
            "enunciado": "Qual é o maior animal terrestre do mundo?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Girafa",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Elefante Africano",
                    "correta": true
                },
                {
                    "id": 3,
                    "texto": "Rinoceronte",
                    "correta": false
                },
                {
                    "id": 4,
                    "texto": "Hipopótamo",
                    "correta": false
                }
            ]
        }, {
            "id": 27,
            "enunciado": "Qual das alternativas NÃO é uma capital sul-americana?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Buenos Aires",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Santiago",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Wellington",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "Montevidéu",
                    "correta": false
                }
            ]
        }, {
            "id": 28,
            "enunciado": "Qual desses cientistas NÃO é um ganhador do prêmio Nobel?",
            "alternativas": [
                {
                    "id": 1,
                    "texto": "Albert Einstein",
                    "correta": false
                },
                {
                    "id": 2,
                    "texto": "Marie Curie",
                    "correta": false
                },
                {
                    "id": 3,
                    "texto": "Nikola Tesla",
                    "correta": true
                },
                {
                    "id": 4,
                    "texto": "Isaac Newton",
                    "correta": false
                }
            ]
        }
    ]
}
export default questoes;