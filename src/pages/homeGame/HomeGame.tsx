import { Link } from "react-router-dom";

export default function HomeGame() {
    return (
        <div>
            <h1>HomeGame</h1>
            <Link to='/dificuldade'>
                <button>
                    iniciar
                </button>
            </Link>
            <Link to='/'>
                <button>
                    Voltar
                </button>
            </Link>

        </div>
    )
}