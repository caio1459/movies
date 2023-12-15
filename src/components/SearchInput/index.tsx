import { useState } from "react";
import { IVideos } from "../../interfaces/IVideos";
import { VideoList } from "../VideoList";
import style from "./searchInput.module.css";
import { NoResults } from "../NoResults";

interface ISearchInputProps {
    videos: IVideos[];
}

//Filtra videos por categoria ou filtro
function filterVideos(videos: IVideos[], searchText: string): IVideos[] {
    return videos.filter(
        (video) =>
            video.category.toLowerCase().includes(searchText) ||
            video.title.toLowerCase().includes(searchText)
    );
}

export const SearchInput = ({ videos }: ISearchInputProps) => {
    // Define um estado local 'searchText' e uma função 'setSearchText' para controlar o texto de pesquisa.
    const [searchText, setSearchText] = useState("");
    // Filtra os vídeos com base no texto de pesquisa.
    const searchResultVideos: IVideos[] = filterVideos(videos, searchText);

    return (
        <section className={style.container}>
            {/* Input de pesquisa controlado pelo estado 'searchText'. */}
            <input
                type="search"
                placeholder="Pesquisar..."
                onChange={(event) => setSearchText(event.target.value)}
                value={searchText}
                maxLength={30}
            />

            {/* Verifica se há resultados antes de exibir a lista de vídeos ou a div de nenhum resultado. */}
            {searchResultVideos.length > 0 ? (
                <VideoList videos={searchResultVideos} />
            ) : (
                <NoResults text={searchText} />
            )}
        </section>
    );
};
