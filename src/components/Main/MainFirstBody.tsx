import styled, { keyframes } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
export default function MainFirstArea(): JSX.Element {
  return (
    <>
      <StyledMainFirstArea>
        <StyledMainArticle>
          <StyledH1>새학기 프로모션 가격 정보들</StyledH1>
          <StyledH2>최적의 가격을 알려드립니다!</StyledH2>
          <StyledP>지금 바로 브랜드 별로 확인하세요!</StyledP>
          <Button style={{ marginTop: '5%' }} variant="contained">
          <Link href="/s_list" style={{ textDecoration: "none", color: "white" }}>
지금 확인하기
</Link>
          </Button>
        </StyledMainArticle>
      </StyledMainFirstArea>

      <StyledMainImageArea>
        <Carousel
          autoPlay={true}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          infiniteLoop={true}
          transitionTime={1}
        >
          <Image
            style={{ border: 'none', objectFit: 'contain' }}
            src="/images/magbook.jpg"
            height={680}
            width={680}
            alt="맥북 이미지"
          />

          <Image
            style={{ border: 'none', objectFit: 'contain' }}
            src="/images/samsungnotebook1.jpg"
            height={680}
            width={680}
            alt="갤럭시탭 이미지"
          />
          <Image
            style={{ border: 'none', objectFit: 'contain' }}
            src="/images/gram.webp"
            height={680}
            width={680}
            alt="LG 그램 이미지"
          />
        </Carousel>
      </StyledMainImageArea>
    </>
  );
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

const StyledMainImageArea = styled.article`
  width: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${boxinit} 1.5s linear;
  color: black;
`;

const StyledP = styled.p`
  color: white;
  font-size: 1rem;
  background-color: #0a1929;
`;

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 2.1rem;
  background-color: #0a1929;
  color: #c2e0ff;
  max-width: 500px;
  animation: ${boxinit} 1.5s linear;
`;

const StyledH2 = styled(StyledH1)`
  color: #fff;
`;

const StyledMainFirstArea = styled.section`
  width: 50%;
  background-color: #0a1929;
  display: flex;
  height: 100%;
  line-height: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const StyledMainArticle = styled.article`
  width: 80%;
  background-color: #0a1929;
  max-height: 600px;
`;
