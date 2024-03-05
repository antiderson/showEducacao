interface CardRespostaProps {
    content: string;
    background: string;
    correto: boolean;
    //verificar se é aqui ou nao q seta ele como certo ou errado
}

const CardResposta: React.FC<CardRespostaProps> = ({ content, background }) => {
    const cardStyle = {
        background: background,
        correto : false,
    };
    const cardResposta = {
        width: '100%',
        height: '80px',
        borderStyle: 'solid ',
        borderRadius: '10px',
        color: 'black',
    };
    return (
        <button style={cardResposta}>
            <section style={cardStyle}>
                <h2>{content}</h2>
            </section>
        </button>
    )
}

export default CardResposta;
