import { Link } from "react-router-dom";
import styles from './index.module.css'
import logo from '../../assets/logo-game.png'

export default function HomeGame() {
    return (
        <div className={styles.background}>
            <div>
                <img src={logo} alt="logo do jogo" className={styles.logo} />
                <div className={styles.init}>
                    <Link to='/rdStation'>
                        <button className={styles.btnInit}>
                            Começar
                        </button>
                    </Link>
                    {/* <Link to='/'>
                        <button>
                            Voltar
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}