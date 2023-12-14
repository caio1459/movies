import { useParams } from "react-router-dom"
import { Container } from "../../components/Container"
import style from './watch.module.css'
import videos from '../../../db/db.json'
import { Error } from "../Error/Error"



export const Watch = () => {
    //Pega um id da ulr
    const params = useParams()
    //Retorna um id da ulr que é igual ao id do banco de dados
    const video = videos.find(video => video.id === params.id)

    if (!video) {
        return <Error />
    }

    return (
        <>
            <Container>
                <section className={style.watch}>
                    <iframe
                        width="854"
                        height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </section>
            </Container>
        </>
    )
}