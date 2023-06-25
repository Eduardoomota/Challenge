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
  margin: 100px auto;

  a {
    display: inline-block;
    margin-bottom: 30px;

    svg {
      height: 60px;
      width: 60px;
      fill: ${({ theme }) => theme.colors.white.primary};
    }
  }

  @media (max-width: 470px) {
    margin: 40px auto;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 300px;
    width: 300px;
    border-radius: 20px;
    object-fit: fill;
    object-position: center;
  }

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;

    img {
      width: 70%;
      object-fit: cover;
    }
  }

  @media (max-width: 470px) {
    img {
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.white.primary};
  width: 60%;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 70px;
    text-align: center;

    p {
      text-align: center;
    }
  }

  @media (max-width: 470px) {
    margin-top: 40px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-size: 1.1rem;
  }
`;
