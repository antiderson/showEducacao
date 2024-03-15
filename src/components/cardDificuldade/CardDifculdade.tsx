import { Link } from "react-router-dom";
import styles from './index.module.css'

interface CardDificuldadeProps {
    title: string;
    link?: string;
}

const CardDificuldade: React.FC<CardDificuldadeProps> = ({ title, link }) => {
    return (
        <a href={"/" + link} className={styles.aa}>
            <button className={styles.bttndf}>
                <h2>{title}</h2>
                <Link to={link}></Link>
            </button>
        </a>
    )
}

export default CardDificuldade;