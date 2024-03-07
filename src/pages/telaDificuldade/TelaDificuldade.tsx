import CardDificuldade from "../../components/cardDificuldade/CardDifculdade";
import styles from './index.module.css'

export default function TelaDificuldade() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <div>
                    <h1 className={styles.fases}>Fases</h1>
                </div>
                <div className={styles.listdifc}>
                    <CardDificuldade
                        title="Fácil"
                        link="" />
                    <CardDificuldade
                        title="Intermediário"
                        link="" />
                        <CardDificuldade
                        title="Difícil"
                        link="" />
                </div>
            </div>
        </div>
    )
}
