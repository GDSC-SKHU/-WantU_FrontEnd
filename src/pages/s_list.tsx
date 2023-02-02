import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from '../components/List';
import Nav from '../components/Nav';

interface Item {
  id: number;
  name: string;
  maker_id: number;
  price: number;
  link: string;
}

const S_list = () => {
  return (
    <div>
      <Nav />
      <StyledDiv>
        <StyledH1>SAMSUNG</StyledH1>
        <List type={1} />
      </StyledDiv>
    </div>
  );
};

export default S_list;

const StyledDiv = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  padding-top: 3%;
  text-align: center;
  color: white;
`;
