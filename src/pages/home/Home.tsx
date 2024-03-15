import ButtonNext from '../../components/buttonNext/ButtonNext'
import styles from './index.module.css'
import React from 'react'
import "./style.css";
import HeaderMain from '../../components/headerMain.tsx/HeaderMain';
import Carrossel from '../../components/carrosel/Carrossel';

export default function Home() {

    return (
        <div className="home-white">
            {/* <div className="frame-wrapper"> */}
            <HeaderMain />
            <Carrossel />
            <div className="frame">
                {/* <div className="list-app">
                    <div className="app">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">Diploma Digital</div>
                        <p className="div"> Diplomas validadas e facíl...</p>
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Conhecer</div>
                        </div>
                    </div>
                    <div className="app-2">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">SWA. Pay</div>
                        <div className="div-wrapper">
                            <div className="frame-2">
                                <div className="text-wrapper-3">Conhecer</div>
                            </div>
                        </div>
                        <div className="div">Financiamento e pagamen...</div>
                    </div>
                    <div className="app-3">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">Edoc: Gestão de documen...</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-4">Conhecer</div>
                        </div>
                        <div className="div">Gerencie documentos e ar...</div>
                    </div>
                    <div className="app-4">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">JACAD</div>
                        <div className="div"> Gestão de gerenciamento...</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-4">Conhecer</div>
                        </div>
                    </div>
                    <div className="app-5">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">Prova Online: Avaliações Efi..</div>
                        <div className="div-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper-2">Conhecer</div>
                            </div>
                        </div>
                        <p className="div"> Avaliações Eficientes e de...</p>
                    </div>
                    <div className="app-6">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">Bibliotecario: acervo</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-4">Conhecer</div>
                        </div>
                        <div className="div">Livros, artigos entre outros...</div>
                    </div>
                    <div className="app-7">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">e.course</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-4">Conhecer</div>
                        </div>
                        <div className="div">Cursos de profissionalizaç...</div>
                    </div>
                    <div className="app-8">
                        <div className="ICON">
                            <img className="jacad" alt="Jacad" src="https://c.animaapp.com/aWVWcLPC/img/jacad-1-7@2x.png" />
                        </div>
                        <div className="text-wrapper">Show de Educação</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-4">Conhecer</div>
                        </div>
                        <div className="div">Teste seus conhecimentos...</div>
                    </div>
                </div> */}
                {/* <div className="text-wrapper-5">Ver tudo</div>
                <div className="text-wrapper-6">Confira todos nossos produtos</div>
                <div className="text-wrapper-7">Grupo SWA</div> */}
            </div>
            {/* </div> */}
        </div>
    );
};
