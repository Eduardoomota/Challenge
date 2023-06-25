import styled from "styled-components";
import * as S from "components/Container/Container.styles";

export const Container = styled(S.Container)<{ loader: boolean }>`
  ${({ loader }) =>
    loader &&
    `
      > div {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
      }
    `}

  height: calc(100vh - 200px);
`;

export const Form = styled.form`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  input {
    height: 30px;
    padding: 10px;
    width: 200px;
    border: none;
    border-radius: 4px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.blue.primary};
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white.primary};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue.secondary};
    }

    svg {
      display: block;
    }
  }
`;

export const CharactersList = styled.ul`
  margin: 100px 0;
  display: flex;
  flex-flow: row wrap;

  li {
    flex: 0 0 auto;
    width: 20%;
    padding: 0 8px;
    margin-bottom: 16px;

    @media (max-width: 992px) {
      width: 33.333%;
    }

    @media (max-width: 570px) {
      width: 100%;
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors.white.primary};
      height: 250px;
      border-radius: 4px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white.primary};
      background-color: #151515;

      span {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-bottom: 3px solid red;
        padding: 0 8px;
        font-size: 0.85rem;
      }

      img {
        height: 80%;
        width: 100%;
        object-fit: cover;
        object-position: left center;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        filter: grayscale(1);
      }
    }

    &:hover a img {
      filter: grayscale(0);
    }
  }
`;
