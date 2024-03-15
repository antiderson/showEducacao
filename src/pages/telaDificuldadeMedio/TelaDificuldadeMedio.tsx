import CardDificuldade from "../../components/cardDificuldade/CardDifculdade";
import styles from './index.module.css'

export default function TelaDificuldadeMedio() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <div>
                    <h1 className={styles.fases}>Fases</h1>
                </div>
                <div className={styles.listdifc}>
                    <CardDificuldade
                        title="Fácil"
                         />
                    <CardDificuldade
                        title="Intermediário"
                        link="medium-question" />
                    <CardDificuldade
                        title="Difícil"
                        link="" />
                </div>
            </div>
        </div>
    )
}
