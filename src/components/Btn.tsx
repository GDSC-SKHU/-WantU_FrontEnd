import Link from 'next/link';
import styled from 'styled-components';
import { Props } from '../constant';

const Btn = ({ imgSrc, name }: Props) => {
  return (
    <Container>
      <StyledImg src={imgSrc} />
      <StyledP>{name}</StyledP>
      <Link
        href="/detail"
        style={{ textDecoration: 'none', background: '#f0f8ff' }}
      >
        <StyledBtn>최저가 보러 가기</StyledBtn>
      </Link>
    </Container>
  );
};

export default Btn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  
  background-color: #f0f8ff;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledP = styled.p`
  background-color: #f0f8ff;

  @media (max-width: 800px) {
    margin: 10px;

    text-align: center;
    font-size: 14px;
  }
`;

const StyledBtn = styled.button`
  width: 10vw;
  border: 3px solid #007acc;
  border-radius: 1rem;
  color: black;
  background-color: #f0f8ff;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    color: #f0f8ff;
    background-color: #007acc;
  }

  @media (max-width: 800px) {
    width: 10vw;

    font-size: 11px;
  }
`;
