import CardDificuldade from "../../components/cardDificuldade/CardDifculdade";
import styles from './index.module.css'
import logo from '../../assets/logo-game.png'

export default function TelaDificuldadeHard() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <CardDificuldade
                    unlocked={true}
                    title="Fácil"
                    link="/easy-question" />
                <CardDificuldade
                    unlocked={true}
                    title="Médio"
                    link="medium-question" />
                <CardDificuldade
                    unlocked={true}
                    title="Difícil"
                    link="hard-question" />
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo do projeto" className={styles.logoProj} />
            </div>
        </div>
    )
}
