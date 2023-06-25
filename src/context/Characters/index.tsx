import { createContext, useContext, useState } from "react";
import api from "services";
import { searchCharacterID, searchCharacter } from "constants/endpoints";

type CharactersType = {
  id?: number;
  name?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  description?: string;
};

type CharactersContextType = {
  findCharacter: (value: string, type: string) => void;
  characters: CharactersType[];
  character: CharactersType;
  loading: boolean;
  setCharacter: React.Dispatch<React.SetStateAction<Object>>;
};

export const CharactersContext = createContext({} as CharactersContextType);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState<CharactersType>({});
  const [loading, setLoading] = useState(false);

  const findCharacter = (value: string, type: string) => {
    const specificCondition = type === "specific";
    setLoading(true);
    api({
      method: "GET",
      url: specificCondition
        ? searchCharacterID(value)
        : searchCharacter(type === "startWith", value),
    })
      .then(res => {
        specificCondition
          ? setCharacter(res.data.data.results[0])
          : setCharacters(res.data.data.results);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        throw new Error(err);
      });
  };

  return (
    <CharactersContext.Provider
      value={{
        findCharacter,
        characters,
        loading,
        character,
        setCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
