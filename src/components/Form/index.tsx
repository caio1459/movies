import { FormEvent, useState } from 'react'
import { categorys } from '../Category'
import style from './form.module.css'
import { IVideos } from '../../interfaces/IVideos'

export const Form = () => {

    const [url, setUrl] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [videos, setVideos] = useState<IVideos[]>([]);
    const [erros, setErros] = useState<string>('');

    //valida url
    function valideUrl(url: string) {
        //Compara da url recebida com a const regex.  
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        //Por meio da função test teremos true ou false. Se for true significa url válida, senão url inválida.
        if (!regex.test(url) || url.length < 43) { //Se for inválida (false) setErrors e return false 
            setErros('ERRO: URL inválida!')
            return false
        } else {
            //Se for true returna a substring que pega só o id da url do YouTube de acordo com a 32 a 43
            return url.substring(32, 43) // id do video
        }
    }

    //Limpa o form
    function clearForm() {
        setUrl('')
        setCategory('')
    }

    function onSave(event: FormEvent) {
        event.preventDefault();
        const urlVideo = valideUrl(url)

        //Valida categoria
        if (!category || category === "-") {
            setErros("Escolha uma Categoria!")
            return
        } else {
            setErros("")
        }

        if (urlVideo && category) {
            // Salva a url e a categoria em um novo objeto
            const newVideo: IVideos = {
                url,
                category,
                title: ''
            };
            setVideos([...videos, newVideo]);
            //Salva os videos no localStorage
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            clearForm()
        } else {
            setErros("Url inválida!")
        }
    }

    return (
        <section className={style.container}>
            <h2>Cadastro de Videos</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Video</label>
                    <input
                        type="text"
                        placeholder='Digite a URL do video'
                        required={true}
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        maxLength={43}
                        minLength={43}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required={true}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value={"-"}>Selecione uma Categoria</option>
                        {categorys.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {erros}
                </div>
            </form>
        </section>
    )
}