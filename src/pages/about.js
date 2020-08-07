import React, { Children } from "react"
import { PageCover } from '../components/common';



const About = () => {
  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample4.jpg?alt=media&token=05feeaeb-7485-4dc6-a470-6be86d173842"></img>
      <p>
        <span>
          ABOUT
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
        <h1>RUNS CAREER란?</h1>
        <p>
        RUNS CAREER는 한국에서 공부를 하면서도 일본에서 취업활동을 고려하고 있는 모든 분들을 위한 정보공유 커뮤니티·지원조직입니다.
        </p>
        <p>
        전대 미문의 취업난이라고 할 수 있는 지금의 한국취업시장에서 한국에 거주하는 일본사람뿐만 아니라 일본어에 능통한 한국인 학생들도 또한 일본에서의 취업활동을 진지하게 검토를 하고 있습니다.
        </p>
        <p>
        또한 그러한 학생들의 수고도 결코 작지는 않습니다. 입사 지원서(ES) 제출  그리고 계속되는 면접시험 또한 사전의 필기·웹 시험 등에 의 거한 중층적 채용과정, 학술성적보다 수험자의 사람 됨됨이나 경험의 다양성을 중시하는 경향 등등 일본에서의 취업활동은 한국에서의 취업활동과는 전혀 다르다고 말할 수 있을 뿐만 아니라 거리적 그리고 환경적인 핸디캡으로 특수한 일본의 취업활동 시스템에 낯익지 않은 한국 학생은 일본 대학 학생과 비교해서 정보수집이나 각종 대책 등 여러 가지 면에서 상당히 불리하다고밖에 말할 수 없습니다.
        </p>
        <p>
        저희는 그러한 학생들을 대상으로 정보공유의 장소(각종 세미나, 설명회,일본취업 정보공유를 위한 네이버카페 등)와 실전적인 훈련의 장소(입사 지원서 첨삭·면접 대책 등)를 제공하고 있습니다. 또 그러한 장소의 제공에 있어서는 일본의 취업활동 사정에 정통한 프로가 본인의 취업활동 체험을 기초로 “튼튼한 바탕에 뿌리를 내린” 정보 및 테크닉의 전수를 하고자 하는것은 물론 “언제든지 학생들의 편에 서서” 를 목표로 하여 더욱 학생 자신이 처해있는 상황에 맞춘 후원을 제공하고 있습니다.
        </p>
        <p>
        취업난에 힘들어하는 많은 학생들이 본인의 성공에 조금이라도 근접할 수 있도록 후원하는 것뿐만 아니라 이러한 활동이 한일 양국 간의 인재교류를 한층더 활성화 하며 더 나아가서는 양국 간의 상호신뢰 양성이 이루어지기를 바라면서 매일 활동에 전념하고 있습니다.
        </p>
      </div>
  </section>
  </>
);
}


export default About
