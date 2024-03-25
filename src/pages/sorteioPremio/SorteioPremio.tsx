import styles from './index.module.css'
import logo from '../../assets/logo-game.png'
import parabens from '../../assets/parabens.png'
import { Link } from 'react-router-dom'

export default function SorteioPremio() {
    return (
        <div className={styles.all}>
            <div className={styles.cont}>
                <Link to='/'>
                    <img src={logo} alt="logo do projeto" className={styles.logoProj} />
                </Link>
                <img src={parabens} alt="Parabéns" className={styles.parabens} />
            </div>
        </div>
    )
}