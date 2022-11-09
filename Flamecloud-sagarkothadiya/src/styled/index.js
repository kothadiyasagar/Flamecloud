import styled from "styled-components";

export const Icon = styled.img`
  cursor: pointer;
  rotate: ${({ rotate }) => rotate}deg;
  transition: rotate 0.5s ease;
`;
