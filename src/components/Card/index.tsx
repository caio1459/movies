import { Link } from "react-router-dom";
import style from "./card.module.css";
import favoriteIcon from "./favorite.png"
import unFavoriteIcon from "./unfavorite.png"
import { FavoritesContext } from "../../contexts/favoritesContext";
import { useContext } from "react";

interface ICardProps {
  id: string;
  imgUlr: string;
}

export const Card = ({ id, imgUlr }: ICardProps) => {

// Obtém as propriedades do contexto de favoritos usando useContext
const { favorites, addFavorite } = useContext(FavoritesContext);
// Verifica se o vídeo atual é um favorito com base no ID
const isFavorite = favorites.some(favorite => favorite.id === id);
// Seleciona o ícone apropriado com base na condição de favorito
const Icon = isFavorite ? unFavoriteIcon : favoriteIcon;

  return (
    <div className={style.card}>
      <Link to={`/watch/${id}`}>
        <img src={imgUlr} alt="Capa" className={style.capa} />
      </Link>
      <figure className={style.icon}>
        <img
          src={Icon}
          alt="Favoritar videos"
          onClick={() => addFavorite({
            id,
            title: "",
            url: "",
            cover: imgUlr,
            category: ""
          })}
        />
      </figure>
    </div>
  );
};
