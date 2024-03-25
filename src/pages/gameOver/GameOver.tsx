import styles from './index.module.css'
import gameOver from '../../assets/GAME OVER.png'
import logo from '../../assets/logo-game.png'
import { Link } from 'react-router-dom'

export default function GameOver() {
    return (
        <div className={styles.all}>
            <img src={gameOver} alt="Fim de jogo" className={styles.gameOver} />
            <div className={styles.footer}>
                <Link to='/'>
                    <img src={logo} alt="Logo do projeto" className={styles.logoProj} />
                </Link>
            </div>
        </div>
    )
}