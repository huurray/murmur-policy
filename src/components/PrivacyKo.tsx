import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function ({ COMPANY, CS_EMAIL }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <S.Box>
        <S.SubTitle>1. 개인정보처리방침의 목적</S.SubTitle>
        <S.Text>
          {COMPANY}(이하 "회사" 또는 "당사")은 AI 기반 음성 일기 앱 서비스(이하
          "서비스")를 제공함에 있어 이용자의 개인정보를 중요시하며,
          「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등
          관련 법령을 준수합니다. 본 개인정보처리방침은 이용자의 개인정보가 어떠한
          목적과 방식으로 수집, 이용, 보관, 파기되는지 안내합니다.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>2. 수집하는 개인정보 항목</S.SubTitle>
        <S.Text>당사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</S.Text>
        <S.UList>
          <S.ListItem>
            <strong>필수 수집 항목</strong>
            <S.UList>
              <S.ListItem>계정 정보: 이메일 주소, 비밀번호(암호화 저장)</S.ListItem>
              <S.ListItem>기기 정보: 기기 식별자(Device ID), 운영체제, 앱 버전</S.ListItem>
              <S.ListItem>서비스 이용 기록: 녹음 일시, 접속 로그, 앱 사용 기록</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>선택 수집 항목 (프리미엄 구독 시)</strong>
            <S.UList>
              <S.ListItem>음성 녹음 데이터: 클라우드 백업을 위한 녹음 파일</S.ListItem>
              <S.ListItem>AI 분석 데이터: 감정 분석 결과, 음성 인식(STT) 텍스트, 키워드 분석 결과</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>결제 시 수집 항목</strong>
            <S.UList>
              <S.ListItem>구독 정보: 구독 유형, 결제 일시, 구독 상태</S.ListItem>
              <S.ListItem>결제 정보: 거래 ID (실제 결제 정보는 Apple/Google에서 처리)</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>자동 수집 항목</strong>
            <S.UList>
              <S.ListItem>접속 IP 주소, 쿠키, 접속 일시</S.ListItem>
              <S.ListItem>서비스 이용 패턴 및 통계 정보</S.ListItem>
            </S.UList>
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>3. 개인정보의 수집 방법</S.SubTitle>
        <S.UList>
          <S.ListItem>회원가입 및 서비스 이용 과정에서 이용자가 직접 입력</S.ListItem>
          <S.ListItem>앱 사용 중 자동으로 생성되어 수집 (로그 데이터, 기기 정보)</S.ListItem>
          <S.ListItem>소셜 로그인(Google, Apple) 연동 시 해당 플랫폼에서 제공</S.ListItem>
          <S.ListItem>고객 문의 및 상담 과정에서 이메일 등을 통해 수집</S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>4. 개인정보의 이용 목적</S.SubTitle>
        <S.Text>수집한 개인정보는 다음의 목적으로만 이용됩니다.</S.Text>
        <S.UList>
          <S.ListItem>
            <strong>서비스 제공</strong>: 음성 녹음 저장, AI 일기 분석, 감정 분석,
            음성 인식(STT), 키워드 분석, 클라우드 백업 및 동기화
          </S.ListItem>
          <S.ListItem>
            <strong>회원 관리</strong>: 회원제 서비스 이용에 따른 본인 확인, 가입 및
            가입 횟수 제한, 무료 체험 관리
          </S.ListItem>
          <S.ListItem>
            <strong>구독 및 결제 관리</strong>: 유료 구독 처리, 결제 검증, 구독 상태
            관리
          </S.ListItem>
          <S.ListItem>
            <strong>서비스 개선</strong>: 서비스 이용 통계 분석, 신규 서비스 개발,
            맞춤형 서비스 제공
          </S.ListItem>
          <S.ListItem>
            <strong>고객 지원</strong>: 고객 문의 응대, 불만 처리, 공지사항 전달
          </S.ListItem>
          <S.ListItem>
            <strong>법적 의무 이행</strong>: 관련 법령에 따른 의무 준수
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>5. 개인정보의 보유 및 이용 기간</S.SubTitle>
        <S.Text>
          당사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이
          파기합니다. 다만, 다음의 경우에는 명시한 기간 동안 보관합니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>회원 탈퇴 시</strong>: 즉시 파기 (단, 아래 법령에 따른 보관 의무
            제외)
          </S.ListItem>
          <S.ListItem>
            <strong>1년 이상 미접속 시</strong>: 클라우드에 저장된 녹음 파일 포함
            모든 데이터 삭제 (삭제 전 이메일 사전 안내)
          </S.ListItem>
          <S.ListItem>
            <strong>관련 법령에 따른 보관</strong>
            <S.UList>
              <S.ListItem>
                계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의
                소비자보호에 관한 법률)
              </S.ListItem>
              <S.ListItem>
                대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의
                소비자보호에 관한 법률)
              </S.ListItem>
              <S.ListItem>
                소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의
                소비자보호에 관한 법률)
              </S.ListItem>
              <S.ListItem>
                접속에 관한 기록: 3개월 (통신비밀보호법)
              </S.ListItem>
            </S.UList>
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>6. 개인정보의 제3자 제공</S.SubTitle>
        <S.Text>
          당사는 원칙적으로 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
          다만, 다음의 경우에는 예외로 합니다.
        </S.Text>
        <S.UList>
          <S.ListItem>이용자가 사전에 동의한 경우</S.ListItem>
          <S.ListItem>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>7. 개인정보 처리 위탁</S.SubTitle>
        <S.Text>
          당사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고
          있습니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Google Firebase</strong>: 클라우드 데이터 저장 및 동기화,
            사용자 인증
          </S.ListItem>
          <S.ListItem>
            <strong>Google AdMob</strong>: 광고 서비스 제공 (무료 사용자 대상)
          </S.ListItem>
          <S.ListItem>
            <strong>Apple App Store / Google Play Store</strong>: 인앱 결제 처리
          </S.ListItem>
        </S.UList>
        <S.Text>
          당사는 위탁 업무 수행 목적 외의 개인정보 처리를 금지하고, 기술적·관리적
          보호조치, 재위탁 제한, 수탁자에 대한 관리·감독 등을 통해 이용자의
          개인정보가 안전하게 관리될 수 있도록 합니다.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>8. 개인정보의 국외 이전</S.SubTitle>
        <S.Text>
          당사는 클라우드 서비스 제공을 위해 이용자의 개인정보를 국외로 이전할 수
          있습니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>이전받는 자</strong>: Google LLC (Firebase)
          </S.ListItem>
          <S.ListItem>
            <strong>이전되는 국가</strong>: 미국
          </S.ListItem>
          <S.ListItem>
            <strong>이전 항목</strong>: 음성 녹음 파일, AI 분석 데이터, 계정 정보
          </S.ListItem>
          <S.ListItem>
            <strong>이전 목적</strong>: 클라우드 백업 및 데이터 동기화
          </S.ListItem>
          <S.ListItem>
            <strong>보유 및 이용 기간</strong>: 회원 탈퇴 시 또는 위탁 계약 종료 시까지
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>9. 개인정보의 파기</S.SubTitle>
        <S.Text>
          당사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게
          되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>파기 절차</strong>: 이용자가 회원 탈퇴를 요청하거나 개인정보
            삭제를 요청한 경우, 내부 방침 및 관련 법령에 따라 일정 기간 저장 후
            파기합니다.
          </S.ListItem>
          <S.ListItem>
            <strong>파기 방법</strong>: 전자적 파일 형태의 정보는 기록을 재생할 수
            없는 기술적 방법을 사용하여 삭제하고, 종이에 출력된 개인정보는 분쇄기로
            분쇄하거나 소각합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>10. 정보주체의 권리·의무 및 행사 방법</S.SubTitle>
        <S.Text>이용자는 다음과 같은 권리를 행사할 수 있습니다.</S.Text>
        <S.UList>
          <S.ListItem>개인정보 열람 요구</S.ListItem>
          <S.ListItem>오류 등이 있을 경우 정정 요구</S.ListItem>
          <S.ListItem>삭제 요구</S.ListItem>
          <S.ListItem>처리 정지 요구</S.ListItem>
        </S.UList>
        <S.Text>
          위 권리 행사는 앱 내 "설정" 메뉴를 통해 직접 수행하거나, {CS_EMAIL}으로
          이메일을 통해 요청할 수 있습니다. 당사는 요청을 받은 날로부터 10일 이내에
          조치하고 그 결과를 통지합니다.
        </S.Text>
        <S.Text>
          회원 탈퇴 시 로컬에 저장된 데이터는 앱 삭제 시 함께 삭제되며, 클라우드에
          저장된 데이터는 탈퇴 요청 후 지체 없이 파기합니다.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>11. 개인정보의 안전성 확보 조치</S.SubTitle>
        <S.Text>
          당사는 이용자의 개인정보를 안전하게 관리하기 위해 다음과 같은 조치를
          취하고 있습니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>관리적 조치</strong>: 내부 관리 계획 수립·시행, 개인정보 취급
            직원의 최소화 및 교육
          </S.ListItem>
          <S.ListItem>
            <strong>기술적 조치</strong>: 개인정보 처리 시스템 접근 권한 관리,
            접근 통제 시스템 설치, 고유 식별 정보 등의 암호화, 보안 프로그램 설치
          </S.ListItem>
          <S.ListItem>
            <strong>물리적 조치</strong>: 개인정보가 포함된 서류, 보조저장매체
            등을 잠금장치가 있는 안전한 장소에 보관
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>12. 쿠키의 사용</S.SubTitle>
        <S.Text>
          당사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를
          사용합니다. 쿠키는 웹사이트가 이용자의 브라우저로 전송하는 소량의
          정보입니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>쿠키 사용 목적</strong>: 이용자의 접속 빈도나 방문 시간 분석,
            이용 형태 파악, 맞춤형 서비스 제공
          </S.ListItem>
          <S.ListItem>
            <strong>쿠키 거부 방법</strong>: 이용자는 브라우저 설정을 통해 쿠키
            저장을 거부할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 일부 서비스
            이용에 어려움이 있을 수 있습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>13. 광고성 정보 전송</S.SubTitle>
        <S.UList>
          <S.ListItem>
            무료 사용자에게는 Google AdMob을 통한 광고가 표시될 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            광고 제공 과정에서 광고 식별자 등이 수집될 수 있으며, 이는 Google의
            개인정보처리방침에 따라 처리됩니다.
          </S.ListItem>
          <S.ListItem>
            프리미엄 구독자에게는 광고가 표시되지 않습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>14. 개인정보 보호책임자</S.SubTitle>
        <S.Text>
          당사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
          관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이
          개인정보 보호책임자를 지정하고 있습니다.
        </S.Text>
        <S.UList>
          <S.ListItem>개인정보 보호책임자: 허준혁</S.ListItem>
          <S.ListItem>연락처: {CS_EMAIL}</S.ListItem>
        </S.UList>
        <S.Text>
          이용자는 서비스 이용 중 발생한 모든 개인정보 보호 관련 문의, 불만 처리,
          피해 구제 등에 관한 사항을 개인정보 보호책임자에게 문의할 수 있습니다.
          당사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>15. 권익침해 구제방법</S.SubTitle>
        <S.Text>
          이용자는 개인정보 침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
          한국인터넷진흥원 개인정보침해신고센터 등에 분쟁 해결이나 상담 등을 신청할
          수 있습니다.
        </S.Text>
        <S.UList>
          <S.ListItem>
            개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
          </S.ListItem>
          <S.ListItem>
            개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)
          </S.ListItem>
          <S.ListItem>대검찰청: (국번없이) 1301 (www.spo.go.kr)</S.ListItem>
          <S.ListItem>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>16. 개인정보처리방침의 변경</S.SubTitle>
        <S.Text>
          본 개인정보처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이
          추가, 삭제 및 수정될 수 있습니다. 변경 시에는 시행일 최소 7일 전부터 앱
          내 공지 또는 이메일을 통해 변경 사항을 공지합니다. 다만, 이용자 권리의
          중요한 변경이 있는 경우에는 최소 30일 전에 공지합니다.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>부칙</S.SubTitle>
        <S.Text>본 개인정보처리방침은 2025년 1월 1일부터 시행됩니다.</S.Text>
      </S.Box>
    </>
  );
}

const S = {
  Box: styled.div`
    display: flex;
    padding: 25px 0;
    width: 90%;
    max-width: 720px;
    flex-direction: column;
    align-items: flex-start;
  `,
  Title: styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 14px 0;
    color: #222;
  `,
  SubTitle: styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 10px 0;
    color: #444;
  `,
  Text: styled.p`
    font-size: 18px;
    line-height: 1.8;
    color: #666;
    margin: 5px 0;
  `,
  UList: styled.ul`
    list-style-type: ${(props: any) => (props.type ? props.type : 'disc')};
  `,
  OList: styled.ol`
    list-style-type: decimal;
  `,
  ListItem: styled.li`
    line-height: 1.7;
    margin: 15px 0 15px 20px;
    font-size: 17px;
    color: #777;
  `,
};
