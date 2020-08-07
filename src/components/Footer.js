import React, { useState, useContext } from "react"
import styled from "styled-components"
import {Link, navigate} from 'gatsby'


const Container = styled.div`
  background-color: #fff;
  padding: 1rem 0 1rem;
  a{
    color: #808080;
    text-decoration: none;
    &:hover{
      color: #808080;
      transition: all 0.4s ease-in;
    }
  }
`

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`

const LogIn = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
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
  alignItems: center;

`

const Img = styled.img`
  height: 25px;
  margin: 0 auto;
`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 10px auto 1.5rem;
  display: flex;
`

const Paragraph2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`

const Line = styled.p`
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #808080;
  a{
    color: #808080;
    text-decoration: none;
    &:hover{
      color: #808080;
      transition: all 0.4s ease-in;
    }
  }
`
const Span = styled.span`
  margin: 0 10px;
  
`

const CopyRight = styled.p`
  font-size: 8px;
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
            <LogIn>
              <a href="/login">
                ログイン
              </a>
            </LogIn>
      </Paragraph1>

      <ImgContainer>
        <Img src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/f_logo_RGB-Blue_58.png?alt=media&token=f53edc23-763c-4210-8ea2-c8017628ed78" href="https://www.facebook.com/runscareer/?ref=br_rs" target="_blank" alt="Facebook"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/gmail.png?alt=media&token=73b66931-4ddd-41bd-bcff-97e5b215d499" href="" target="_blank" alt="info@runscareer.com"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/unnamed%20(1).png?alt=media&token=e418bd8f-6167-4f32-985c-5f7552e719b7" href="https://cafe.naver.com/runscareerkorea" target="_blank" alt="Naver"></Img>
      </ImgContainer>

      <Paragraph2>
        <Line>
          <a 
          href="/contact"
          >
            お問い合わせ
          </a>
        </Line>
        <Line>
          <a 
          href="/privacy_policy"
          >
            プライバシーポリシー
          </a>
        </Line>
      </Paragraph2>

      <CopyRight>
        Copyright © 2020 RUNS CAREER All Rights Reserved.
      </CopyRight>
    </Container>
   </>
  )
}

export default Footer