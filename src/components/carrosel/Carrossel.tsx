import { Link } from 'react-router-dom'
import styles from './index.module.css'
export default function Carrossel() {

    return (
        <div className={styles.cont}>
            <h3 className={styles.text14}>JACAD</h3>
            <h3 className={styles.text13}>Sistema de gerenciamento acadêmico.</h3>
            <div className={styles.carrossel}>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className={styles.title}>JACAD</div>
                                <p className={styles.subt}>Solução para sua instituição de en...</p>
                            </div>
                            <Link to="/SwaPAY">
                                <button className={styles.buttonLink}>
                                    Conhecer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className={styles.title}>JACAD</div>
                                <p className={styles.subt}>Solução para sua instituição de en...</p>
                            </div>
                            <Link to="/home-game">
                                <button className={styles.buttonLink}>
                                    Conhecer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className="text-wrapper-9">JACAD</div>
                                <p className="p">Solução para sua instituição de en...</p>
                            </div>
                            <button className={styles.buttonLink}>
                                Conhecer
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className="text-wrapper-9">JACAD</div>
                                <p className="p">Solução para sua instituição de en...</p>
                            </div>
                            <button className={styles.buttonLink}>
                                Conhecer
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className="text-wrapper-9">JACAD</div>
                                <p className="p">Solução para sua instituição de en...</p>
                            </div>
                            <button className={styles.buttonLink}>
                                Conhecer
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.imageCarrossel1}>
                    <div className={styles.rectangle}>
                        <div className={styles.teste}>
                            <div className={styles.jacadBox}>
                                <img className={styles.logo} alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-8@2x.png" />
                            </div>
                            <div className={styles.inf}>
                                <div className="text-wrapper-9">JACAD</div>
                                <p className="p">Solução para sua instituição de en...</p>
                            </div>
                            <button className={styles.buttonLink}>
                                Conhecer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}