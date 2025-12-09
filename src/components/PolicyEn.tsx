import React, { useEffect } from "react";
import styled from "styled-components";

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
        <S.SubTitle>2. Service Usage and Restrictions</S.SubTitle>
        <S.UList>
          <S.ListItem>
            2.1 All users may create up to 5 recordings per day.
          </S.ListItem>
          <S.ListItem>
            2.2 Free users may record up to 5 minutes per recording, while
            Premium subscribers may record up to 20 minutes per recording.
          </S.ListItem>
          <S.ListItem>
            2.3 We may restrict service usage or terminate membership for
            violation of terms, illegal use, or other legitimate reasons. In
            such cases, prior notice will be sent to your registered email
            address.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>3. Subscription Services</S.SubTitle>
        <S.UList>
          <S.ListItem>
            3.1 This service offers a Free Plan and Premium Subscription Plans.
            <S.UList>
              <S.ListItem>
                (1) Free Plan: Basic recording (up to 5 minutes), local storage,
                includes advertisements
              </S.ListItem>
              <S.ListItem>
                (2) Premium Subscription: Extended recording (up to 20 minutes),
                AI diary analysis, emotion analysis, speech-to-text (STT),
                keyword analysis, cloud backup, ad-free experience
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            3.2 Premium subscriptions are available as monthly or yearly plans.
            <S.UList>
              <S.ListItem>
                (1) Monthly Subscription: Valid for 1 month from the payment
                date, automatically renews each month unless canceled.
              </S.ListItem>
              <S.ListItem>
                (2) Yearly Subscription: Valid for 1 year from the payment date,
                automatically renews each year unless canceled.
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            3.3 Subscription fees can be found in the app or on the respective
            app store. We may change fees with prior notice, and changed fees
            will apply from the next billing cycle.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>4. Free Trial</S.SubTitle>
        <S.UList>
          <S.ListItem>
            4.1 New users may be offered a 7-day free trial period. During the
            free trial, you can access all Premium subscription features.
          </S.ListItem>
          <S.ListItem>
            4.2 The free trial is available only once per account.
          </S.ListItem>
          <S.ListItem>
            4.3 When the free trial expires, you will automatically be converted
            to the Free Plan and will not be able to use Premium features unless
            you subscribe to a paid plan.
          </S.ListItem>
          <S.ListItem>
            4.4 If you convert to a paid subscription during the free trial, the
            remaining trial period will be forfeited and the paid subscription
            will begin immediately.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>5. Payment and Auto-Renewal</S.SubTitle>
        <S.UList>
          <S.ListItem>
            5.1 Premium subscription payments are processed through in-app
            purchases via Apple App Store (iOS) or Google Play Store (Android).
          </S.ListItem>
          <S.ListItem>
            5.2 Subscriptions automatically renew at the same price unless
            canceled at least 24 hours before the end of the current billing
            period. The auto-renewal charge will be made within 24 hours of the
            end of the current subscription period.
          </S.ListItem>
          <S.ListItem>
            5.3 You can manage subscription cancellation directly from:
            <S.UList>
              <S.ListItem>
                iOS: Settings → Apple ID → Subscriptions → Cancel
              </S.ListItem>
              <S.ListItem>
                Android: Google Play Store → Menu → Subscriptions → Cancel
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            5.4 Even if you cancel your subscription, you can continue to use
            Premium features until the end of your already-paid subscription
            period.
          </S.ListItem>
          <S.ListItem>
            5.5 Deleting the app does not cancel your subscription. You must
            cancel through the methods described above.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>6. Refund Policy</S.SubTitle>
        <S.UList>
          <S.ListItem>
            6.1 Refunds for subscription payments are subject to the refund
            policies of Apple App Store or Google Play Store. We do not process
            refunds directly within the app.
          </S.ListItem>
          <S.ListItem>
            6.2 To request a refund, please contact:
            <S.UList>
              <S.ListItem>
                iOS: Apple Support (reportaproblem.apple.com)
              </S.ListItem>
              <S.ListItem>
                Android: Google Play Help Center (support.google.com/googleplay)
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            6.3 If you are unable to use the service due to our fault, we will
            extend your subscription period accordingly or provide reasonable
            compensation.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>7. Advertisements</S.SubTitle>
        <S.UList>
          <S.ListItem>
            7.1 Free Plan users may see interstitial advertisements after
            completing a recording.
          </S.ListItem>
          <S.ListItem>
            7.2 Premium subscribers will not see any advertisements.
          </S.ListItem>
          <S.ListItem>
            7.3 Advertisements are provided through Google AdMob, and the
            advertising provider's privacy policy may apply.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>8. Data Storage and Backup</S.SubTitle>
        <S.UList>
          <S.ListItem>
            8.1 Free users' recordings are stored only in local storage on the
            device. Data may be lost if the device is lost, the app is deleted,
            or the device is changed. We are not responsible for such data loss.
          </S.ListItem>
          <S.ListItem>
            8.2 Premium subscribers' recordings are automatically backed up to
            Firebase cloud storage in addition to local storage.
          </S.ListItem>
          <S.ListItem>
            8.3 Data previously backed up to the cloud will be retained even
            after subscription cancellation. However, new backups will not be
            possible and cloud sync features will be unavailable.
          </S.ListItem>
          <S.ListItem>
            8.4 If there is no app login activity for more than 1 year, all data
            including recordings stored in the cloud may be deleted. Prior
            notice will be sent to your registered email before deletion.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>9. Privacy</S.SubTitle>
        <S.UList>
          <S.ListItem>
            9.1 We may collect your personal information to the extent necessary
            for providing the service. We do not provide your information to any
            third party unrelated to us without your consent. However, we may
            disclose your information without your specific consent to protect
            our rights, protect the rights of third parties, or to comply with
            legal requirements such as court orders or subpoenas.
          </S.ListItem>
          <S.ListItem>
            9.2 You are solely responsible for content you record or store
            through the service. The following content may not be recorded,
            stored, or transmitted through the service:
            <S.UList>
              <S.ListItem>(1) Defamatory content</S.ListItem>
              <S.ListItem>
                (2) Content that disparages specific races, ethnicities, or
                religious groups
              </S.ListItem>
              <S.ListItem>
                (3) Illegal activities or drug-related content
              </S.ListItem>
              <S.ListItem>(4) Violent or threatening content</S.ListItem>
              <S.ListItem>
                (5) Content that infringes on others' personal information or
                copyrights
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            9.3 We do not pre-screen content you store, but we may delete
            content or suspend accounts if violations are confirmed.
          </S.ListItem>
          <S.ListItem>
            9.4 You may set up an ID and password when registering. The security
            of this information is entirely your responsibility, and you must
            notify us immediately if you suspect a security breach.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>10. Limitation of Liability</S.SubTitle>
        <S.UList>
          <S.ListItem>
            10.1 To the maximum extent permitted by law, we are not liable for
            direct or indirect damages arising from:
            <S.UList>
              <S.ListItem>(1) Use or inability to use the service</S.ListItem>
              <S.ListItem>
                (2) Inaccuracy of information obtained through the service
              </S.ListItem>
              <S.ListItem>
                (3) Unauthorized access, modification, or disclosure of data
              </S.ListItem>
              <S.ListItem>
                (4) System errors, service failures, or data loss
              </S.ListItem>
              <S.ListItem>(5) Inaccuracy of AI analysis results</S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            10.2 This service is provided "as is," and we make no express or
            implied warranties regarding the completeness, accuracy,
            reliability, or fitness for a particular purpose of the service.
          </S.ListItem>
          <S.ListItem>
            10.3 AI-based features such as emotion analysis, keyword extraction,
            and speech-to-text (STT) are provided for reference only and do not
            replace professional advice in medical, legal, or psychological
            counseling matters.
          </S.ListItem>
          <S.ListItem>
            10.4 This section does not limit our liability for damages caused by
            our willful misconduct or gross negligence, or for damages to life
            or body.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>11. Intellectual Property</S.SubTitle>
        <S.UList>
          <S.ListItem>
            11.1 All content within the service (design, logos, text, graphics,
            software, etc.) is protected by the intellectual property rights of
            us or our licensors.
          </S.ListItem>
          <S.ListItem>
            11.2 You may use the content of this service only for personal,
            non-commercial purposes and may not reproduce, distribute, modify,
            or create derivative works without our prior written consent.
          </S.ListItem>
          <S.ListItem>
            11.3 You retain ownership of the content you record. However, you
            grant us the right to store, process, and analyze such content to
            the extent necessary for providing the service.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>12. Personal Information Processing</S.SubTitle>
        <S.UList>
          <S.ListItem>
            12.1 We process personal information in accordance with applicable
            privacy laws and regulations. Please refer to our separate Privacy
            Policy for details.
          </S.ListItem>
          <S.ListItem>
            12.2 When you request account deletion, we will promptly destroy
            your personal information. However, information required to be
            retained by applicable laws will be retained for the required period
            before destruction.
            <S.UList>
              <S.ListItem>
                E-commerce contract, withdrawal, payment, and supply records: 5
                years
              </S.ListItem>
              <S.ListItem>
                Consumer complaint or dispute resolution records: 3 years
              </S.ListItem>
            </S.UList>
          </S.ListItem>
          <S.ListItem>
            12.3 Collected personal information will not be used for purposes
            other than providing the service.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>13. Service Changes and Termination</S.SubTitle>
        <S.UList>
          <S.ListItem>
            13.1 We may modify or discontinue all or part of the service for
            reasons such as service improvement or technical specification
            changes.
          </S.ListItem>
          <S.ListItem>
            13.2 For significant changes to service content or service
            termination, we will provide at least 30 days' prior notice through
            in-app announcements or registered email. However, in unavoidable
            circumstances such as urgent system maintenance or security issues,
            we may provide notice afterward.
          </S.ListItem>
          <S.ListItem>
            13.3 If the service is completely terminated, paid subscribers will
            receive reasonable compensation or refunds for unused subscription
            periods.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>14. Changes to Terms</S.SubTitle>
        <S.UList>
          <S.ListItem>
            14.1 We may change these Terms as necessary within the scope that
            does not violate applicable laws.
          </S.ListItem>
          <S.ListItem>
            14.2 When the Terms are changed, we will notify you of the changes
            and effective date at least 7 days before the effective date through
            in-app announcements or email. For changes unfavorable to users, we
            will provide at least 30 days' notice.
          </S.ListItem>
          <S.ListItem>
            14.3 If you continue to use the service after the effective date of
            the changed Terms, you will be deemed to have agreed to the changed
            Terms. If you do not agree to the changed Terms, you may stop using
            the service and delete your account.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>15. Dispute Resolution</S.SubTitle>
        <S.UList>
          <S.ListItem>
            15.1 These Terms shall be interpreted and applied in accordance with
            the laws of the Republic of Korea.
          </S.ListItem>
          <S.ListItem>
            15.2 In case of disputes arising from the use of the service, we and
            the user shall negotiate in good faith for amicable resolution.
          </S.ListItem>
          <S.ListItem>
            15.3 If negotiation fails, the competent court shall be the court
            having jurisdiction over our principal place of business.
          </S.ListItem>
          <S.ListItem>
            15.4 For inquiries and complaints regarding service usage, please
            contact us at {CS_EMAIL}.
          </S.ListItem>
        </S.UList>
      </S.Box>

      <S.Box>
        <S.SubTitle>Supplementary Provisions</S.SubTitle>
        <S.UList>
          <S.ListItem>
            These Terms shall be effective from January 1, 2025.
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
