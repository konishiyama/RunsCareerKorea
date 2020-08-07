import React, { useContext } from "react"
import styled from "styled-components"
import {  Button, Input, ErrorMessage, Form, SubIndex, PageCover, SubTitle } from '../components/common';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`

const CoverPic = styled.img`
  margin: 0;
  maxWidth: 960;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;
`

const SeeMore = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover{
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const fadeProperties = {
  duration: 2000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  arrows: false,
}

const IndexPage = ({  }) => {

  return(
  <>
  <section>
    <Fade {...fadeProperties}>
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/topimage1org.jpg?alt=media&token=c518ad9b-ee00-4368-9f9b-987a102f5d47"/>
      <CoverPic src= "https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/topimage2org.jpg?alt=media&token=3253f20c-dd14-46ec-8421-4fe8f27f3f94" />
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/topimage3org.jpg?alt=media&token=dc4c9526-1b48-4522-b6cd-b8ce6d5442e6"/>
    </Fade>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
    <SubTitle>
      <span>
        About
      </span>
    </SubTitle>
    <p
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 0.8rem 2rem`,
    }}
    >
    RUNS CAREER는 한국에서 공부를 하면서도 일본에서 취업활동을 고려하고 있는 모든 분들을 위한 정보공유 커뮤니티·지원조직입니다.
    </p>
    <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      >
        <SeeMore 
          href="/about"
          >>>또 보기
        </SeeMore>
      </div>
    <SubTitle>
      <span>
        Community
      </span>
    </SubTitle>
    <p
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 0.8rem 2rem`,
    }}
    >
    ​RUNS CAREER 네이버 카페에서는 일본취업을 위한 첫걸음부터 채용정보까지 다양하고 유익한 정보를 제공해 드립니다.​
    </p>
    <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      >
        <a
          href="https://cafe.naver.com/runscareerkorea"
          target="/blank"
        >
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/%E3%82%AB%E3%83%95%E3%82%A7%E5%86%99%E7%9C%9F.png?alt=media&token=1710b511-a57a-4c8e-aea7-f06d350d9caf"
          style={{
            margin: `0 auto`,
            width: `80%`,
            margin: `0 auto`,
            boxShadow: `2px 2px #D8D8D8`
          }}
          ></img>
        </a>
        <br></br>
        <br></br>
        <SeeMore 
          href="https://cafe.naver.com/runscareerkorea"
          target="/blank"
          >>>바로가기
        </SeeMore>
      </div>
    <SubTitle>
      <span>
        합격 실적
      </span>
    </SubTitle>
    <p
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 0.8rem 2rem`,
    }}
    >
    ​RUNS CAREER가 제공하는 취업교육을 받아 학생분들이 아래와 같은 다양한 일본 대기업에 합격하셨습니다.​
    </p>
    <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      >
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
      </div>

    <SubTitle>
      <span>
         Media
      </span>
    </SubTitle>
    <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      > 
        <p
        style={{
          margin: `0 auto`,
        }}
        >
        ​2020년2월 일본경제신문​
        </p>
        <br></br>
        <a
          href="https://www.nikkei.com/article/DGXMZO55378690X00C20A2I00000/?fbclid=IwAR2UHu7YfxvYZM-kuxIBg14pn2sNDjHm6wN5mzkzfMT_4sjZt1ZqoghZ3D4"
          target="/blank"
        >
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/news9.png?alt=media&token=2d2a1bcf-ac5a-4d36-974f-d17dbe133757"
          style={{
            margin: `0 auto`,
            width: `80%`,
            margin: `0 auto`,
            boxShadow: `2px 2px #D8D8D8`
          }}
          ></img>
        </a>
        <br></br>
        <br></br>
        <br></br>
        <p
        style={{
          margin: `0 auto`,
        }}
        >
        ​2018년12월 조선일보
        </p>
        <br></br>
        <a
          href="http://news.chosun.com/site/data/html_dir/2018/12/11/2018121100061.html?fbclid=IwAR1Xj50QRQR0mKlBFaE1mYgt3NWKi9tmZLaGj0_peicIgLE11imIaCgAnLk"
          target="/blank"
        >
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/news6.png?alt=media&token=ca37c09f-b12f-4dc2-8a4f-fc9ea2ddc740"
          style={{
            margin: `0 auto`,
            width: `80%`,
            margin: `0 auto`,
            boxShadow: `2px 2px #D8D8D8`
          }}
          ></img>
        </a>
      </div>
    
      <SubTitle>
      <span>
         Contact
      </span>
    </SubTitle>
      <Form name="contact" method="post" action="/contact_success" data-netlify="true" data-netlify-honeypot="bot-field">
      <br></br>
      <p>아래 폼에 필수 사항을 기입하여 문의해 주시기 바랍니다.</p>
      <p>메일주소는 틀림없이 기입해 주시기 바랍니다.</p>
      <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>성함</SubIndex>            
        <Input required placeholder="Name"  type="text" name="name" />
        <SubIndex>제목</SubIndex>
        <Input required placeholder="Title"  type="text" name="subject"/>
        <SubIndex>EMAIL주소</SubIndex>
        <Input required placeholder="Email"  type="email" name="email"/>
        <SubIndex>문의내용</SubIndex>
        <TEXTAREA required placeholder="Inquiry" name="inquiry"  />
        <Button type="submit" block>보내기</Button>
      </Form>
    <br></br>
    <br></br>
    <br></br>
   
    </div>
  </section>
  </>
);
}


export default IndexPage
