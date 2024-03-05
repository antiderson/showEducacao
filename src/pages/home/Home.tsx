import ButtonNext from '../../components/buttonNext/Button'
import CardResposta from '../../components/cardResposta/CardResposta'
// import './home.css'

export default function Home() {
    // const stylepage = {
    //     width: '100vh',
    //     height: '100vh',
    //     backgroundImage: `url(${fundo})`, // Corrigido aqui
    //     backgroundSize: 'cover', // Adicionado para cobrir todo o fundo
    //     backgroundRepeat: 'no-repeat' // Adicionado para evitar a repetição da imagem de fundo
    // }


    return (
        <>
            <div >
                <h1>
                    Show da Educação
                </h1>
                <ButtonNext
                    title="Inicar"
                    link="rdStation" />

                <CardResposta
                    content='Rio de Janeiro'
                    background=''
                    correto={false} />
            </div>
        </>
    )
}