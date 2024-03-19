import { useEffect, useState } from 'react';
import CardResposta from '../../components/cardResposta/CardResposta';
import questoes from '../../services/Questoes';
import styles from './index.module.css';
import logo from '../../assets/logo-game.png';

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

export default function QuestionEasy() {
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

            // Verifica se todas as respostas estão corretas
            const todasCorretas = perguntasSelecionadas.every((questao) =>
                questao.alternativas.some((alternativa) => alternativa.correta)
            );

            // Se todas estiverem corretas, redireciona para outra tela
            if (todasCorretas) {
                window.location.href = '/continue'; // Substitua '/outra-rota' pela rota desejada
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
                                    // logica pra mdar cor
                                } else {
                                    console.log('Resposta incorreta. Tente novamente.');
                                    // msm logica 
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

    // método pra selecionar aleatoriamente as perguntas 
    useEffect(() => {
        selecionarPerguntasAleatorias(questoes.facil, 5); // Selecionar 5 perguntas fáceis aleatórias
    }, []);

    return (
        <div>
            {renderQuestaoAtual()}
        </div>
    );
}