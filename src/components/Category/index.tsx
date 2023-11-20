import { ReactNode } from 'react'
import style from './category.module.css'
import videos from '../../db/db.json'

export const categorys: string[] = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação"
]

export function filterCategory(category: string) {
    return videos.filter(video => video.category === category);
}

interface ICategoryProps {
    children: ReactNode,
    title: string
}

export const Category: React.FC<ICategoryProps> = ({ children, title }) => {
    return (
        <section className={style.category}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </section>
    )
}