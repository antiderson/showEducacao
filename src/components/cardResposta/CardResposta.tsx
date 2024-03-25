import React, { useState } from 'react';
import styles from './index.module.css';

interface CardRespostaProps {
    content: string;
    correta: boolean;
    onClick: () => void;
}

const CardResposta: React.FC<CardRespostaProps> = ({ content, correta, onClick }) => {
    const [selecionado, setSelecionado] = useState<boolean>(false);

    const handleClick = () => {
        if (!selecionado) {
            setSelecionado(true);
            onClick();
        }
    };

    // Classes dinâmicas com base nas propriedades correta e selecionado
    const respostaClasses = `${styles.cardResp} ${selecionado ? (correta ? styles.correta : styles.errada) : ''
        }`;

    return (
        <button className={respostaClasses} onClick={handleClick}>
            <h2 className={styles.textResp}>{content}</h2>
        </button>
    );
};

export default CardResposta;