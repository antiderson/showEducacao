import { Link } from "react-router-dom";
import styles from './index.module.css'
import logo from '../../assets/logo-game.png'

export default function DesejaContinuar() {
    return (
        <div className={styles.all}>
            <div className={styles.cont}>
                <div className={styles.text}>
                    <h2 className={styles.text1}>
                        Parabéns, você desbloqueou uma nova fase, deseja continuar?
                    </h2>
                </div>
                <div className={styles.nav}>
                    <Link to='/really'><button className={styles.btnS}>SIM</button></Link>
                    <Link to='/sorteio-premio'>  <button className={styles.btnN}>NÃO </button></Link>
                </div>
            </div>
            <div className={styles.footer}>
                <img src={logo} alt="logodo projeto" className={styles.logo} />
            </div>
        </div>
    )
}