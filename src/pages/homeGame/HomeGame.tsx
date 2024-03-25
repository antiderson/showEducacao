import { Link } from "react-router-dom";
import styles from './index.module.css'
import logo from '../../assets/logo-game.png'
import SwaLogo from '../../assets/swapng.png'

export default function HomeGame() {
    return (
        <div className={styles.background}>
            <img src={logo} alt="logo do jogo" className={styles.logo} />
            <div className={styles.init}>
                <div className={styles.testediv}>
                    <Link to='/rdStation'>
                        <button className={styles.btnInit}>Começar</button>
                    </Link>
                    <img src={SwaLogo} alt="logo do grupo" className={styles.logoGroup} />
                </div>
            </div>
        </div>
    )
}