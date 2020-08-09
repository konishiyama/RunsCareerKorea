import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #fff;
  margin: 0 auto;
  padding: 1rem 0 1rem;
  max-width: 640px;
  text-align: center;
`

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  a{
    color: #808080;
    text-decoration: none;
    &:hover{
      color: #808080;
      transition: all 0.4s ease-in;
    }
  }
`

const Contact = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  font-weight: normal;
  a{
    color: #808080;
    text-decoration: none;
    &:hover{
      color: #808080;
      transition: all 0.4s ease-in;
    }
  }
`

const ImgContainer = styled.div`
  height: 18px;
  width: 80%;
  margin: 0 auto 1.5rem;
  display: flex;
  // alignItems: center;
`

const SNS = styled.a`
  margin: 0 auto;
`

const SNSImg = styled.img`
  height: 25px;
  border-radius: 10%;
`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 10px auto 1.5rem;
  display: flex;
`

const Paragraph2 = styled.p`
  font-size: 0.8em;
  color: #808080;
  font-weight: normal;
  text-align: center;
  margin: 10px auto;
`

const CopyRight = styled.p`
  font-size: 0.6em;
  color: #808080;
  text-align: center;
  margin: 10px auto;
`


const Footer = () => {

  return (
  <>
    <Container>
      <Paragraph1>
        <Home>
          <a href="/">
            HOME
          </a>
        </Home>
        <Contact>
          <a href="/contact">
            CONTACT
          </a>
        </Contact>
      </Paragraph1>

      <ImgContainer>
        <SNS
          href="mailto:info@runscareer.com"
        >
          <SNSImg src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/gmail.png?alt=media&token=73b66931-4ddd-41bd-bcff-97e5b215d499" alt="info@runscareer.com"></SNSImg>
        </SNS>
        <SNS
          href="https://www.facebook.com/runscareer/?ref=br_rs"
          target="/blank"
        >
          <SNSImg src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/f_logo_RGB-Blue_58.png?alt=media&token=f53edc23-763c-4210-8ea2-c8017628ed78" alt="Facebook">
        </SNSImg>
        </SNS>
        <SNS
          href="https://cafe.naver.com/runscareerkorea"
          target="/blank"
        >
          <SNSImg src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/unnamed%20(1).png?alt=media&token=e418bd8f-6167-4f32-985c-5f7552e719b7" alt="Naver"></SNSImg>
        </SNS>
      </ImgContainer>

      <Paragraph2>
        운용회사 : 주식회사 샹그릴라 코리아
      </Paragraph2>

      <CopyRight>
        Copyright © 2020 RUNS CAREER All Rights Reserved.
      </CopyRight>
    </Container>
   </>
  )
}

export default Footer