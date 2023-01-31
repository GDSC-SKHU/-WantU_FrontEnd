import styled from 'styled-components';
import Btn from './Btn';
import axios from 'axios';
import UseUniqueArray from '../hook/UseUniqueArray';
import { List as dataList } from '../constant';
import { useEffect, useState } from 'react';
const List = ({ typeofList }: { typeofList: number }) => {
  const [lists, setLists] = useState<dataList[]>([]);

  useEffect(() => {
    const url = '/api/' + String(typeofList);
    const getResponse = async () => {
      const ListData = await axios.get(url);
      return ListData;
    };
    getResponse().then((res) => {
      setLists(res.data);
      console.log(res.data);
      const uniqueArray = UseUniqueArray({ listobject: res.data });
      if (typeof uniqueArray !== 'undefined') {
        setLists(uniqueArray);
      }
    });
    getResponse().catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <StyledGrid>
        {lists.map((list, index) => (
          <>
            <Item key={list.id}>
              {list.name}
              <Btn list={list} />
            </Item>
          </>
        ))}
      </StyledGrid>
    </Container>
  );
};

export default List;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 1rem;
  box-shadow: 0px 5px 5px rgba(158, 158, 158, 1);
  background-color: white;
`;
