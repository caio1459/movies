import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './footer.module.css'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <p>Entre em Contato</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className={style.icon}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className={style.icon}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={style.icon}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
            <p>Produzido por <span>Caio Henrique</span></p>
        </footer>
    )
}