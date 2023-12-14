import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"
import { Category, categorys, filterCategory } from "../../components/Category"
import { Container } from "../../components/Container"

export const Home = () => {

  return (
    <>
      <Banner imageName="home" />
      <Container>
        {
          categorys.map((category, i) => (
            <Category key={i} title={category}>
              {
                filterCategory(category).map(video => (
                  <Card
                    key={video.id}
                    imgUlr={video.cover}
                    id={video.id}
                  />
                ))
              }
            </Category>
          ))
        }
      </Container>
    </>
  )
}
