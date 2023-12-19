import { createContext, useState } from "react";
import { IVideos } from "../interfaces/IVideos";


// Define a interface para as propriedades do contexto de favoritos 
interface IFavoriteContextProps {
    favorites: IVideos[]; // Array de objetos IFavorite representando os favoritos
    addFavorite: (newFavorite: IVideos) => void; // Função para adicionar um novo favorito
}

// Define a interface para as propriedades do provedor de contexto de favoritos (IFavoriteContextProvider)
interface IFavoriteContextProvider {
    children: React.ReactNode; // Componentes filhos que serão envolvidos pelo provedor de contexto
}

// Cria um contexto de favoritos usando createContext e define o tipo como IFavoriteContextProps
export const FavoritesContext = createContext({} as IFavoriteContextProps);

// Declaração do componente de provedor de contexto de favoritos
export default function FavoritesProvider({ children }: IFavoriteContextProvider) {
    // Estado local para armazenar a lista de favoritos
    const [favorites, setFavorites] = useState<IVideos[]>([]);

    // Função para adicionar um novo favorito à lista
    const addFavorite = (newFavorite: IVideos) => {
        // Verifica se o novo favorito já existe na lista
        const isRepeated = favorites.some((fav) => fav.id === newFavorite.id);
        // Cria uma cópia da lista de favoritos
        let updatedFavorites = [...favorites];
        // Se o favorito não estiver na lista, adiciona-o; caso contrário, remove-o
        if (!isRepeated) {
            updatedFavorites.push(newFavorite);
        } else {
            updatedFavorites = favorites.filter((fav) => fav.id !== newFavorite.id);
        }
        // Atualiza o estado com a lista de favoritos atualizada
        setFavorites(updatedFavorites);
    };

    // Retorna o provedor de contexto envolvendo os componentes filhos
    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}