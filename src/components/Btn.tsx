import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { List } from '../constant';
const Btn = ({ list }: { list: List }) => {
  const router = useRouter();
  const onClickDetailBut = (e: React.MouseEvent) => {
    console.log(list);
    router.push({
      pathname: '/detail',
      query: {
        name: list.name,
        link: list.link[0],
        linkSec: list.link[1],
        linkThird: list.link[2],
        linkFour: list.link[3],
        price: list.price,
      },
    });
  };
  return (
    <Container>
      <StyledBtn onClick={onClickDetailBut}>최저가 보러 가기</StyledBtn>
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

  background-color: white;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  background-color: white;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledP = styled.p`
  background-color: white;
  font-weight: 650;
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
  font-weight: 550;
  background-color: white;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    color: white;
    background-color: #007acc;
  }

  @media (max-width: 800px) {
    width: 10vw;

    font-size: 11px;
  }
`;
