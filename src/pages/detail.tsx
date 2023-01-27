import styled from 'styled-components';
import Nav from '../components/Nav';

export default function Detail() {
  return (
    <>
      <Nav />
      <Container>
        <StyledH1>(제품 이름)</StyledH1>
        <Collect>
          <Category>
            <StyledSpan>기관 명</StyledSpan>
            <StyledSpan>가격</StyledSpan>
          </Category>
          <Category>
            <StyledSpan>학생복지스토어</StyledSpan>
            <StyledSpan>(제품 가격)</StyledSpan>
          </Category>
          <Category>
            <StyledSpan>교육할인스토어</StyledSpan>
            <StyledSpan>(제품 가격)</StyledSpan>
          </Category>
          <Category>
            <StyledSpan>공식홈</StyledSpan>
            <StyledSpan>(제품 가격)</StyledSpan>
          </Category>
        </Collect>
      </Container>
    </>
  );
}

const Collect = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: 40vw;
  grid-template-rows: 5vw 8vw 8vw 8vw;

  margin-bottom: 2rem;
  margin-left: 2rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;

background-color: black;
`;

const StyledH1 = styled.h1`
  padding: 3% 0 0 0;
  margin-left: 4rem;

  background-color: black;
  color: #d3d3d3;
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
