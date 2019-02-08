import React from "react";
import renderer from "react-test-renderer";

import LegalNotice from "../legal-notice";

jest.mock("../../components/page", () => ({ children }) => (
  <div>{children}</div>
));

test("Legal notice page renders", () => {
  const component = renderer.create(<LegalNotice />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
