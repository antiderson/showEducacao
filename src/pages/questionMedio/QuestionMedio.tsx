import { useEffect, useState } from "react";
import CardResposta from "../../components/cardResposta/CardResposta";
import React from "react";
import questoes from "../../services/Questoes";
import styles from '../question/index.module.css'
import logo from '../../assets/logo-game.png'

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
    const [respostaErrada, setRespostaErrada] = useState<boolean>(false);

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
                window.location.href = '/continue-hard';
            }
        }
    };
    const renderQuestaoAtual = () => {
        const questaoAtual = perguntasSelecionadas[indiceAtual];
        if (!questaoAtual) {
            return null;
        }

        const handleRespostaSelecionada = (correta: boolean) =>{
            if(!correta){
                setRespostaErrada(true);
            }
        }
        return (
            <div className={styles.all} key={questaoAtual.id}>
                <div className={styles.cont}>
                    <h2 className={styles.enunc}>{questaoAtual.enunciado}</h2>
                    {questaoAtual.alternativas.map((alternativa) => (
                        <CardResposta
                            key={alternativa.id}
                            content={alternativa.texto}
                            onClick={() => handleRespostaSelecionada(alternativa.correta)}
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

    useEffect(() =>{
        if(respostaErrada){
            const timeoutld = setTimeout(() =>{
                window.location.href = '/game-over';
            }, 2000);
            return () => clearTimeout(timeoutld);
        }
    })

    React.useEffect(() => {
        selecionarPerguntasAleatorias(questoes.medio, 5);
    }, []);

    return (
        <div>
            {renderQuestaoAtual()}
        </div>
    )
}