import { Link } from 'react-router-dom'
import style from './card.module.css'

interface ICardProps {
    id: string
    imgUlr: string
}

export const Card = ({ id, imgUlr }: ICardProps) => {
    return (
        <section className={style.card}>
            <Link to={`/watch/${id}`}>
                <img src={imgUlr} alt="Capa" />
            </Link>
        </section>
    )
}