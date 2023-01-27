import styled, { keyframes } from 'styled-components';
export default function MainBody({ children }: { children: JSX.Element }) {
  return <StyledMainBody>{children}</StyledMainBody>;
}

const boxinit = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
`;

const StyledMainBody = styled.main`
  width: 100%;
  animation: ${boxinit} 1.5s linear;
  height: auto;
  justify-content: center;
  align-items: center;

  max-height: 800px;
  background-color: #0a1929;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.2;
`;
