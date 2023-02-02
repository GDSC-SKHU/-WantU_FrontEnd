import styled, { keyframes } from 'styled-components';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';
const Detail = () => {
  // const sort_item = list.sort((a, b) => {
  //   if(a.price > b.price) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log(sort_item);
  const router = useRouter().query;

  return (
    <>
      <Nav />
      <Container>
        <StyledH1>{router.name}</StyledH1>
        <StyledDiv>
          <Collect>
            <Category>
              <StyledSpan>기관 명</StyledSpan>
              <StyledBtn>최저가순</StyledBtn>
              <StyledSpan>{router.price}</StyledSpan>
            </Category>
            <Category>
              <StyledSpan>공식 홈</StyledSpan>
              <StyledSpan>(제품 가격)</StyledSpan>
            </Category>
            <Category>
              <StyledSpan>교육할인스토어</StyledSpan>
              <StyledSpan>(제품 가격)</StyledSpan>
            </Category>
            <Category>
              <StyledSpan>학생복지스토어</StyledSpan>
              <StyledSpan>(제품 가격)</StyledSpan>
            </Category>
            <Category>
              <StyledSpan>쿠팡</StyledSpan>
              <StyledSpan>(제품 가격)</StyledSpan>
            </Category>
          </Collect>
          <StyledImageWrapper>
            <StyledImg
              src="./g_book2.webp"
              alt=""
              style={{ display: 'flex', justifyContent: 'center' }}
            />
            <StyledP>사이즈: 14인치</StyledP>
            <StyledP>무게: 1kg</StyledP>
          </StyledImageWrapper>
        </StyledDiv>
      </Container>
    </>
  );
};

export default Detail;

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

const Collect = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: 40vw;
  grid-template-rows: 4vw 8vw 8vw 8vw 8vw;

  animation: ${boxinit} 1.5s linear;

  margin-bottom: 2rem;
  margin-left: 10rem;

  @media (max-width: 800px) {
    margin-top: 5rem;
    margin-left: 4rem;
    grid-template-columns: 50vw;
  }
`;

const Container = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  padding: 3% 0 0 0;
  margin-left: 12rem;

  background-color: black;
  color: #d3d3d3;

  animation: ${boxinit} 1.5s linear;

  @media (max-width: 800px) {
    margin-top: 2rem;
    margin-left: 6rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 2rem;
  padding: 0 1rem;
  border-bottom: 1px solid #565656;
`;

const StyledSpan = styled.span`
  color: #d3d3d3;
`;

const StyledBtn = styled.button`
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 25vw;
  height: 40vh;

  margin-bottom: 2rem;

  @media (max-width: 800px) {
    width: 20vw;
    height: 20vh;
    margin-top: 5rem;
    margin-right: 4rem;
    margin-bottom: 0;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  animation: ${boxinit} 1.5s linear;
`;

const StyledP = styled.p`
  display: flex;

  color: white;

  @media (max-width: 800px) {
    margin-right: 4rem;
  }
`;
