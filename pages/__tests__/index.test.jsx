import React from 'react';
import Index from '../index';
import renderer from 'react-test-renderer';

test('Index page renders', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
