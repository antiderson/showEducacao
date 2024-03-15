import { useState } from "react";
import CardResposta from "../../components/cardResposta/CardResposta";
import React from "react";
import questoes from "../../services/Questoes";

interface QuestionMedio {
    id: number;
    enunciado: string;
    alternativas: Alternativa[];
}

interface Alternativa {
    id: number;
    texto: string;
    correta: boolean;
}

export default function QuestionMedio() {
    const [perguntasSelecionadas, setPerguntasSelecionadas] = useState<QuestionMedio[]>([]);
    const [indiceAtual, setIndiceAtual] = useState<number>(0);

    const selecionarPerguntasAleatorias = (perguntas: QuestionMedio[], quantidade: number) => {
        const perguntasAleatorias: QuestionMedio[] = [];
        const indicesSelecionados: number[] = [];

        while (perguntasAleatorias.length < quantidade) {
            const indice = Math.floor(Math.random() * perguntas.length);

            if (!indicesSelecionados.includes(indice)) {
                const indice = Math.floor(Math.random() * perguntas.length);

                if (!indicesSelecionados.includes(indice)) {
                    perguntasAleatorias.push(perguntas[indice]);
                    indicesSelecionados.push(indice);
                }
            }
        }

        setPerguntasSelecionadas(perguntasAleatorias);
    };

    const proximaQuestao = () => {
        if (indiceAtual < perguntasSelecionadas.length - 1) {
            setIndiceAtual(indiceAtual + 1);
        } else {
            alert('Você respondeu todas as perguntas!');

            const todasCorretas = perguntasSelecionadas.every((questao) =>
                questao.alternativas.some((alternativa) => alternativa.correta)
            );

            if (todasCorretas) {
                window.location.href = '/dificuldade-dificil';
            }
        }
    };
    const renderQuestaoAtual = () => {
        const questaoAtual = perguntasSelecionadas[indiceAtual];
        if (!questaoAtual) {
            return null;
        }
        return (
            <div key={questaoAtual.id}>
                <h2>{questaoAtual.enunciado}</h2>
                {questaoAtual.alternativas.map((alternativa) => (
                    <CardResposta
                        key={alternativa.id}
                        content={alternativa.texto}
                        onClick={() => {
                            if (alternativa.correta) {
                                console.log('Resposta correta');
                            } else {
                                console.log('Resposta errada');
                            }
                        }}
                        correta={alternativa.correta}
                    />
                ))}
                <button onClick={proximaQuestao}>Próxima Questão</button>
            </div>
        );
    };

    React.useEffect(() =>{
        selecionarPerguntasAleatorias(questoes.medio, 5);
    }, []);

    return (
        <div>
            <h1>Questão Media</h1>
            {renderQuestaoAtual()}
        </div>
    )
}