import styles from './index.module.css'
import logo from '../../assets/logo-game.png'
import { Link } from 'react-router-dom'

export default function RdStation() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <h1 className={styles.titleInput} >Nome</h1>
                <input type="text" className={styles.input} placeholder='Insira seu nome' />
                <h1 className={styles.titleInput} >E-mail</h1>
                <input type="text" className={styles.input} placeholder='E-mail' />
                <h1 className={styles.titleInput} >Telefone</h1>
                <input type="tel" className={styles.input} placeholder='Telefone' />
            </div>
            <div className={styles.endLine}>
                <div className={styles.testediv}>
                    <Link to='/dificuldade'>
                        <button className={styles.btn}>Próximo</button>
                    </Link>
                    <img src={logo} alt="logo do jogo" className={styles.logoProj} />
                </div>
            </div>
        </div>
    )
}