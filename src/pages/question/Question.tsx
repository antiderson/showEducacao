import React, { useState } from 'react';
import CardResposta from '../../components/cardResposta/CardResposta';
import questoes from '../../services/Questoes'; // Importando o arquivo TypeScript

interface Questao {
    id: number;
    enunciado: string;
    alternativas: Alternativa[];
}

interface Alternativa {
    id: number;
    texto: string;
    correta: boolean;
}

export default function Question() {
    const [perguntasSelecionadas, setPerguntasSelecionadas] = useState<Questao[]>([]);
    const [indiceAtual, setIndiceAtual] = useState<number>(0);

    // Método para selecionar aleatoriamente um número específico de perguntas
    const selecionarPerguntasAleatorias = (perguntas: Questao[], quantidade: number) => {
        const perguntasAleatorias: Questao[] = [];
        const indicesSelecionados: number[] = [];

        while (perguntasAleatorias.length < quantidade) {
            const indice = Math.floor(Math.random() * perguntas.length);

            if (!indicesSelecionados.includes(indice)) {
                perguntasAleatorias.push(perguntas[indice]);
                indicesSelecionados.push(indice);
            }
        }

        setPerguntasSelecionadas(perguntasAleatorias);
    };

    // Método para avançar para a próxima questão
    const proximaQuestao = () => {
        if (indiceAtual < perguntasSelecionadas.length - 1) {
            setIndiceAtual(indiceAtual + 1);
        } else {
            alert('Você respondeu todas as perguntas!');
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
                                console.log('Resposta correta!');
                                // logica pra mdar cor
                            } else {
                                console.log('Resposta incorreta. Tente novamente.');
                                // msm logica 
                            }
                        }}
                        correta={alternativa.correta}
                    />
                ))}
                <button onClick={proximaQuestao}>Próxima Questão</button>
            </div>
        );
    };

    // método pra selecionar aleatoriamente as perguntas 
    React.useEffect(() => {
        selecionarPerguntasAleatorias(questoes.facil, 5); // Selecionar 5 perguntas fáceis aleatórias
    }, []);

    return (
        <div>
            <h1>Question</h1>
            {renderQuestaoAtual()}
        </div>
    );
}