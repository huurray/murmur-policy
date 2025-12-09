import React, { useEffect } from "react";
import styled from "styled-components";

export default function ({ COMPANY, CS_EMAIL }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <S.Box>
        <S.SubTitle>개요</S.SubTitle>
        <S.Text>
          오늘의 감정과 이야기를 녹음하는 다이어리 서비스(이하 "서비스"){" "}
          {COMPANY}에 오신 것을 환영합니다. 이하는 "미드나잇플랜"(대표 허준혁,
          CEO Junhyeok Heo)이 귀하의 {COMPANY}(이하 "사이트") 이용 약관 내용을
          담고 있습니다. "미드나잇플랜"(이하 "회사" 혹은 "우리")은 대한민국 법에
          등록된 회사로 사업자 번호는 489-03-01218입니다. 이하의 약관을 신중하게
          읽고 명확히 이해 하십시오. 사이트를 이용하시게 되면 사이트 가입 여부와
          무관하게 본 사용 약관(이하 "약관") 을 준수하고 법에 따른다는 것으로
          간주합니다. 본 약관에 동의하지 않으시는 경우, 사이트 관련 정보를
          수집하거나 사이트를 계속 이용하실 수 없습니다. 이하 약관에 위반하여
          사이트를 이용하는 경우 민사 혹은 형사 처벌을 받을 수 있습니다. 회사는
          언제든 약관을 변경할 권리를 가집니다. 귀하가 사이트를 계속해서
          이용하는 경우 변경된 약관 내용에 동의하는 것으로 간주합니다. 따라서,
          사용자들은 약관의 변경이 있는 경우 이를 검토하여야 합니다. 문의가 있는
          경우 즉시 {CS_EMAIL}으로 이메일을 보내주십시오.
        </S.Text>
      </S.Box>
      <S.Box>
        <S.SubTitle>1. 일반 조항</S.SubTitle>
        <S.UList>
          <S.ListItem>
            1.1 본 사이트는 엔터테인먼트 목적으로 제작된 것이며 비도덕적인
            목적을 충족하기 위한 것이 아닙니다.
          </S.ListItem>
          <S.ListItem>
            1.2 귀하는 이로써 당사에 (a) 귀하가 본 약관에 온전하게 동의하고 이에
            의거한 행위를 할 수 있고 (b) 귀하가 본 사이트를 이용하는 것이
            저작권, 트레이드 마크, 초상권 및 기타 제3자의 법적인 권리를 위반하지
            않고 (c) 귀하가 본 사이트 이용과 관련하여 글 게시, 콘텐츠 사용 및
            기타 모든 행위가 법률이나 제3자의 권리를 위반하지 않음을 선언하고
            보장합니다.
          </S.ListItem>
          <S.ListItem>
            1.3 {COMPANY}은 한국에서 개발되고 배포되었습니다. (This app is
            developed and released in Republic of Korea.)
          </S.ListItem>
        </S.UList>
      </S.Box>
      <S.Box>
        <S.SubTitle>2. 서비스 이용 및 제한</S.SubTitle>
        <S.UList>
          <S.ListItem>
            2.1 모든 이용자는 하루 최대 5개의 녹음을 생성할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            2.2 무료 이용자는 1회 녹음당 최대 5분까지 녹음할 수 있으며, 프리미엄
            구독자는 1회 녹음당 최대 20분까지 녹음할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            2.3 당사는 약관 위반, 불법적 이용, 또는 기타 정당한 사유가 있는 경우
            서비스 이용을 제한하거나 회원 자격을 종료시킬 수 있습니다. 이 경우
            등록된 이메일 주소로 사전 통지합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>3. 구독 서비스</S.SubTitle>
        <S.UList>
          <S.ListItem>
            3.1 본 서비스는 무료 플랜과 프리미엄 구독 플랜을 제공합니다.
            <S.UList>
              <S.ListItem>
                (1) 무료 플랜: 기본 녹음 기능(최대 5분), 로컬 저장, 광고 포함
              </S.ListItem>
              <S.ListItem>
                (2) 프리미엄 구독: 확장 녹음(최대 20분), AI 일기 분석, 감정
                분석, 음성 인식(STT), 키워드 분석, 클라우드 백업, 광고 제거
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            3.2 프리미엄 구독은 월간 구독과 연간 구독으로 제공됩니다.
            <S.UList>
              <S.ListItem>
                (1) 월간 구독: 결제일로부터 1개월간 유효하며, 취소하지 않는 한
                매월 자동으로 갱신됩니다.
              </S.ListItem>
              <S.ListItem>
                (2) 연간 구독: 결제일로부터 1년간 유효하며, 취소하지 않는 한
                매년 자동으로 갱신됩니다.
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            3.3 구독 요금은 앱 내 또는 해당 앱스토어에서 확인할 수 있으며,
            당사는 사전 고지 후 요금을 변경할 수 있습니다. 변경된 요금은 다음
            결제 주기부터 적용됩니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>4. 무료 체험</S.SubTitle>
        <S.UList>
          <S.ListItem>
            4.1 신규 가입 이용자에게는 7일간의 무료 체험 기간이 제공될 수
            있습니다. 무료 체험 기간 동안 프리미엄 구독의 모든 기능을 이용할 수
            있습니다.
          </S.ListItem>
          <S.ListItem>4.2 무료 체험은 계정당 1회만 제공됩니다.</S.ListItem>
          <S.ListItem>
            4.3 무료 체험 기간이 만료되면 자동으로 무료 플랜으로 전환되며, 유료
            구독으로 전환하지 않는 한 프리미엄 기능을 이용할 수 없습니다.
          </S.ListItem>
          <S.ListItem>
            4.4 무료 체험 기간 중 유료 구독으로 전환하는 경우, 남은 무료 체험
            기간은 소멸되고 유료 구독이 즉시 시작됩니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>5. 결제 및 자동 갱신</S.SubTitle>
        <S.UList>
          <S.ListItem>
            5.1 프리미엄 구독 결제는 Apple App Store(iOS) 또는 Google Play
            Store(Android)의 인앱 결제를 통해 처리됩니다.
          </S.ListItem>
          <S.ListItem>
            5.2 구독은 현재 결제 주기가 종료되기 최소 24시간 전에 취소하지 않는
            한 동일한 가격으로 자동 갱신됩니다. 자동 갱신 결제는 현재 구독 기간
            종료 24시간 이내에 이루어집니다.
          </S.ListItem>
          <S.ListItem>
            5.3 구독 취소는 다음에서 직접 관리할 수 있습니다:
            <S.UList>
              <S.ListItem>iOS: 설정 → Apple ID → 구독 → 구독 취소</S.ListItem>
              <S.ListItem>
                Android: Google Play 스토어 → 메뉴 → 구독 → 구독 취소
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            5.4 구독을 취소하더라도 이미 결제된 구독 기간이 종료될 때까지는
            프리미엄 기능을 계속 이용할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            5.5 앱을 삭제하는 것만으로는 구독이 취소되지 않습니다. 반드시 위의
            방법으로 구독을 취소해야 합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>6. 환불 정책</S.SubTitle>
        <S.UList>
          <S.ListItem>
            6.1 구독 결제에 대한 환불은 Apple App Store 또는 Google Play Store의
            환불 정책에 따릅니다. 당사는 앱 내에서 직접 환불을 처리하지
            않습니다.
          </S.ListItem>
          <S.ListItem>
            6.2 환불을 요청하려면 다음을 통해 직접 신청하십시오:
            <S.UList>
              <S.ListItem>iOS: Apple 지원(reportaproblem.apple.com)</S.ListItem>
              <S.ListItem>
                Android: Google Play 고객센터(support.google.com/googleplay)
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            6.3 전자상거래 등에서의 소비자보호에 관한 법률에 따라, 구독 시작 후
            7일 이내에 서비스를 이용하지 않은 경우 청약 철회가 가능합니다. 다만,
            이미 서비스를 이용한 경우에는 청약 철회가 제한될 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            6.4 당사의 귀책사유로 서비스를 이용하지 못한 경우, 해당 기간만큼
            구독 기간을 연장하거나 합리적인 보상을 제공합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>7. 광고</S.SubTitle>
        <S.UList>
          <S.ListItem>
            7.1 무료 플랜 이용자에게는 녹음 완료 후 전면 광고가 표시될 수
            있습니다.
          </S.ListItem>
          <S.ListItem>
            7.2 프리미엄 구독자에게는 모든 광고가 표시되지 않습니다.
          </S.ListItem>
          <S.ListItem>
            7.3 광고는 Google AdMob을 통해 제공되며, 광고 제공업체의 개인정보
            처리방침이 적용될 수 있습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>8. 데이터 저장 및 백업</S.SubTitle>
        <S.UList>
          <S.ListItem>
            8.1 무료 이용자의 녹음 파일은 기기 내 로컬 저장소에만 저장됩니다.
            기기 분실, 앱 삭제 또는 기기 변경 시 데이터가 손실될 수 있으며,
            당사는 이에 대해 책임지지 않습니다.
          </S.ListItem>
          <S.ListItem>
            8.2 프리미엄 구독자의 녹음 파일은 로컬 저장소와 함께 Firebase
            클라우드에 자동으로 백업됩니다.
          </S.ListItem>
          <S.ListItem>
            8.3 구독 해지 후에도 기존에 클라우드에 백업된 데이터는 유지됩니다.
            다만, 신규 백업은 불가능하며 클라우드 동기화 기능을 이용할 수
            없습니다.
          </S.ListItem>
          <S.ListItem>
            8.4 최근 1년 이상 앱 로그인 접속 기록이 없는 경우, 클라우드에 저장된
            녹음 파일을 포함한 모든 데이터가 삭제될 수 있습니다. 삭제 전 등록된
            이메일로 사전 안내를 드립니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>9. 프라이버시</S.SubTitle>
        <S.UList>
          <S.ListItem>
            9.1 당사는 서비스 제공을 위해 필요한 범위 내에서 귀하의 개인 정보를
            수집할 수 있습니다. 당사는 귀하의 동의 없이는 귀하의 정보를 당사와
            관련이 없는 그 어떤 제3 기관에 제공하지 않습니다. 다만 당사는 당사의
            권리를 보호하거나 지키기 위해, 제3자의 권리를 보호하거나 지키기 위해
            또는 법에 의해, 법원의 명령이나 소환에 응하기 위해서 등 요청되는
            경우 귀하의 특별한 동의 없이도 귀하의 정보를 넘길 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            9.2 회원님이 녹음하거나 서비스에 저장하는 내용들은 전적으로 귀하의
            책임입니다. 이하의 내용들은 서비스를 통해 녹음, 저장 또는 전송하실
            수 없습니다.
            <S.UList>
              <S.ListItem>(1) 명예훼손 내용</S.ListItem>
              <S.ListItem>
                (2) 특정 인종, 민족 또는 종교집단을 비하하는 내용
              </S.ListItem>
              <S.ListItem>(3) 불법 행위 또는 마약 관련 내용</S.ListItem>
              <S.ListItem>(4) 폭력적이거나 위협적인 내용</S.ListItem>
              <S.ListItem>
                (5) 타인의 개인정보나 저작권을 침해하는 내용
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            9.3 당사는 귀하가 저장한 내용에 대해 사전 검열하지 않으나, 위반
            사항이 확인될 경우 해당 콘텐츠를 삭제하거나 계정을 정지할 수
            있습니다.
          </S.ListItem>
          <S.ListItem>
            9.4 귀하는 가입 시 아이디와 비밀번호를 설정할 수 있습니다. 해당
            정보들에 대한 보안은 온전히 귀하의 책임이며, 보안이 의심되는 상황이
            발생한 경우 즉시 당사에 알려야 할 의무가 있습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>10. 책임 제한</S.SubTitle>
        <S.UList>
          <S.ListItem>
            10.1 당사는 법률이 허용하는 최대 범위 내에서, 이하의 사항으로 인한
            직간접적 손해에 대해 책임을 지지 않습니다:
            <S.UList>
              <S.ListItem>(1) 서비스 이용 또는 이용 불가</S.ListItem>
              <S.ListItem>(2) 서비스를 통해 획득한 정보의 부정확성</S.ListItem>
              <S.ListItem>
                (3) 권한 없는 접근에 의한 데이터 수정 또는 유출
              </S.ListItem>
              <S.ListItem>
                (4) 시스템 오류, 서비스 장애 또는 데이터 손실
              </S.ListItem>
              <S.ListItem>(5) AI 분석 결과의 부정확성</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            10.2 본 서비스는 "있는 그대로" 제공되며, 당사는 서비스의 완전성,
            정확성, 신뢰성 또는 특정 목적에의 적합성에 대해 명시적이거나
            묵시적인 보증을 하지 않습니다.
          </S.ListItem>
          <S.ListItem>
            10.3 AI 기반 감정 분석, 키워드 추출, 음성 인식(STT) 등의 기능은
            참고용으로 제공되며, 의료, 법률, 심리 상담 등 전문적인 조언을
            대체하지 않습니다.
          </S.ListItem>
          <S.ListItem>
            10.4 본 조항은 당사의 고의 또는 중대한 과실로 인한 손해, 생명 및
            신체에 대한 손해에 대한 책임을 제한하지 않습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>11. 지식재산권</S.SubTitle>
        <S.UList>
          <S.ListItem>
            11.1 서비스 내의 모든 콘텐츠(디자인, 로고, 텍스트, 그래픽,
            소프트웨어 등)는 당사 또는 라이선스 제공자의 지식재산권으로
            보호됩니다.
          </S.ListItem>
          <S.ListItem>
            11.2 귀하는 본 서비스의 콘텐츠를 개인적, 비상업적 목적으로만 이용할
            수 있으며, 당사의 사전 서면 동의 없이 복제, 배포, 수정, 파생물 제작
            등을 할 수 없습니다.
          </S.ListItem>
          <S.ListItem>
            11.3 귀하가 녹음한 콘텐츠에 대한 소유권은 귀하에게 있습니다. 다만,
            서비스 제공을 위해 필요한 범위 내에서 당사가 해당 콘텐츠를 저장,
            처리, 분석할 수 있는 권한을 부여합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>12. 개인정보 처리</S.SubTitle>
        <S.UList>
          <S.ListItem>
            12.1 당사는 개인정보 보호법 및 관련 법령에 따라 개인정보를
            처리합니다. 자세한 내용은 별도의 개인정보처리방침을 참조하십시오.
          </S.ListItem>
          <S.ListItem>
            12.2 계정 삭제 요청 시 지체 없이 해당 개인정보를 파기합니다. 다만,
            관련 법령에 따라 일정 기간 보존이 필요한 정보는 해당 기간 동안 보관
            후 파기합니다.
            <S.UList>
              <S.ListItem>
                전자상거래 계약 및 청약철회, 대금결제, 재화 등 공급기록: 5년
              </S.ListItem>
              <S.ListItem>소비자 불만 또는 분쟁처리 기록: 3년</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            12.3 수집된 개인정보는 서비스 제공 목적 외의 용도로 이용되지
            않습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>13. 서비스 변경 및 중단</S.SubTitle>
        <S.UList>
          <S.ListItem>
            13.1 당사는 서비스 개선, 기술적 사양 변경 등의 사유로 서비스의 전부
            또는 일부를 수정하거나 중단할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            13.2 서비스 내용의 중요한 변경 또는 서비스 중단 시, 최소 30일 전에
            앱 내 공지 또는 등록된 이메일을 통해 사전 안내합니다. 다만, 긴급한
            시스템 점검, 보안 문제 등 불가피한 경우에는 사후 통지할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            13.3 서비스가 완전히 종료되는 경우, 유료 구독자에게는 미사용 구독
            기간에 대한 합리적인 보상 또는 환불을 제공합니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>14. 약관의 변경</S.SubTitle>
        <S.UList>
          <S.ListItem>
            14.1 당사는 필요한 경우 관련 법령을 위반하지 않는 범위에서 본 약관을
            변경할 수 있습니다.
          </S.ListItem>
          <S.ListItem>
            14.2 약관이 변경되는 경우, 변경 내용과 적용 일자를 명시하여 적용일
            7일 전부터 앱 내 공지 또는 이메일을 통해 고지합니다. 이용자에게
            불리한 변경의 경우에는 최소 30일 전에 고지합니다.
          </S.ListItem>
          <S.ListItem>
            14.3 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우,
            변경된 약관에 동의한 것으로 간주합니다. 변경된 약관에 동의하지 않는
            경우, 서비스 이용을 중단하고 계정을 삭제할 수 있습니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>15. 분쟁 해결</S.SubTitle>
        <S.UList>
          <S.ListItem>
            15.1 본 약관은 대한민국 법률에 따라 해석되고 적용됩니다.
          </S.ListItem>
          <S.ListItem>
            15.2 서비스 이용과 관련하여 분쟁이 발생한 경우, 당사와 이용자는
            원만한 해결을 위해 성실히 협의합니다.
          </S.ListItem>
          <S.ListItem>
            15.3 협의가 이루어지지 않는 경우, 관할 법원은 당사의 본점 소재지를
            관할하는 법원으로 합니다.
          </S.ListItem>
          <S.ListItem>
            15.4 서비스 이용 관련 문의 및 불만 사항은 {CS_EMAIL}으로 연락 주시기
            바랍니다.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>부칙</S.SubTitle>
        <S.UList>
          <S.ListItem>본 약관은 2025년 1월 1일부터 시행됩니다.</S.ListItem>
        </S.UList>
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
    list-style-type: ${(props: any) => (props.type ? props.type : "disc")};
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
