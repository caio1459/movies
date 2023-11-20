import style from './error.module.css'
import imgErro from '/images/erro404.png'

export const Error = () => {
    return (
        <>
            <section className={style.container}>
                <h1>Opps! Página não Encontrada!</h1>
                <img src={imgErro} alt="Pagina de erro" />
            </section>
        </>
    )
}