import React from "react";
import renderer from "react-test-renderer";

import PrivacyPolicy from "../privacy-policy";

jest.mock("../../components/page", () => ({ children }) => (
  <div>{children}</div>
));

test("Privacy policy page renders", () => {
  const component = renderer.create(<PrivacyPolicy />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
