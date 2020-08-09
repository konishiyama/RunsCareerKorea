import React from "react"
import {  SubTitle } from '../components/common';


const ContactSuccess = () => {

  return(
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
         <SubTitle>
          <span>
            Success!!
          </span>
         </SubTitle>
        <p
          style={{
            textAlign: `center`
          }}
        >
          문의해 주신 내용이 정상적으로 송부되었습니다.
        </p>
        <br></br>
        <p
        style={{
          textAlign: `center`,
          textDecoration: `none`,
        }}
        ><a 
          href="/"
          style={{
            textDecoration: `none`,
          }}
          >홈에 돌아가기</a></p>
        <br></br>
        <br></br>
    </div>
)
}


export default ContactSuccess
