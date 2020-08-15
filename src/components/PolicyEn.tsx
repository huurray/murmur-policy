import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function ({ COMPANY, CS_EMAIL }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <S.Box>
        <S.SubTitle>Intro</S.SubTitle>
        <S.Text>
          Welcome to {COMPANY} that is a diary service for recording today's
          feelings and stories (hereinafter referred to as "service"). The
          following is "Midnight Plan" (CEO Junhyuk Heo, CEO Junhyeok Heo) reads
          the terms and conditions of your {COMPANY} (the "Site"). Contains.
          “Midnight Plan” (hereinafter “Company” or “We”) As a registered
          company, the business number is 489-03-01218. Please read the
          following terms carefully Read and understand clearly. When you use
          the site, Regardless of the terms of use (hereinafter "Terms of Use"),
          Consider it. If you do not agree to these terms and conditions, You
          cannot collect or continue to use the site. In violation of the
          following terms and conditions Using the site may result in civil or
          criminal penalties. Company You reserve the right to change the terms
          and conditions at any time. Keep you on site If you use it, you are
          deemed to agree to the changed terms and conditions. therefore, Users
          should review any changes to the terms and conditions. Inquiries In
          case, please email us immediately at {CS_EMAIL}.
        </S.Text>
      </S.Box>
      <S.Box>
        <S.SubTitle>1. General Terms</S.SubTitle>
        <S.UList>
          <S.ListItem>
            1.1 This site is intended for entertainment purposes and It is not
            meant to serve a purpose.
          </S.ListItem>
          <S.ListItem>
            1.2 You hereby give us (a) your full consent to these Terms and And
            (b) your use of this site Do not violate copyright, trademark,
            portrait rights and other legal rights of third parties. Without (c)
            posting articles, use of content, and Declare that all other acts do
            not violate the law or the rights of third parties, Guaranteed.
          </S.ListItem>
          <S.ListItem>
            1.3 {COMPANY} was developed and released in Republic of Korea.)
          </S.ListItem>
        </S.UList>
      </S.Box>
      <S.Box>
        <S.SubTitle>
          2. Non-commercial usage costs by members and users
        </S.SubTitle>
        <S.UList>
          <S.ListItem>
            2.1 About the cost, content and period of the site and services at
            the time of your subscription The contents are subject to change
            from time to time and will be announced through electronic
            notification. Our company You can deny access to your site without
            special reason and sign up Upon notification to the registered email
            address or other email address, membership You can also shut it
            down. Membership for breach of our terms and conditions In case of
            termination, refund for the remaining unused service period Does not
            provide.
          </S.ListItem>
          <S.ListItem>
            2.2 In case of violation of the law related to payment of this site,
            the member or Users are immediately restricted from using the site
            and the law in relation to this offense In the case of investigation
            cooperation from the authorities, the member or user Share
            information.
          </S.ListItem>
          <S.ListItem>
            2.3 We have a third party responsible for in-site payments on our
            behalf. You can use it. These third party organizations are not
            subject to their own privacy policies. Accordingly, members or users
            are responsible for protecting their personal information related to
            payment. There is.
          </S.ListItem>
          <S.ListItem>
            2.4 This site should be used for the personal use of individual
            members and users. And should not be used for commercial purposes.
            Institutions, companies and Businesses should not sign up as members
            of this site and The service should not be used for the following
            purposes. Commercial to members Sending emails, advertising for
            other websites and services, or Using personally identifiable
            information for commercial purposes, this site is illegal and If
            used for any purpose other than that permitted, unauthorized framing
            and In case of linking to site links, sending commercial messages,
            etc. Proceeds, and the relevant laws such as civil and criminal Not
            only taking measures, but also terminating membership according to
            our own authority. You can also take action. Email or unsolicited
            commercial messages In order to prevent sending via conversation, we
            may send from certain accounts and Take reasonable measures, such as
            investigating the number of emails and messages received can.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle> 3. Privacy</S.SubTitle>
        <S.UList>
          <S.ListItem>
            3.1 We do not post on the site, but we do not disclose certain other
            personal information about you. Can be collected. We transfer your
            information to us without your consent. We do not provide it to any
            third party that is not related. However, we To protect or defend
            rights, to protect or defend the rights of third parties Or, by law,
            to respond to a court order or subpoena, etc. If so, we may hand
            over your information without your specific consent. Also To the
            extent necessary for the operation of this site, we We provide
            information about users to third parties.
          </S.ListItem>
          <S.ListItem>
            3.2 By providing photos and other personal information on the site,
            you Persistent, international, not exclusive, but without special
            royalties Personal information may be used, reproduced, posted,
            corrected, distributed and promoted in the media. Is considered to
            be allowed.
          </S.ListItem>
          <S.ListItem>
            3.3 The content that members receive, post, and transmit on the site
            Responsibility. The following contents can be received, posted or
            transmitted on the site. There is not.
            <S.UList>
              <S.ListItem>3.3.1 defamation.</S.ListItem>
              <S.ListItem>
                3.3.2 Behavior that generalizes and degrades a race, ethnicity
                or religious group Etc.
              </S.ListItem>
              <S.ListItem>
                3.3.3 Erotic photos or photos that appear to be under 18 years
                of age.
              </S.ListItem>
              <S.ListItem>3.3.4 Description of illegal drug use.</S.ListItem>
              <S.ListItem>3.3.5 Use of violent language or images.</S.ListItem>
              <S.ListItem>
                3.3.6 Violence is acceptable or nicely described.
              </S.ListItem>
              <S.ListItem>6.3.7 Provides links to commercial sites.</S.ListItem>
              <S.ListItem>
                3.3.8 Individuals other than those requested or specially
                requested when signing up for the site Post contact information.
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            3.4 We do not provide specific texts at the request of you or anyone
            else. There is no obligation to post. In addition, we are fully
            committed to our own At your discretion, you may revise or delete
            anything you post or submit. There is.
          </S.ListItem>
          <S.ListItem>
            3.5 When using this site, the website or third party website Links
            allow you to access content provided by other users or third
            parties. can. We believe that content provided by third parties may
            be misleading, Incomplete, misinformed, aggressive, unhealthy or
            otherwise We do not have administrative rights and are not
            responsible for them.
          </S.ListItem>
          <S.ListItem>
            3.6 You can set up a single ID and password when signing up. The
            security of such information is entirely your responsibility. You
            are (a) Log out after each session on the site ends and (b) your ID
            and In the event of a suspicious security situation using a
            password, immediately contact us. You have a duty to inform.
          </S.ListItem>
        </S.UList>
      </S.Box>
      <S.Box>
        <S.SubTitle> 4. Limitation of Liability</S.SubTitle>
        <S.UList>
          <S.ListItem>
            4.1 We are committed even if we are notified in advance of certain
            losses Direct or indirect, general, special, or as a result of or in
            connection with the following examples Liability for any and all
            other damages resulting from, exemplary and punitive loss Does not
            lose. (a) Use of this site and inability to use (b) Use of this site
            Information through or obtained from the site or any products,
            services and information (C) Access to, correction of information
            provided by you without authorization And (d) information or program
            errors, service failures and alternative services Loss due to
            purchase (e) Name and conduct of the service provider or third party
            on the site And omissions (f) in all spaces online and offline in
            connection with the use of the site. Other members who have
            subscribed to this service or who have been introduced by the site
            Arising from the actions of you or others in conversations or
            meetings with members Injury, psychological pain, death, and all
            other actions (g) By using this site Things that occur in or in
            connection with.
          </S.ListItem>
          <S.ListItem>
            4.2 We, regardless of our reasonable attention, pursuant to these
            Terms and Conditions We are not responsible for any failure or delay
            in service provision.
          </S.ListItem>
          <S.ListItem>
            4.3 Your use of the site is entirely your own responsibility. It
            happens. The scope of this site "as is" and "usable" Service within.
            Whether expressly or explicitly regarding the use of the site All
            warranties and commercial rights, whether implied or not And all
            rights protected by law are delegated by you.
          </S.ListItem>
          <S.ListItem>
            4.4 We make no guarantees that (a) this site Whether it meets the
            requirements (b) the service of this site is uninterrupted, Timely,
            safe and error-free. (c) Site The accuracy and reliability of
            information obtained through (d) purchase through the site or The
            quality of goods, services, information and other things you have
            obtained will meet your expectations. Whether (e) the information
            you provide or we collect is never Whether or not to disclose (f)
            any information or software errors will be corrected. Whether or
            not.
          </S.ListItem>
          <S.ListItem>
            4.5 When you use this site to access or transmit information If so,
            this is done at your own discretion and responsibility. That
            information Any loss or damage caused by access or transmission is
            entirely One is your responsibility.
          </S.ListItem>
          <S.ListItem>
            4.6 Document information or data that we receive orally or in
            writing is No rights arise unless otherwise stated in the terms and
            conditions.
          </S.ListItem>
          <S.ListItem>
            4.7 This section and other provisions that exclude or limit our
            liability Our executives, managers, employees, subcontractors,
            agents, and Applies to partners. Any part of these terms and
            conditions Death, injury, and fraudulent misrepresentation and other
            legal It does not exclude or limit liability for parts that cannot
            be excluded or limited. not.
          </S.ListItem>
        </S.UList>
      </S.Box>
      <S.Box>
        <S.SubTitle> 4. Ownership</S.SubTitle>
        <S.UList>
          <S.ListItem>
            4.1 All contents on the site are publicity rights, copyrights,
            trademarks, Protection of service marks, patent rights, trade
            secrets and other trademark rights and laws I receive it. Except
            where expressly authorized by us You sell, license, rent, modify,
            distribute, and sell the contents of this site. Reproduction,
            reproduction, transmission, public publication, public reenactment,
            publication, adaptation, modification and You cannot produce
            derivatives. However, you can It can be used for general, personal,
            and non-commercial purposes.
          </S.ListItem>
          <S.ListItem>
            4.2 Extracting and accumulating data or other information of the
            site through the system, Download, collect, or edit directly or
            indirectly one time or several times. It should not be done, and
            this method can be done manually or by running other programs such
            as None of the methods used are allowed. Other website or written In
            addition, our logo and all trademarks are used as meta tags, etc. It
            should not be used. Parts of this site without our prior written
            consent (Or link to site content through links) must not be
            disclosed.
          </S.ListItem>
        </S.UList>
      </S.Box>
      <S.Box>
        <S.SubTitle> 5. Personal information</S.SubTitle>
        <S.UList>
          <S.ListItem>
            4.1 In principle, if an individual wishes to delete an account, The
            personal information will be destroyed. The procedure, deadline and
            method of destruction are as follows: The same.
          </S.ListItem>
          <S.ListItem>
            4.2 Personal information transferred to DB is different It is not
            used for any purpose.
          </S.ListItem>
          <S.ListItem>
            4.3 {COMPANY} received consent from the data subject when collecting
            personal information Period of retention and use of personal
            information or period of retention and use of personal information
            according to laws and regulations We process and retain personal
            information within. Withdrawal of contracts and subscriptions in
            e-commerce transactions, Payment, goods supply record: 5 years
          </S.ListItem>
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
