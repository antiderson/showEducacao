import ButtonNext from '../../components/buttonNext/ButtonNext'
import styles from './index.module.css'

export default function Home() {
    // const stylepage = {
    //     width: '100vh',
    //     height: '100vh',
    //     backgroundImage: `url(${fundo})`, // Corrigido aqui
    //     backgroundSize: 'cover', // Adicionado para cobrir todo o fundo
    //     backgroundRepeat: 'no-repeat' // Adicionado para evitar a repetição da imagem de fundo
    // }

    return (
        <div className={styles.cont} >
            <h1 className={styles.title}>
                SHOW DA EDUCAÇÃO
            </h1>
            <ButtonNext 
                title="INICIAR"
                link="rdStation" />

            {/* <CardResposta
                    content='Rio de Janeiro'
                    background=''
                    correto={false} /> */}
        </div>
    )
}