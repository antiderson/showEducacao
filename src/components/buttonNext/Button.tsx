import { Link } from 'react-router-dom';
// import styles from './buttonNext.css'
interface ButtonNextProps {
    title?: string;
    link: string;
}
// function clickButton(link: string) {
//     window.open("/" + link, "_self")
//     console.log("/" + link)
// }


const ButtonNext: React.FC<ButtonNextProps> = ({ title, link }) => {
    const buttonStyle = {
        background: '#FF6B6B',
        h1: title,
    };
    return (
        <a href={"/" + link}>
            <section style={buttonStyle}>
                <h2>{title}</h2>
                <Link to={link}></Link>
            </section>

        </a>
    )
}

export default ButtonNext;