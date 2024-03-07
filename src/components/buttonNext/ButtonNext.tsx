import { Link } from 'react-router-dom';
import './styles.css'
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
        // background: '#00B8DB',
        // width: '120px',
        // height: '80px',
        // borderRadius: '10px',
        // color: 'white',
        // textAlign: 'center',

    };

    return (
        <>
            <a href={"/" + link} >
                <button className='bttn'>
                    <h2>{title}</h2>
                    <Link to={link}></Link>
                </button>
            </a>
        </>
    )
}

export default ButtonNext;