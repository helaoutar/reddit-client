import React from 'react';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('Loader component', () => {
    it('should render the component with the correct blocks', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.hasClass('loader')).toEqual(true);
    });
});