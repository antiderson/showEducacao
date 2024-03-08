import React, { useState } from 'react';

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

    return (
        <button 
            
            onClick={handleClick}
            style={{
                // backgroundColor: selecionado ? (correta ? 'lightgreen' : 'red') : 'white',
                width: '100%',
                height: '80px',
                borderStyle: 'solid ',
                borderRadius: '10px',
                color: 'black',
            }}>
            <h2>{content}</h2>
        </button>
    );
};

export default CardResposta;