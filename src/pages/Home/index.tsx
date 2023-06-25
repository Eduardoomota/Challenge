import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

import { useCharacters } from "context/Characters";

import * as S from "./Home.styles";

const Home = (): JSX.Element => {
  const [value, setValue] = useState("");
  const { findCharacter, loading, characters } = useCharacters();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    findCharacter(value, value ? "startWith" : "");
  };

  return (
    <S.Container loader={loading}>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search you Hero..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button>
          <FiSearch />
        </button>
      </S.Form>

      {loading ? (
        <ReactLoading type="spin" color="#636e72" width="30px" height="30px" />
      ) : (
        <S.CharactersList>
          {characters.map((character, index) => (
            <li key={index}>
              <Link to={`character/${character.id}`}>
                <span>{character.name}</span>
                <img
                  src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                  alt={character.name}
                />
              </Link>
            </li>
          ))}
        </S.CharactersList>
      )}
    </S.Container>
  );
};

export default Home;
