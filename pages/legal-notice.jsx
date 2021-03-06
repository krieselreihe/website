import React from "react";

import { Page } from "../components/Page";
import { Text } from "../patterns/Text";
import { SubHeadline } from "../patterns/SubHeadline";
import { TextHeading } from "../patterns/TextHeading";
import { Headline } from "../patterns/Headline";
import { Address } from "../patterns/Address";

const LegalNotice = () => (
  <Page title="legal notice">
    <Headline>Legal notice</Headline>
    <Text>Information in accordance with section 5 TMG</Text>
    <Address>
      Martin Helmut Fieber
      <br />
      Pr&auml;stg&aring;rds&auml;ngen 13
      <br />
      137 42 V&auml;sterhaninge
    </Address>
    <TextHeading id="contact">Contact</TextHeading>
    <Text>
      Telephone: +46 723 996110
      <br />
      E-Mail: info@krieselreihe.com
      <br />
      Website: https://krieselreihe.com
    </Text>
    <TextHeading>Disclaimer</TextHeading>
    <SubHeadline>Accountability for content</SubHeadline>
    <Text>
      The contents of my pages have been created with the utmost care. However,
      I cannot guarantee the contents&apos; accuracy, completeness or
      topicality. According to statutory provisions, I&apos;m furthermore
      responsible for my own content on these web pages. In this context, please
      note that I&apos;m accordingly not obliged to monitor merely the
      transmitted or saved information of third parties, or investigate
      circumstances pointing to illegal activity. Our obligations to remove or
      block the use of information under generally applicable laws remain
      unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
    </Text>
    <SubHeadline>Accountability for links</SubHeadline>
    <Text>
      Responsibility for the content of external links (to web pages of third
      parties) lies solely with the operators of the linked pages. No violations
      were evident to my at the time of linking. Should any legal infringement
      become known to my, I will remove the respective link immediately.
    </Text>
    <SubHeadline>Copyright</SubHeadline>
    <Text>
      My web pages and their contents are subject to German copyright law.
      Unless expressly permitted by law (§ 44a et seq. of the copyright law),
      every form of utilizing, reproducing or processing works subject to
      copyright protection on my web pages requires the prior consent of the
      respective owner of the rights. Individual reproductions of a work are
      allowed only for private use, so must not serve either directly or
      indirectly for earnings. Unauthorized utilization of copyrighted works is
      punishable (§ 106 of the copyright law).
    </Text>
  </Page>
);

export default LegalNotice;
