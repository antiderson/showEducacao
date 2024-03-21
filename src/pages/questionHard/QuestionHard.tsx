import { useEffect, useState } from "react";
import logo from '../../assets/logo-game.png';
import CardResposta from "../../components/cardResposta/CardResposta";
import questoes from "../../services/Questoes";
import styles from '../question/index.module.css';

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

    const proximaQuestao = () => {
        if (indiceAtual < perguntasSelecionadas.length - 1) {
            setIndiceAtual(indiceAtual + 1);
        } else {
            alert("Você respondeu todas as perguntas!");

            const todasCorretas = perguntasSelecionadas.every((questao) =>
                questao.alternativas.some((alternativa) => alternativa.correta)
            );

            if (todasCorretas) {
                window.location.href = "/sorteio-premio";
            }
        }
    };

    const renderQuestaoAtual = () => {
        const questaoAtual = perguntasSelecionadas[indiceAtual];
        if (!questaoAtual) {
            return null;
        }

        return (
            <div className={styles.all} key={questaoAtual.id}>
                <div className={styles.cont}>
                    <h2 className={styles.enunc}>{questaoAtual.enunciado}</h2>
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
                </div>
                <div className={styles.endLine}>
                    <div className={styles.testediv}>
                        <button className={styles.btnN} onClick={proximaQuestao}>Próxima Questão</button>
                        <img src={logo} alt="logo do jogo" className={styles.logoProj} />
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        selecionarPerguntasAleatorias(questoes.dificil, 5);
    }, []);

    return (
        <div>
            {renderQuestaoAtual()}
        </div>
    )
}