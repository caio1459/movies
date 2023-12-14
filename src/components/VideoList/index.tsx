import style from './videoList.module.css'
import { Card } from '../Card'
import { IVideos } from '../../interfaces/IVideos'

// Define a interface IVideosListProps para as propriedades esperadas pelo componente VideoList.
interface IVideosListProps {
    videos: IVideos[]; // Um array de objetos IVideos representando os vídeos.
    emptyTitle?: string; // Um título opcional a ser exibido quando a lista de vídeos estiver vazia.
}

// Define o componente funcional VideoList, que aceita as props conforme a interface IVideosListProps.
export const VideoList = ({ videos, emptyTitle }: IVideosListProps) => {

    // Obtém o número de vídeos na lista.
    const count: number = videos.length;

    // Atualiza o título vazio com base na quantidade de vídeos.
    if (count > 0) {
        const title: string = count > 1 ? 'Vídeos' : 'Vídeo';
        emptyTitle = `${count} ${title}`;
    }

    return (
        <>
            <h1>{emptyTitle}</h1>
            <section className={style.videos}>
                {
                    // Mapeia cada vídeo na lista e renderiza o componente Card para cada um.
                    videos.map((video) =>
                        <Card
                            key={video.id}
                            id={video.id}
                            imgUlr={video.cover}
                        />
                    )
                }
            </section>
        </>
    );
}