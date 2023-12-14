import style from "./noResults.module.css";
import image from "../../../public/images/erro404.png";

interface INoResultsProps {
  text: string;
}

export const NoResults = ({ text }: INoResultsProps) => {
  return (
    <div className={style.container}>
      <img src={image} alt="Erro" />
      <h1>
        Opps... Nenhum Resultado encontrado para <span>{text}</span>!
      </h1>
    </div>
  );
};
