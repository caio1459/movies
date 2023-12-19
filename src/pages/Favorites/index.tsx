import { useContext } from 'react'
import { Container } from '../../components/Container'
import { VideoList } from '../../components/VideoList'
import style from './fovorites.module.css'
import { FavoritesContext } from '../../contexts/favoritesContext'

export const Favorites = () => {

    const {favorites} = useContext(FavoritesContext)

    return (
        <>
            <Container>
                <section className={style.container}>
                    <h1>Meus Favoritos</h1>
                    {<VideoList videos={favorites}/>}
                </section>
            </Container>
        </>
    )
}