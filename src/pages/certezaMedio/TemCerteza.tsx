import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default function TemCerteza() {
    return (
        <div className={styles.all}>
            <div className={styles.cont}>
                <div className={styles.ask}>
                    <h1 className={styles.text}>Você tem certeza?</h1>
                </div>
                <div className={styles.nav}>
                    <Link to='/dificuldade-media'>
                        <button className={styles.btnS}>SIM</button>
                    </Link>
                    <Link to='/sorteio-premio'>
                    <button className={styles.btnN}>NÃO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}