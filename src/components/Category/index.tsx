import { ReactNode } from "react";
import style from "./category.module.css";
import videos from "../../../db/db.json";

// Define uma lista fixa de categorias disponíveis.
export const categorys: string[] = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
];

// Função para filtrar vídeos com base em uma categoria específica.
export function filterCategory(category: string) {
  return videos.filter((video) => video.category === category);
}

// Define a interface ICategoryProps para as propriedades esperadas pelo componente Category.
interface ICategoryProps {
  children: ReactNode; // Um nó React que representa os elementos filhos do componente.
  title: string; // O título da categoria.
}

// Define o componente funcional Category, que aceita as props conforme a interface ICategoryProps.
export const Category: React.FC<ICategoryProps> = ({ children, title }) => {
  return (
    <section className={style.category}>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
};
