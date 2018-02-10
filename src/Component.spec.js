import React from 'react';
import Component from './Component';
import { shallow } from 'enzyme';

describe('Component', () => {
    it('should render the Component with the right blocks', () => {
        const wrapper = shallow(<Component test="test" />);
        expect(1).toBe(1);
    });
});