import styles from './index.module.css'
import logo from '../../assets/logo-game.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface FormData {
    nome: string;
    email: string;
    telefone: string;
}

export default function RdStation() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const [formArray, setFormArray] = useState<FormData[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleNextButtonClick = () => {
        setFormArray([...formArray, formData]);
        setFormData({
            nome: '',
            email: '',
            telefone: ''
        });
        console.log(formData)
    };

    const handleDownloadButtonClick = () => {
        const dataToSave = JSON.stringify(formData, null, 2);
        const blob = new Blob([dataToSave], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dados.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles.containerMain}>
            <div className={styles.containerSec}>
                <h1 className={styles.titleInput} >Nome</h1>
                <input type="text" className={styles.input}
                    required
                    placeholder='Insira seu nome'
                    name='nome'
                    value={formData.nome}
                    onChange={handleInputChange} />
                <h1 className={styles.titleInput} >E-mail</h1>
                <input type="text" className={styles.input}
                    placeholder='E-mail'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange} />
                <h1 className={styles.titleInput} >Telefone</h1>
                <input type="number" className={styles.input}
                    placeholder='Telefone'
                    name='telefone'
                    value={formData.telefone}
                    onChange={handleInputChange} />
            </div>
            <div className={styles.endLine}>
                <div className={styles.testediv}>
                    <Link to='/dificuldade'>
                        <button className={styles.btn} onClick={handleNextButtonClick}>Próximo</button>
                    </Link>
                    <button className={styles.btn} onClick={handleDownloadButtonClick}>Download Dados</button>
                    <img src={logo} alt="logo do jogo" className={styles.logoProj} />
                </div>
            </div>
        </div>
    )
}