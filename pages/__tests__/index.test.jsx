import React from "react";
import renderer from "react-test-renderer";

import Index from "../index";

jest.mock("../../components/page", () => ({ children }) => (
  <div>{children}</div>
));

test("Index page renders", () => {
  const component = renderer.create(<Index />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
