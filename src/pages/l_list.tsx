import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import List from '../components/List';
import Nav from '../components/Nav';

const A_list = () => {
  return (
    <div>
      <Nav />
      <StyledDiv>
        <StyledH1>LG</StyledH1>
        <List type={3} />
      </StyledDiv>
    </div>
  );
};

export default A_list;

const StyledDiv = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  padding-top: 3%;
  text-align: center;
  color: white;
`;
