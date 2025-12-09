import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function ({ COMPANY, CS_EMAIL }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <S.Box>
        <S.SubTitle>1. Purpose of Privacy Policy</S.SubTitle>
        <S.Text>
          {COMPANY} (hereinafter "Company" or "we") values the personal
          information of users in providing AI-based voice diary app services
          (hereinafter "Service") and complies with applicable privacy laws and
          regulations. This Privacy Policy explains how your personal
          information is collected, used, stored, and destroyed.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>2. Personal Information We Collect</S.SubTitle>
        <S.Text>
          We collect the following personal information to provide our services.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Required Information</strong>
            <S.UList>
              <S.ListItem>
                Account information: Email address, password (stored encrypted)
              </S.ListItem>
              <S.ListItem>
                Device information: Device ID, operating system, app version
              </S.ListItem>
              <S.ListItem>
                Service usage records: Recording date/time, access logs, app
                usage history
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>Optional Information (Premium Subscription)</strong>
            <S.UList>
              <S.ListItem>
                Voice recording data: Recording files for cloud backup
              </S.ListItem>
              <S.ListItem>
                AI analysis data: Emotion analysis results, speech-to-text (STT)
                transcripts, keyword analysis results
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>Payment Information</strong>
            <S.UList>
              <S.ListItem>
                Subscription information: Subscription type, payment date,
                subscription status
              </S.ListItem>
              <S.ListItem>
                Payment information: Transaction ID (actual payment information
                is processed by Apple/Google)
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            <strong>Automatically Collected Information</strong>
            <S.UList>
              <S.ListItem>IP address, cookies, access time</S.ListItem>
              <S.ListItem>
                Service usage patterns and statistical information
              </S.ListItem>
            </S.UList>
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>3. How We Collect Information</S.SubTitle>
        <S.UList>
          <S.ListItem>
            Direct input by users during registration and service use
          </S.ListItem>
          <S.ListItem>
            Automatically generated and collected during app use (log data,
            device information)
          </S.ListItem>
          <S.ListItem>
            Provided by platforms when linking social logins (Google, Apple)
          </S.ListItem>
          <S.ListItem>
            Collected through email during customer inquiries and support
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>4. Purpose of Using Personal Information</S.SubTitle>
        <S.Text>
          Collected personal information is used only for the following
          purposes.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Service Provision</strong>: Voice recording storage, AI
            diary analysis, emotion analysis, speech-to-text (STT), keyword
            analysis, cloud backup and synchronization
          </S.ListItem>
          <S.ListItem>
            <strong>Member Management</strong>: Identity verification for
            membership services, registration and registration limit management,
            free trial management
          </S.ListItem>
          <S.ListItem>
            <strong>Subscription and Payment Management</strong>: Processing
            paid subscriptions, payment verification, subscription status
            management
          </S.ListItem>
          <S.ListItem>
            <strong>Service Improvement</strong>: Analyzing service usage
            statistics, developing new services, providing personalized services
          </S.ListItem>
          <S.ListItem>
            <strong>Customer Support</strong>: Responding to customer inquiries,
            handling complaints, delivering notices
          </S.ListItem>
          <S.ListItem>
            <strong>Legal Compliance</strong>: Fulfilling obligations under
            applicable laws
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>5. Retention Period of Personal Information</S.SubTitle>
        <S.Text>
          We destroy personal information without delay once the purpose of
          collection and use has been achieved. However, in the following cases,
          we retain information for the specified period.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Account Deletion</strong>: Immediate destruction (except for
            legal retention requirements below)
          </S.ListItem>
          <S.ListItem>
            <strong>No Login for 1 Year or More</strong>: All data including
            recordings stored in the cloud will be deleted (prior email notice
            before deletion)
          </S.ListItem>
          <S.ListItem>
            <strong>Legal Retention Requirements</strong>
            <S.UList>
              <S.ListItem>
                Records of contracts or withdrawal: 5 years (Act on Consumer
                Protection in Electronic Commerce)
              </S.ListItem>
              <S.ListItem>
                Records of payment and supply of goods: 5 years (Act on Consumer
                Protection in Electronic Commerce)
              </S.ListItem>
              <S.ListItem>
                Records of consumer complaints or dispute resolution: 3 years
                (Act on Consumer Protection in Electronic Commerce)
              </S.ListItem>
              <S.ListItem>
                Access logs: 3 months (Protection of Communications Secrets Act)
              </S.ListItem>
            </S.UList>
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>6. Provision of Personal Information to Third Parties</S.SubTitle>
        <S.Text>
          We do not provide personal information to third parties without user
          consent, except in the following cases.
        </S.Text>
        <S.UList>
          <S.ListItem>When users have given prior consent</S.ListItem>
          <S.ListItem>
            When required by law or requested by investigative agencies in
            accordance with legal procedures
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>7. Entrustment of Personal Information Processing</S.SubTitle>
        <S.Text>
          We entrust personal information processing to the following parties
          for service provision.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Google Firebase</strong>: Cloud data storage and
            synchronization, user authentication
          </S.ListItem>
          <S.ListItem>
            <strong>Google AdMob</strong>: Advertising services (for free users)
          </S.ListItem>
          <S.ListItem>
            <strong>Apple App Store / Google Play Store</strong>: In-app payment
            processing
          </S.ListItem>
        </S.UList>
        <S.Text>
          We prohibit the processing of personal information beyond the purpose
          of the entrusted work and ensure that user personal information is
          safely managed through technical and administrative protective
          measures, restrictions on re-entrustment, and supervision of
          trustees.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>8. International Transfer of Personal Information</S.SubTitle>
        <S.Text>
          We may transfer user personal information overseas to provide cloud
          services.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Recipient</strong>: Google LLC (Firebase)
          </S.ListItem>
          <S.ListItem>
            <strong>Country</strong>: United States
          </S.ListItem>
          <S.ListItem>
            <strong>Items Transferred</strong>: Voice recording files, AI
            analysis data, account information
          </S.ListItem>
          <S.ListItem>
            <strong>Purpose of Transfer</strong>: Cloud backup and data
            synchronization
          </S.ListItem>
          <S.ListItem>
            <strong>Retention Period</strong>: Until account deletion or
            termination of entrustment contract
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>9. Destruction of Personal Information</S.SubTitle>
        <S.Text>
          We destroy personal information without delay when it becomes
          unnecessary due to expiration of the retention period or achievement
          of processing purpose.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Destruction Procedure</strong>: When a user requests account
            deletion or personal information deletion, we store it for a certain
            period according to internal policies and applicable laws, then
            destroy it.
          </S.ListItem>
          <S.ListItem>
            <strong>Destruction Method</strong>: Electronic files are deleted
            using technical methods that prevent data recovery. Printed personal
            information is shredded or incinerated.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>10. Rights of Data Subjects</S.SubTitle>
        <S.Text>Users may exercise the following rights.</S.Text>
        <S.UList>
          <S.ListItem>Request to access personal information</S.ListItem>
          <S.ListItem>Request for correction of errors</S.ListItem>
          <S.ListItem>Request for deletion</S.ListItem>
          <S.ListItem>Request to suspend processing</S.ListItem>
        </S.UList>
        <S.Text>
          These rights can be exercised directly through the "Settings" menu in
          the app or by sending an email to {CS_EMAIL}. We will take action and
          notify you of the results within 10 days of receiving your request.
        </S.Text>
        <S.Text>
          When you delete your account, locally stored data will be deleted when
          you uninstall the app, and data stored in the cloud will be destroyed
          without delay after your deletion request.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>11. Security Measures for Personal Information</S.SubTitle>
        <S.Text>
          We take the following measures to safely manage user personal
          information.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Administrative Measures</strong>: Establishing and
            implementing internal management plans, minimizing and training
            employees handling personal information
          </S.ListItem>
          <S.ListItem>
            <strong>Technical Measures</strong>: Managing access rights to
            personal information processing systems, installing access control
            systems, encrypting unique identification information, installing
            security programs
          </S.ListItem>
          <S.ListItem>
            <strong>Physical Measures</strong>: Storing documents and auxiliary
            storage media containing personal information in secure locations
            with locks
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>12. Use of Cookies</S.SubTitle>
        <S.Text>
          We use cookies to provide personalized services to users. Cookies are
          small pieces of data sent to your browser by a website.
        </S.Text>
        <S.UList>
          <S.ListItem>
            <strong>Purpose of Cookies</strong>: Analyzing access frequency and
            visit times, understanding usage patterns, providing customized
            services
          </S.ListItem>
          <S.ListItem>
            <strong>How to Refuse Cookies</strong>: You can refuse cookie
            storage through your browser settings. However, if you refuse cookie
            storage, you may have difficulty using some services.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>13. Advertising</S.SubTitle>
        <S.UList>
          <S.ListItem>
            Free users may see advertisements through Google AdMob.
          </S.ListItem>
          <S.ListItem>
            Advertising identifiers may be collected during the advertising
            process and are processed according to Google's Privacy Policy.
          </S.ListItem>
          <S.ListItem>
            Premium subscribers will not see any advertisements.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>14. Privacy Officer</S.SubTitle>
        <S.Text>
          We have designated a Privacy Officer to oversee personal information
          processing and handle complaints and remedies related to personal
          information processing.
        </S.Text>
        <S.UList>
          <S.ListItem>Privacy Officer: Junhyuk Heo</S.ListItem>
          <S.ListItem>Contact: {CS_EMAIL}</S.ListItem>
        </S.UList>
        <S.Text>
          Users may contact the Privacy Officer regarding all personal
          information protection inquiries, complaints, and remedies that arise
          during service use. We will respond to and process user inquiries
          without delay.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>15. Remedies for Rights Infringement</S.SubTitle>
        <S.Text>
          Users may apply for dispute resolution or consultation to the
          following organizations for relief from personal information
          infringement.
        </S.Text>
        <S.UList>
          <S.ListItem>
            Personal Information Dispute Mediation Committee: 1833-6972
            (www.kopico.go.kr)
          </S.ListItem>
          <S.ListItem>
            Personal Information Infringement Report Center: 118
            (privacy.kisa.or.kr)
          </S.ListItem>
          <S.ListItem>
            Supreme Prosecutors' Office: 1301 (www.spo.go.kr)
          </S.ListItem>
          <S.ListItem>
            National Police Agency: 182 (ecrm.cyber.go.kr)
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>16. Changes to Privacy Policy</S.SubTitle>
        <S.Text>
          This Privacy Policy may be updated, deleted, or modified due to
          changes in laws, policies, or security technology. When changed, we
          will announce the changes through in-app notices or email at least 7
          days before the effective date. However, for significant changes to
          user rights, we will provide at least 30 days' notice.
        </S.Text>
      </S.Box>

      <S.Box>
        <S.SubTitle>Supplementary Provisions</S.SubTitle>
        <S.Text>
          This Privacy Policy is effective as of January 1, 2025.
        </S.Text>
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
