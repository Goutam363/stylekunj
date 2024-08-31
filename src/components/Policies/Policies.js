import Policy from "./Policy";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Policies() {
  const policies = [
    {
      header: "Privacy Policy",
      body: (
        <>
          At Ewabey, we are committed to protecting the privacy and security of
          our users' personal information. This Privacy Policy outlines how we
          collect, use, disclose, and protect the information we collect through
          our website and services.
          <ol>
            <li>
              <strong>Information We Collect</strong>
              <ul>
                <li>
                  <strong>Personal Information: </strong>When you sign up for an
                  account on Ewabey, we collect certain personal information
                  such as your name, email address, and contact details.
                </li>
                <li>
                  <strong>Login Information: </strong>We collect login
                  credentials, including usernames and hashed passwords, to
                  authenticate users and secure their accounts.
                </li>
                <li>
                  <strong>Usage Information: </strong>We may collect information
                  about how you interact with our website and services, such as
                  the pages you visit, the features you use, and your
                  preferences.
                </li>
                <li>
                  <strong>Cookies: </strong>We use cookies to enhance user
                  experience, analyze website traffic, and personalize content.
                  Cookies are small text files stored on your device that track
                  your activity on our website.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Your Information</strong>
              <ul>
                <li>
                  <strong>Provide Services: </strong>We use the information we
                  collect to provide and improve our services, including
                  processing orders, managing accounts, and delivering
                  personalized content.
                </li>
                <li>
                  <strong>Communication: </strong>We may use your contact
                  information to communicate with you about your account,
                  updates, promotions, and important announcements.
                </li>
                <li>
                  <strong>Analytics: </strong>We use analytics tools to analyze
                  website traffic, monitor user behavior, and improve our
                  website and services.
                </li>
                <li>
                  <strong>Security: </strong>We use login credentials and
                  encryption techniques to secure user accounts and protect
                  against unauthorized access and data breaches.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Share Your Information</strong>
              <ul>
                <li>
                  <strong>Service Providers: </strong>We may share your
                  information with trusted third-party service providers who
                  assist us in operating our website, processing payments, and
                  delivering services.
                </li>
                <li>
                  <strong>Legal Compliance: </strong>We may disclose your
                  information when required by law, such as to comply with a
                  legal process, enforce our policies, or protect our rights,
                  property, or safety.
                </li>
                <li>
                  <strong>Business Transfers: </strong>In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred as part of the transaction. We will notify you of
                  any such change in ownership or control of your personal
                  information.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Retention</strong>
              <br />
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy or as
              required by law. We will securely delete or anonymize your
              information when it is no longer needed.
            </li>
            <li>
              <strong>Your Rights and Choices</strong>
              <ul>
                <li>
                  <strong>Cookies: </strong>You can set your browser to refuse
                  all or some cookies, or to alert you when cookies are being
                  sent. However, disabling cookies may affect the functionality
                  of our website.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to this Privacy Policy</strong>
              <br />
              We reserve the right to update or change this Privacy Policy at
              any time. Any changes will be posted on this page with a revised
              effective date. We encourage you to review this Privacy Policy
              periodically for any updates or changes.
            </li>
            <li>
              <strong>Contact Us</strong>
              <br />
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please{" "}
              <strong>
                <Link to="/contact-us">contact us</Link>
              </strong>
              .
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
          <br />
          <br />
          By using our website and services, you agree to the terms of this
          Privacy Policy. If you do not agree with any part of this Privacy
          Policy, please do not use our website or services.
        </>
      ),
    },
    {
      header: "Terms of Service (TOS)",
      body: (
        <>
          Welcome to Ewabey! These Terms of Service ("Terms") govern your access
          to and use of the Ewabey website, services, and any related
          applications (collectively referred to as the "Platform"). By
          accessing or using the Platform, you agree to comply with these Terms.
          If you do not agree with any part of these Terms, you may not access
          or use the Platform.
          <ol>
            <li>
              <strong>Account Registration</strong>
              <ul>
                <li>
                  You may be required to create an account to access certain
                  features of the Platform. When registering for an account, you
                  agree to provide accurate, current, and complete information.
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account.
                </li>
              </ul>
            </li>
            <li>
              <strong>Use of the Platform</strong>
              <ul>
                <li>
                  You agree to use the Platform solely for lawful purposes and
                  in accordance with these Terms. You may not use the Platform
                  in any manner that could damage, disable, overburden, or
                  impair the Platform or interfere with any other party's use of
                  the Platform.
                </li>
                <li>
                  You may not use the Platform to engage in any activity that is
                  illegal, fraudulent, or harmful, including but not limited to:
                  <ul>
                    <li>Violating any applicable laws or regulations.</li>
                    <li>
                      Uploading or transmitting viruses, malware, or other
                      malicious code.
                    </li>
                    <li>
                      Harassing, intimidating, or threatening other users.
                    </li>
                    <li>
                      Impersonating any person or entity or falsely stating or
                      otherwise misrepresenting your affiliation with a person
                      or entity.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Content on the Platform</strong>
              <ul>
                <li>
                  Ewabey may allow users to post, upload, or submit content on
                  the Platform, including but not limited to text, images,
                  videos, and other materials ("User Content"). You retain
                  ownership of any User Content you submit to the Platform.
                </li>
                <li>
                  By submitting User Content to the Platform, you grant Ewabey a
                  worldwide, non-exclusive, royalty-free, sublicensable, and
                  transferable license to use, reproduce, distribute, prepare
                  derivative works of, display, and perform the User Content in
                  connection with the Platform.
                </li>
              </ul>
            </li>
            <li>
              <strong>Intellectual Property Rights</strong>
              <ul>
                <li>
                  The Platform and its content, including but not limited to
                  text, graphics, logos, icons, images, audio clips, and
                  software, are the property of Ewabey or its licensors and are
                  protected by copyright, trademark, and other intellectual
                  property laws.
                </li>
                <li>
                  You may not modify, reproduce, distribute, transmit, display,
                  publish, or create derivative works of any content on the
                  Platform without the prior written consent of Ewabey.
                </li>
              </ul>
            </li>
            <li>
              <strong>Termination</strong>
              <ul>
                <li>
                  Ewabey reserves the right to suspend or terminate your access
                  to the Platform at any time for any reason, including but not
                  limited to violation of these Terms or for conduct that Ewabey
                  believes is harmful to the Platform or its users.
                </li>
                <li>
                  Upon termination, all provisions of these Terms which by their
                  nature should survive termination, including but not limited
                  to ownership provisions, warranty disclaimers, indemnity, and
                  limitations of liability, shall survive termination.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <ul>
                <li>
                  To the fullest extent permitted by applicable law, Ewabey
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to lost profits, lost data, or business interruption, arising
                  out of or in connection with your use of the Platform.
                </li>
              </ul>
            </li>
            <li>
              <strong>Governing Law and Jurisdiction</strong>
              <ul>
                <li>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, without regard to its conflict of law
                  principles.
                </li>
                <li>
                  Any dispute arising out of or relating to these Terms or the
                  Platform shall be exclusively resolved by the courts located
                  in India, and you hereby consent to the jurisdiction and venue
                  of such courts.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to the Terms</strong>
              <ul>
                <li>
                  Ewabey reserves the right to modify or update these Terms at
                  any time without prior notice. Any changes to these Terms will
                  be effective immediately upon posting. Your continued use of
                  the Platform after the posting of revised Terms constitutes
                  your acceptance of the changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about these Terms,
                  please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Refund Policy",
      body: (
        <>
          At Ewabey, we strive to provide high-quality services and ensure
          customer satisfaction. This Refund Policy outlines the circumstances
          under which refunds may be issued for services provided by Ewabey.
          <ol>
            <li>
              <strong>Cancellation of Projects</strong>
              <ul>
                <li>
                  Ewabey does not offer refunds if a user cancels their project.
                  Once a project has been initiated, the user is responsible for
                  fulfilling their contractual obligations and making payments
                  as agreed upon.
                </li>
                <li>
                  If a user cancels their project, any payments made for
                  completed stages of the project will not be refunded. This
                  includes payments made for completed milestones, deliverables,
                  or other project-related expenses.
                </li>
              </ul>
            </li>
            <li>
              <strong>Unfulfilled Deliverables</strong>
              <ul>
                <li>
                  In the event that Ewabey is unable to deliver services as
                  specified in the project details, the user may be eligible for
                  a refund.
                </li>
                <li>
                  To request a refund for unfulfilled deliverables, the user
                  must submit a written claim outlining the specific reasons for
                  the request and providing any relevant documentation or
                  evidence.
                </li>
                <li>
                  Ewabey will review the claim and determine whether the user is
                  eligible for a refund based on the circumstances of the case.
                </li>
              </ul>
            </li>
            <li>
              <strong>Refund Process</strong>
              <ul>
                <li>
                  Refund requests must be submitted to Ewabey's customer support
                  team at ewabey99@gmail.com. The request will be reviewed and
                  processed within a reasonable timeframe.
                </li>
                <li>
                  If a refund is approved, the user will receive the refund
                  amount via the original payment method used for the
                  transaction.
                </li>
                <li>
                  Refunds will be issued in the currency of the original
                  transaction, and any currency conversion fees or fluctuations
                  will be borne by the user.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to the Refund Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to modify or update this Refund
                  Policy at any time without prior notice. Any changes to the
                  Refund Policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Refund Policy periodically
                  for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Refund
                  Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Cookie Policy",
      body: (
        <>
          At Ewabey, we value your privacy and are committed to providing
          transparency about our use of cookies and similar tracking
          technologies on our website. This Cookie Policy explains what cookies
          are, how we use them, and your choices regarding their use.
          <ol>
            <li>
              <strong>What Are Cookies?</strong>
              <br />
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              are used to enhance your browsing experience, personalize content,
              and analyze website traffic.
              <br />
              Cookies can be categorized into different types based on their
              function and lifespan:
              <ul>
                <li>
                  <strong>Session Cookies: </strong>These cookies are temporary
                  and are deleted when you close your browser. They are used to
                  maintain your session and remember your preferences while you
                  navigate the website.
                </li>
                <li>
                  <strong>Persistent Cookies: </strong>These cookies remain on
                  your device for a specified period or until you delete them.
                  They are used to recognize you when you return to the website
                  and remember your preferences.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Cookies?</strong>
              <br />
              Ewabey uses cookies for the following purposes:
              <ul>
                <li>
                  <strong>Essential Cookies: </strong>These cookies are
                  necessary for the functioning of the website and cannot be
                  disabled. They enable core functionalities such as security,
                  network management, and accessibility.
                </li>
                <li>
                  <strong>Analytical Cookies: </strong>These cookies allow us to
                  analyze website traffic and track user interactions to improve
                  our services and enhance user experience. We use analytics
                  tools such as Google Analytics to collect anonymous data about
                  website usage.
                </li>
                <li>
                  <strong>Preference Cookies: </strong>These cookies remember
                  your preferences and settings to provide a personalized
                  browsing experience. They may store information such as your
                  language preference, location, or font size.
                </li>
                <li>
                  <strong>Marketing Cookies: </strong>These cookies are used to
                  deliver targeted advertisements based on your interests and
                  browsing behavior. They may be set by third-party advertisers
                  and advertising networks.
                </li>
              </ul>
            </li>
            <li>
              <strong>Your Choices</strong>
              <br />
              You have the option to manage cookies and control their use
              through your browser settings. You can choose to accept, reject,
              or delete cookies at any time.
              <br />
              Please note that disabling certain types of cookies may affect the
              functionality of the website and limit your ability to access
              certain features or services.
            </li>
            <li>
              <strong>Third-Party Cookies</strong>
              <ul>
                <li>
                  Ewabey may use third-party cookies on our website for
                  advertising, analytics, and other purposes. These cookies are
                  subject to the privacy policies of the respective third-party
                  providers.
                </li>
                <li>
                  We do not have control over third-party cookies, and their use
                  is governed by the policies of the third-party providers. We
                  recommend reviewing the privacy policies of these providers
                  for more information about their cookie practices.
                </li>
              </ul>
            </li>
            <li>
              <strong>Updates to the Cookie Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Cookie
                  Policy at any time without prior notice. Any changes to the
                  Cookie Policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Cookie Policy periodically
                  for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Cookie
                  Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Copyright and Intellectual Property Policy",
      body: (
        <>
          <ol>
            <li>
              <strong>Introduction</strong>
              <br />
              Ewabey respects the intellectual property rights of others and
              expects our users to do the same. This Copyright and Intellectual
              Property Policy outlines our approach to copyright and
              intellectual property protection on our website and services.
            </li>
            <li>
              <strong>Ownership of Content</strong>
              <ul>
                <li>
                  All content, including but not limited to text, images,
                  graphics, logos, videos, and software, displayed on the Ewabey
                  website and services is the property of Ewabey or its
                  licensors and is protected by copyright, trademark, and other
                  intellectual property laws.
                </li>
                <li>
                  Users may not reproduce, distribute, modify, or create
                  derivative works of any content on the Ewabey website and
                  services without prior written permission from Ewabey.
                </li>
              </ul>
            </li>
            <li>
              <strong>User-Generated Content</strong>
              <ul>
                <li>
                  Users may submit or upload content to the Ewabey website and
                  services, including but not limited to project descriptions,
                  images, and videos ("User-Generated Content").
                </li>
                <li>
                  By submitting User-Generated Content, users grant Ewabey a
                  non-exclusive, royalty-free, perpetual, irrevocable, and fully
                  sublicensable right to use, reproduce, modify, adapt, publish,
                  translate, distribute, and display such content worldwide in
                  any media.
                </li>
                <li>
                  Users are solely responsible for the content they submit or
                  upload to the Ewabey website and services. Users must ensure
                  that their content does not infringe upon the intellectual
                  property rights or privacy rights of any third party.
                </li>
              </ul>
            </li>
            <li>
              <strong>Copyright Infringement</strong>
              <ul>
                <li>
                  Ewabey respects the intellectual property rights of others and
                  prohibits the unauthorized use of copyrighted material on our
                  website and services.
                </li>
                <li>
                  If you believe that your copyright or intellectual property
                  rights have been infringed upon by content on the Ewabey
                  website and services, please contact us at ewabey99@gmail.com
                  with the following information:
                  <ul>
                    <li>
                      Identification of the copyrighted work or intellectual
                      property that you claim has been infringed.
                    </li>
                    <li>
                      Identification of the allegedly infringing content,
                      including its location on the Ewabey website or services.
                    </li>
                    <li>
                      Your contact information, including name, address,
                      telephone number, and email address.
                    </li>
                    <li>
                      A statement that you have a good faith belief that the use
                      of the copyrighted material is not authorized by the
                      copyright owner, its agent, or the law.
                    </li>
                    <li>
                      A statement, made under penalty of perjury, that the
                      information provided in your notice is accurate and that
                      you are the copyright owner or authorized to act on behalf
                      of the copyright owner.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Counter-Notice</strong>
              <ul>
                <li>
                  If you believe that your content was removed from the Ewabey
                  website or services as a result of a mistake or
                  misidentification, you may submit a counter-notice to us at
                  ewabey99@gmail.com.
                </li>
                <li>
                  Your counter-notice must include the following information:
                  <ul>
                    <li>
                      Identification of the content that was removed, including
                      its location on the Ewabey website or services.
                    </li>
                    <li>
                      A statement, under penalty of perjury, that you have a
                      good faith belief that the content was removed as a result
                      of a mistake or misidentification.
                    </li>
                    <li>
                      Your contact information, including name, address,
                      telephone number, and email address.
                    </li>
                    <li>
                      A statement that you consent to the jurisdiction of the
                      federal district court in your location and that you will
                      accept service of process from the person who provided the
                      original notification of alleged infringement.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Changes to the Copyright and Intellectual Property Policy
              </strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Copyright
                  and Intellectual Property Policy at any time without prior
                  notice. Any changes to the policy will be effective
                  immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Copyright and Intellectual
                  Property Policy periodically for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Copyright and
                  Intellectual Property Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Acceptable Use Policy",
      body: (
        <>
          <ol>
            <li>
              <strong>Introduction</strong>
              <br />
              Ewabey provides a platform for users to create, manage, and
              collaborate on projects for businesses, companies, or personal
              use. This Acceptable Use Policy outlines the rules and guidelines
              for using the Ewabey website and services responsibly and
              respectfully.
            </li>
            <li>
              <strong>Prohibited Activities</strong>
              <br />
              Users are prohibited from engaging in the following activities
              while using the Ewabey website and services:
              <ul>
                <li>
                  <strong>Unauthorized Access: </strong>Attempting to gain
                  unauthorized access to the Ewabey website, servers, or
                  systems, or engaging in any activity that disrupts or
                  interferes with the operation of the website or services.
                </li>
                <li>
                  <strong>Malicious Behavior: </strong>Intentionally
                  distributing malware, viruses, or other harmful software, or
                  engaging in any activity that compromises the security or
                  integrity of the Ewabey website or services.
                </li>
                <li>
                  <strong>Illegal Activities: </strong>Engaging in any activity
                  that violates local, state, national, or international laws or
                  regulations, including but not limited to fraud, harassment,
                  defamation, or infringement of intellectual property rights.
                </li>
                <li>
                  <strong>Abusive Behavior: </strong>Harassing, threatening, or
                  abusing other users, or engaging in any activity that promotes
                  hate speech, violence, or discrimination based on race,
                  ethnicity, gender, religion, sexual orientation, or other
                  protected characteristics.
                </li>
                <li>
                  <strong>Spamming: </strong>Sending unsolicited messages,
                  advertisements, or promotional content, or engaging in any
                  activity that generates excessive or unwanted email or network
                  traffic.
                </li>
                <li>
                  <strong>Impersonation: </strong>Impersonating another person,
                  organization, or entity, or falsely representing your
                  affiliation with Ewabey or any other party.
                </li>
                <li>
                  <strong>Misuse of Resources: </strong>Using the Ewabey website
                  or services for purposes other than those intended, or
                  engaging in any activity that consumes excessive resources or
                  negatively impacts the performance of the website or services.
                </li>
                <li>
                  <strong>Violation of Policies: </strong>Violating any other
                  policies or guidelines established by Ewabey, including but
                  not limited to our Privacy Policy, Copyright and Intellectual
                  Property Policy, and Terms of Service.
                </li>
              </ul>
            </li>
            <li>
              <strong>Reporting Violations</strong>
              <ul>
                <li>
                  Users who encounter any activity that violates this Acceptable
                  Use Policy are encouraged to report it to Ewabey's customer
                  support team at ewabey99@gmail.com.
                </li>
                <li>
                  Reports should include detailed information about the
                  violation, including the nature of the activity, the usernames
                  or identities involved, and any supporting evidence or
                  documentation.
                </li>
                <li>
                  Ewabey will investigate all reports of policy violations and
                  take appropriate action, which may include warning,
                  suspension, or termination of user accounts, as well as legal
                  or law enforcement action if necessary.
                </li>
              </ul>
            </li>
            <li>
              <strong>Consequences of Violations</strong>
              <br />
              Users who violate this Acceptable Use Policy may be subject to
              disciplinary action, including but not limited to:
              <ul>
                <li>
                  Temporary or permanent suspension of access to the Ewabey
                  website and services.
                </li>
                <li>
                  Removal or deletion of content or materials that violate the
                  policy.
                </li>
                <li>
                  Legal action or prosecution for serious violations of law or
                  policy.
                </li>
              </ul>
            </li>
            <li>
              <strong>Changes to the Acceptable Use Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Acceptable
                  Use Policy at any time without prior notice. Any changes to
                  the policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Acceptable Use Policy
                  periodically for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Acceptable
                  Use Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Data Retention Policy",
      body: (
        <>
          <ol>
            <li>
              <strong>Introduction</strong>
              <br />
              Ewabey is committed to protecting the privacy and security of our
              users' personal information. This Data Retention Policy outlines
              our approach to the retention and deletion of user data collected
              through our website and services.
            </li>
            <li>
              <strong>Data Collection and Storage</strong>
              <ul>
                <li>
                  Ewabey collects and stores certain personal information from
                  users who register accounts or engage with our website and
                  services. This information may include but is not limited to:
                  <ul>
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Mobile No</li>
                    <li>Username</li>
                    <li>Password</li>
                    <li>Address</li>
                    <li>Payment Details</li>
                    <li>Project Name</li>
                    <li>Project Details</li>
                  </ul>
                </li>
                <li>
                  We collect this information for the purpose of providing and
                  improving our services, communicating with users, processing
                  orders, and complying with legal obligations.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Retention Period</strong>
              <ul>
                <li>
                  Ewabey retains user data only for as long as necessary to
                  fulfill the purposes outlined in this Data Retention Policy or
                  as required by law.
                </li>
                <li>
                  The retention period for different types of user data may vary
                  based on the nature of the information and the purposes for
                  which it is processed. In general, we adhere to the following
                  retention periods:
                  <ul>
                    <li>
                      <strong>Account Information: </strong>We retain user
                      account information for as long as the account is active
                      and for a reasonable period thereafter to facilitate
                      reactivation if the user chooses to return to our
                      services.
                    </li>
                    <li>
                      <strong>Usage Information: </strong>We retain usage
                      information for a limited period to analyze website
                      traffic, monitor user behavior, and improve our services.
                      This data is typically anonymized or aggregated after a
                      certain period.
                    </li>
                    <li>
                      <strong>Billing Information: </strong>We retain billing
                      information for as long as necessary to process payments,
                      comply with financial regulations, and maintain accurate
                      financial records.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Deletion and Anonymization</strong>
              <ul>
                <li>
                  Upon request, Ewabey will delete or anonymize user data in
                  accordance with applicable law and our internal policies.
                </li>
                <li>
                  Users may request the deletion of their account and associated
                  personal information by contacting our customer support team
                  at [Contact Email]. We will promptly process such requests and
                  permanently delete the user's account and data from our
                  systems, subject to any legal or contractual obligations.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Security</strong>
              <br />
              Ewabey employs industry-standard security measures to protect user
              data from unauthorized access, disclosure, alteration, or
              destruction. We use encryption, firewalls, access controls, and
              other security technologies to safeguard user information.
            </li>
            <li>
              <strong>Changes to the Data Retention Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Data
                  Retention Policy at any time without prior notice. Any changes
                  to the policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Data Retention Policy
                  periodically for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Data
                  Retention Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Contact Us Policy",
      body: (
        <>
          <ol>
            <li>
              <strong>Introduction</strong>
              <br />
              Ewabey values feedback, inquiries, and communication from our
              users. This Contact Us Policy outlines how users can contact us
              with questions, concerns, or requests related to our website and
              services.
            </li>
            <li>
              <strong>Contact Methods</strong>
              <br />
              Users may contact Ewabey through the following methods:
              <ul>
                <li>
                  <strong>Email: </strong>Users can email our customer support
                  team at ewabey99@gmail.com. We strive to respond to all email
                  inquiries promptly and efficiently.
                </li>
                <li>
                  <strong>Contact Form: </strong>Users can use the contact form
                  available on our website to submit inquiries or messages. The
                  contact form may require users to provide their name, email
                  address, mobile no, subject, and a brief description of their
                  inquiry.
                </li>
              </ul>
            </li>
            <li>
              <strong>Inquiry Response</strong>
              <br />
              Ewabey is committed to providing timely and helpful responses to
              user inquiries. Our customer support team will make every effort
              to address user questions, concerns, or requests promptly and
              professionally.
              <br />
              Response times may vary depending on the nature and complexity of
              the inquiry. We prioritize inquiries based on urgency and severity
              and strive to resolve all issues in a timely manner.
            </li>
            <li>
              <strong>Privacy and Confidentiality</strong>
              <ul>
                <li>
                  Ewabey respects the privacy and confidentiality of user
                  communications. Any information provided to us through contact
                  methods will be treated confidentially and used only for the
                  purpose of responding to the user's inquiry or request.
                </li>
                <li>
                  We may store and retain records of user communications for
                  quality assurance, training, and record-keeping purposes.
                  However, we will not disclose or share user communications
                  with third parties except as necessary to fulfill the user's
                  request or as required by law.
                </li>
              </ul>
            </li>
            <li>
              <strong>Feedback and Suggestions</strong>
              <br />
              We welcome feedback, suggestions, and ideas from our users to help
              us improve our website and services. Users are encouraged to
              provide constructive feedback and suggestions through any of the
              contact methods mentioned above.
            </li>
            <li>
              <strong>Changes to the Contact Us Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Contact Us
                  Policy at any time without prior notice. Any changes to the
                  policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Contact Us Policy
                  periodically for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Contact Us
                  Policy, or if you would like to contact us for any reason,
                  please use one of the contact methods mentioned above.
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
    {
      header: "Updates and Changes Policy",
      body: (
        <>
          <ol>
            <li>
              <strong>Introduction</strong>
              <br />
              Ewabey is committed to providing our users with transparent
              communication regarding updates and changes to our website,
              services, and policies. This Updates and Changes Policy outlines
              how we inform users about modifications, enhancements, or
              revisions that may affect their experience with Ewabey.
            </li>
            <li>
              <strong>Notification Methods</strong>
              <br />
              We use the following methods to notify users about updates and
              changes:
              <ul>
                <li>
                  <strong>Website Announcement: </strong>We may post
                  announcements or notifications on our website to inform users
                  about significant updates, changes, or new features. These
                  announcements may appear on the homepage, in the news section,
                  or in other prominent areas of the website.
                </li>
                <li>
                  <strong>Email: </strong>We may send email notifications to
                  registered users to alert them about important updates or
                  changes that may affect their accounts or services. Users are
                  encouraged to keep their email addresses up to date to ensure
                  they receive these notifications.
                </li>
                <li>
                  <strong>In-App Notifications: </strong>For users who access
                  Ewabey through mobile apps or other digital platforms, we may
                  send in-app notifications or alerts to notify them about
                  updates or changes relevant to their user experience.
                </li>
                <li>
                  <strong>Social Media: </strong>We may use our official social
                  media channels to announce updates or changes and provide
                  additional information or context. Users are encouraged to
                  follow us on social media for real-time updates and
                  announcements.
                </li>
              </ul>
            </li>
            <li>
              <strong>Types of Updates and Changes</strong>
              <br />
              Updates and changes may include but are not limited to the
              following:
              <ul>
                <li>
                  <strong>Software Updates: </strong>We regularly release
                  software updates to improve performance, fix bugs, and
                  introduce new features or enhancements to our website and
                  services.
                </li>
                <li>
                  <strong>Policy Changes: </strong>We may update our terms of
                  service, privacy policy, or other legal documents to reflect
                  changes in our business practices, legal requirements, or
                  industry standards.
                </li>
                <li>
                  <strong>Service Enhancements: </strong>We may introduce new
                  services, tools, or functionalities to enhance the user
                  experience and provide additional value to our users.
                </li>
                <li>
                  <strong>Maintenance Notices: </strong>We may schedule
                  maintenance windows or downtime to perform routine
                  maintenance, upgrades, or infrastructure changes. Users will
                  be notified in advance of any planned maintenance that may
                  affect service availability.
                </li>
              </ul>
            </li>
            <li>
              <strong>Frequency of Updates</strong>
              <br />
              Updates and changes may occur periodically and vary in frequency
              depending on business needs, technological advancements,
              regulatory requirements, and user feedback.
              <br />
              We strive to minimize disruption to users and provide advance
              notice whenever possible for significant updates or changes that
              may impact user experience or functionality.
            </li>
            <li>
              <strong>User Feedback and Input</strong>
              <br />
              We value user feedback and input regarding updates and changes to
              our website and services. Users are encouraged to provide
              feedback, suggestions, or concerns through our contact channels,
              feedback forms, or customer support channels.
              <br />
              We consider user feedback when making decisions about updates,
              changes, or new features, and we strive to address user concerns
              or suggestions to the best of our ability.
            </li>
            <li>
              <strong>Changes to the Updates and Changes Policy</strong>
              <ul>
                <li>
                  Ewabey reserves the right to update or change this Updates and
                  Changes Policy at any time without prior notice. Any changes
                  to the policy will be effective immediately upon posting.
                </li>
                <li>
                  Users are encouraged to review the Updates and Changes Policy
                  periodically for any updates or changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contact Us</strong>
              <ul>
                <li>
                  If you have any questions or concerns about this Updates and
                  Changes Policy, please{" "}
                  <strong>
                    <Link to="/contact-us">contact us</Link>
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
          Last Updated: April 08, 2024
        </>
      ),
    },
  ];
  return (
    <div style={{ marginTop: "5rem" }}>
      <Typography sx={{ ml: "1rem", fontSize: "2rem" }}>
        Stylekunj Policies
      </Typography>
      {policies.map((policy, index) => {
        return <Policy key={index} pol={policy} />;
      })}
    </div>
  );
}
