import React, { useState } from "react"
import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"
import { Category, categorys, filterCategory } from "../../components/Category"
import { Container } from "../../components/Container"

export const Home = () => {

  const [nome, setNome] = useState('')

  function pegarNome(event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value)
  }

  return (
    <>
      <Banner imageName="home" />
      <Container>
        <input type="text" placeholder="Nome" onChange={pegarNome} />
        <h2>{nome}</h2>
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
