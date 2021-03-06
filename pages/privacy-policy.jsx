import React from "react";

import { Page } from "../components/Page";
import { Headline } from "../patterns/Headline";
import { Text } from "../patterns/Text";
import { TextHeading } from "../patterns/TextHeading";
import { Link } from "../patterns/Link";

const PrivacyPolicy = () => (
  <Page title="privacy policy">
    <Headline>Privacy notice</Headline>
    <Text>
      My website may be used without entering personal information. Different
      rules may apply to certain services on my site, however, and are explained
      separately below. Information is considered personal if it can be
      associated exclusively to a specific natural person. The legal framework
      for data protection may be found in the German Federal Data Protection Act
      (BDSG) and the Telemedia Act (TMG). The provisions below serve to provide
      information as to the manner, extent and purpose for collecting, using and
      processing personal information.
    </Text>
    <Text>
      Please be aware that data transfer via the internet is subject to security
      risks and, therefore, complete protection against third-party access to
      transferred data cannot be ensured.
    </Text>
    <TextHeading>Cookies</TextHeading>
    <Text>
      There are no cookies here. Seriously, not even any analytics script is
      used.
    </Text>
    <TextHeading>Analytics</TextHeading>
    <Text>
      This website uses{" "}
      <Link
        href="https://plausible.io/"
        title="Website of Plausible Analytics providing cookie-less web analytics without collecting personal data."
      >
        Plausible Analytics
      </Link>
      , a privacy-friendly, open source web analytics software hosted inside the
      EU. Plausible Analytics does not track, collect nor store any personal
      data or personally identifiable information. It is GDPR, CCPA and cookie
      law compliant. Read more about{" "}
      <Link
        href="https://plausible.io/data-policy"
        title="Link to Plausible data policy site."
      >
        Plausible Data Policy
      </Link>{" "}
      or have a direct look at the{" "}
      <Link
        href="https://plausible.io/krieselreihe.com"
        title="Public analytics dashboard of krieselreihe.com."
      >
        public dashboard of this website
      </Link>
      .
    </Text>
    <TextHeading>Information / Cancellation / Deletion</TextHeading>
    <Text>
      On the basis of the Federal Data Protection Act, you may contact my at no
      cost if you have questions relating to the collection, processing or use
      of your personal information, if you wish to request the correction,
      blocking or deletion of the same, or if you wish to cancel explicitly
      granted consent. Please note that you have the right to have incorrect
      data corrected or to have personal data deleted, where such claim is not
      barred by any legal obligation to retain this data.
    </Text>
  </Page>
);

export default PrivacyPolicy;
