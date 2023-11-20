import { Link } from 'react-router-dom'
import style from './header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to='/'>
                <span>CaioFlix</span>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='watch'>
                            Assitir
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}