import React, { useState } from 'react'
import { IVideos } from '../../interfaces/IVideos'
import { VideoList } from '../VideoList'
import style from './searchInput.module.css'

interface ISearchInputProps {
    videos: IVideos[]
}

//Filtra videos por categoria ou filtro
function filterVideos(videos: IVideos[], searchText: string): IVideos[] {
    return videos.filter(video =>
        video.category.toLowerCase().includes(searchText) ||
        video.title.toLowerCase().includes(searchText)
    )
}

export const SearchInput = ({ videos }: ISearchInputProps) => {

    const [searchText, setSearchText] = useState('')
    const searchResultVideos = filterVideos(videos, searchText)

    return (
        <section className={style.container}>
            <input
                type="search"
                placeholder='Pesquisar...'
                onChange={event => setSearchText(event.target.value)}
                value={searchText}
            />
            {/* Verifica se há resultados antes de exibir a lista ou a mensagem de nenhum resultado. */}
            {
                searchResultVideos.length > 0 ? (
                    <VideoList videos={searchResultVideos} />
                ) : (<h1>Nenhum resultado emcontrado</h1>)
            }
        </section>
    )
}