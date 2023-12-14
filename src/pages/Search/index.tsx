import { Container } from '../../components/Container'
import style from './search.module.css'
import videos from '../../../db/db.json'
import { SearchInput } from '../../components/SearchInput'

export const Search = () => {
    return (
        <Container>
            <section className={style.search}>
                <SearchInput videos={videos}/>
            </section>
        </Container>
    )
}