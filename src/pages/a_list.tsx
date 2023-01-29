import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import List from '../components/List';
import Nav from '../components/Nav';

const A_list = () => {

  useEffect(() => {
    const getapi = async () => {
      const getdata = await axios.get('/api/apple').then((res) => console.log(res));
    }
    getapi();
  }, [])

  return (
    <div>
      <Nav />
      <StyledDiv>
        <StyledH1>Apple</StyledH1>
        <List />
      </StyledDiv>
    </div>
  );
}

export default A_list;

const StyledDiv = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  padding-top: 3%;
  text-align: center;
  color: white;
`;
