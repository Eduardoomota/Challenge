import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";

import { useCharacters } from "context/Characters";
import { IoChevronBackCircleSharp } from "react-icons/io5";

import * as S from "./Character.styles";

const Character = (): JSX.Element => {
  const { findCharacter, character, loading, setCharacter } = useCharacters();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      findCharacter(id, "specific");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container loader={loading}>
      <>
        <Link to="/" onClick={() => setCharacter({})}>
          <IoChevronBackCircleSharp />
        </Link>
        {loading ? (
          <ReactLoading
            type="spin"
            color="#636e72"
            width="30px"
            height="30px"
          />
        ) : (
          <S.Box>
            <>
              <S.Description>
                <h1>{character.name}</h1>
                <p>{character.description}</p>
              </S.Description>
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt={character.name}
              />
            </>
          </S.Box>
        )}
      </>
    </S.Container>
  );
};

export default Character;
