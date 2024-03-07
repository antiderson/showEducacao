import ButtonNext from '../../components/buttonNext/ButtonNext'
import styles from './index.module.css'

export default function RdStation() {
    return (

        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <h1 className={styles.titleInput} >Nome</h1>
                <input type="text" className={styles.input} placeholder='Insira seu nome' />

                <h1 className={styles.titleInput} >E-mail</h1>
                <input type="text" className={styles.input} placeholder='E-mail' />

                <h1 className={styles.titleInput} >Fone</h1>
                <input type="tel" className={styles.input} placeholder='Telefone' />
            </div>
            <ButtonNext title='Enviar' link='dificuldade' />
        </div>
    )
}