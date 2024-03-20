import React, { useState } from 'react';
import styles from './index.module.css'

interface CardRespostaProps {
    content: string;
    correta: boolean;
    onClick: () => void;
}

const CardResposta: React.FC<CardRespostaProps> = ({ content, onClick }) => {
    const [selecionado, setSelecionado] = useState<boolean>(false);

    const handleClick = () => {
        if (!selecionado) {
            setSelecionado(true);
            onClick();
        }
    };

    return (
        <button className={styles.cardResp} onClick={handleClick}>
            <h2 className={styles.textResp}>{content}</h2>
        </button>
    );
};

export default CardResposta;