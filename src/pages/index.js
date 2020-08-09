import React from "react"
import styled from "styled-components"
import { SubTitle } from '../components/common';


const CoverPic = styled.img`
  margin: 0;
  maxWidth: 960;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;

  @media screen and (min-width: 481px) {
    height: auto;
    /* 481px以上に適用されるCSS（タブレット用） */
  }
  @media screen and (min-width: 960px) {
    height: auto;
    /* 960px以上に適用されるCSS（PC用） */
  }
`

const Title = styled.span`
  :before {
    position: absolute;
    top: 44%;
    left: 23.5%;
    content: "";
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #fff;
  }

  :after {
    position: absolute;
    top: 44%;
    left: 76.5%;
    content: "";
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #fff;
  }

  @media screen and (min-width: 481px) {
    height: auto;
    :before {
      left: 36%;
      width: 2vw;
    }
  
    :after {
      left: 62%;
      width: 2vw;
    }
  }
  @media screen and (min-width: 960px) {
  }
`

const CoverText1 = styled.p`
  position: absolute;
  top: 24%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: #fff;
  line-height: 1.5em;
  font-size: 2.5em;
  font-weight: bold;
  white-space: pre-wrap;
  width: 4em;
  text-align: center;
`

const CoverText2 = styled.p`
  position: absolute;
  top: 42%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: #fff;
  line-height: 1.8em;
  font-size: 0.8em;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
`
const CoverText3 = styled.p`
  position: absolute;
  top: 46%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: #fff;
  line-height: 1.8em;
  font-size: 0.8em;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
  width: 25em;
`

const Caption = styled.p`
  margin: 0 auto;
  width: 90%;
  padding: 0 0.8rem 2rem;
  white-space: pre-wrap;
  text-align: center;
  max-width: 480px;
  color: #444444;
`

const ItemsCentered = styled.div`
  margin: 1.5rem auto 0;
  text-align: center;
`

const SeeMore = styled.a`
  text-decoration: none;
  color: #444444;
  &:hover{
    color: #0086d1;
    transition: all 0.4s ease-in;
  }
`

const MediaContainer = styled.div`
  margin: 1.5rem auto 0;
  text-align: center;

  @media screen and (min-width: 960px) {
    display: flex;
  }
`

const Media = styled.div`
  margin: 1.5rem auto 3rem;
  textAlign: center;
`

const MediaCaption = styled.p`
  margin: 0 auto;
  text-align: center;
`

const MediaImage = styled.img`
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 2px 2px #D8D8D8;
  &:hover{
    opacity: 50%;
  }
`


const IndexPage = ({  }) => {

  return(
  <>
  <section>
    <div
      style={{
        position: `relative`,
      }}
    >
      <CoverPic src= "https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/coverImgSample_2.jpg?alt=media&token=b9ea46a1-3e7b-4f7a-8f15-0a140b497b0f" />
      <CoverText1>일본기업 취업지원</CoverText1>
      <Title>
        <CoverText2>RUNS CAREER</CoverText2>
        <CoverText3>OFFICIAL WEBSITE</CoverText3>
      </Title>
    </div>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 0`,
        }}
      >
    <SubTitle>
      <span>
        About
      </span>
    </SubTitle>
    <Caption>
    RUNS CAREER는 한국에서 공부를 하면서도 일본에서 취업활동을 고려하고 있는 모든 분들을 위한 정보공유 커뮤니티·지원조직입니다.
    </Caption>
    <ItemsCentered>
        <SeeMore 
          href="/about"
          >>>더 보기
        </SeeMore>
      </ItemsCentered>
    <SubTitle>
      <span>
        Community
      </span>
    </SubTitle>
    <Caption>
    ​RUNS CAREER 네이버 카페에서는 일본취업을 위한 첫걸음부터 채용정보까지 다양하고 유익한 정보를 제공해 드립니다.​
    </Caption>
    <ItemsCentered>
      <a
        href="https://cafe.naver.com/runscareerkorea"
        target="/blank"
      >
        <img 
        src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/%E3%82%AB%E3%83%95%E3%82%A7%E5%86%99%E7%9C%9F.png?alt=media&token=1710b511-a57a-4c8e-aea7-f06d350d9caf"
        style={{
          margin: `0 auto`,
          width: `80%`,
          margin: `0 auto 3rem`,
          boxShadow: `2px 2px #D8D8D8`
        }}
        ></img>
      </a>
      <br></br>
      <SeeMore 
        href="https://cafe.naver.com/runscareerkorea"
        target="/blank"
        >>>바로가기
      </SeeMore>
      </ItemsCentered>
    <SubTitle>
      <span>
        Career
      </span>
    </SubTitle>
    <Caption>
    ​RUNS CAREER가 제공하는 취업교육을 받아 학생분들이 아래와 같은 다양한 일본 대기업에 합격하셨습니다.​
    </Caption>
    <ItemsCentered>
      <a
        href="https://cafe.naver.com/runscareerkorea"
        target="/blank"
      >
        <img 
        src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/%E5%90%88%E6%A0%BC%E5%AE%9F%E7%B8%BE.jpg?alt=media&token=e7f0eb2d-87df-4697-ac17-5f234870f784"
        style={{
          margin: `0 auto`,
          width: `80%`,
          margin: `0 auto`,
          boxShadow: `2px 2px #D8D8D8`
        }}
        ></img>
      </a>
    </ItemsCentered>
    <SubTitle>
      <span>
         Media
      </span>
    </SubTitle>
    <MediaContainer> 
      <Media>
        <MediaCaption>
        ​ 2020년2월 일본경제신문​
        </MediaCaption>
        <ItemsCentered>
          <a
            href="https://www.nikkei.com/article/DGXMZO55378690X00C20A2I00000/?fbclid=IwAR2UHu7YfxvYZM-kuxIBg14pn2sNDjHm6wN5mzkzfMT_4sjZt1ZqoghZ3D4"
            target="/blank"
          >
          <MediaImage 
          src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/news9.png?alt=media&token=2d2a1bcf-ac5a-4d36-974f-d17dbe133757"
          >
          </MediaImage>
          </a>
        </ItemsCentered>
      </Media>
      <Media>
        <MediaCaption>
          ​2018년12월 조선일보
        </MediaCaption>
        <ItemsCentered>
          <a
            href="http://news.chosun.com/site/data/html_dir/2018/12/11/2018121100061.html?fbclid=IwAR1Xj50QRQR0mKlBFaE1mYgt3NWKi9tmZLaGj0_peicIgLE11imIaCgAnLk"
            target="/blank"
          >
            <MediaImage 
            src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/news6.png?alt=media&token=ca37c09f-b12f-4dc2-8a4f-fc9ea2ddc740"
            ></MediaImage>
          </a>
        </ItemsCentered>
      </Media>
    </MediaContainer>
    </div>
  </section>
  </>
);
}


export default IndexPage
