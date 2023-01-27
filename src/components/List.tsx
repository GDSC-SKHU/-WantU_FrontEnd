import styled from 'styled-components';
import Btn from './Btn';

export default function List() {
  return (
    <Container>
      <StyledGrid>
        <Item>
          <Btn imgSrc="./g_book2.webp" name="갤럭시 북2" />
        </Item>
        <Item>
          <Btn imgSrc="./g_book2pro360.webp" name="갤럭시 북2 Pro" />
        </Item>
        <Item>
          <Btn imgSrc="./g_book2pro.webp" name="갤럭시 북2 Pro360" />
        </Item>
        <Item>
          <Btn imgSrc="./g_taps8.avif" name="갤럭시 탭 S8" />
        </Item>
        <Item>
          <Btn imgSrc="./g_taps8+.webp" name="갤럭시 탭 S8+" />
        </Item>
        <Item>
          <Btn imgSrc="./g_tapa8.avif" name="갤럭시 탭 A8" />
        </Item>
      </StyledGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 20vw 20vw;
  gap: 3rem;

  margin-top: 3rem;

  @media (max-width: 800px) {
    grid-template-rows: 30vw 30vw;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(158, 158, 158, 1);
  background-color: #f0f8ff;
`;
