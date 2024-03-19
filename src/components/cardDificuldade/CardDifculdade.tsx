import styles from './index.module.css'
import unlock from '../../assets/desbloquear.svg'
import lock from '../../assets/trancar.svg'

interface CardDificuldadeProps {
    title: string;
    link?: string;
    unlocked: boolean;
}

const CardDificuldade: React.FC<CardDificuldadeProps> = ({ title, link, unlocked }) => {
    const handleClick = () => {
        if (unlocked == false) {
            alert(`A dificuldade ${title} ainda não está disponível!`)
        }
    }
    return (
        <div className={styles.cardContainer}>
            {unlocked ? (
                <a href={link}>
                    {/* // <Link to={link}> */}
                    <button className={styles.bttndf} onClick={handleClick}>
                        <div className={styles.intoB}>
                            <img src={unlock} alt="cadeado" className={styles.unlock} />
                            <h2 className={styles.text}>{title}</h2>
                        </div>
                    </button>
                    {/* // </Link> */}
                </a>
            ) : (
                <button className={`${styles.bttndf} ${styles.disabled}`} onClick={handleClick}>
                    <div className={styles.intoB}>
                        <img src={lock} alt="cadeado" className={styles.unlock} />
                        <h2 className={styles.text}>{title}</h2>
                    </div>
                </button>
            )}
        </div>
    )
}

export default CardDificuldade;