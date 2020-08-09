import React, { Children } from "react"
import styled from "styled-components"
import { PageCover } from '../components/common';
import {  Button, Input, Form, SubIndex, SubTitle } from '../components/common';


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

const About = () => {
  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/coverimagesample_1%20(1).jpg?alt=media&token=a26b6d97-1db4-431a-9254-1ee01b0e1675"></img>
      <p>
        <span>
          CONTACT
        </span>
      </p>
    </PageCover>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
      <Form name="contact" method="post" action="/contact_success" data-netlify="true" data-netlify-honeypot="bot-field">
      <br></br>
      <p>필수 사항을 기입한 후 문의해 주시기 바랍니다.메일주소는 틀림없이 기입하여 주시기 바랍니다.</p>
      <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>성함</SubIndex>            
        <Input required placeholder="성함"  type="text" name="name" />
        <SubIndex>제목</SubIndex>
        <Input required placeholder="제목"  type="text" name="subject"/>
        <SubIndex>EMAIL주소</SubIndex>
        <Input required placeholder="EMAIL주소"  type="email" name="email"/>
        <SubIndex>문의사항</SubIndex>
        <TEXTAREA required placeholder="문의사항" name="inquiry"  />
        <Button type="submit" block>보내기</Button>
      </Form>
      </div>
  </section>
  </>
);
}


export default About
