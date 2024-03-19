import { useEffect, useState } from "react";
import CardResposta from "../../components/cardResposta/CardResposta";
import questoes from "../../services/Questoes";

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

export default function QuestionHard() {
    const [perguntasSelecionadas, setPerguntasSelecionadas] = useState<Questao[]>([]);
    const [indiceAtual, setIndiceAtual] = useState<number>(0);

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

    const ProximaQuestao = () => {
        if (indiceAtual < perguntasSelecionadas.length - 1) {
            setIndiceAtual(indiceAtual + 1);
        } else {
            alert("Voce respondeu todas as perguntas!");

            const todasCorretas = perguntasSelecionadas.every((questao) =>
                questao.alternativas.some((alternativa) => alternativa.correta)
            );

            if (todasCorretas) {
                window.location.href = "/tela winner final";
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
                                console.log('Resposta correta!');
                            } else {
                                console.log("Resposta Incorret!");
                            }
                        }}

                        correta={alternativa.correta}
                    />
                ))}
                <button onClick={ProximaQuestao}>Next</button>
            </div>
        );
    };

    useEffect(() => {
        selecionarPerguntasAleatorias(questoes.dificil, 5);
    },[]);

    return(
        <div>
            <h1>Question Hard</h1>
            {renderQuestaoAtual()}
        </div>
    )
}