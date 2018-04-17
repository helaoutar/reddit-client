import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './SignIn';

describe('SignIn', () => {
    const props = {
        emailRef: jest.fn(),
        passwordRef: jest.fn(),
        submitHandler: jest.fn(),
        isLoading: false,
    };

    it('should render the correct blocks', () => {
       const component = shallow(<SignIn {...props} />);
       expect(component.find('.SignIn').exists()).toBe(true);
       expect(component.find('.SignIn__logo-container').exists()).toBe(true);
       expect(component.find('.SignIn__form').exists()).toBe(true);
       expect(component.find('.SignIn__email').exists()).toBe(true);
       expect(component.find('.SignIn__password').exists()).toBe(true);
       expect(component.find('.SignIn__submit-button').exists()).toBe(true);
       expect(component.find('.SignIn__email-error-message').exists()).toBe(false);
       expect(component.find('.SignIn__submit-button-error-message').exists()).toBe(false);
    });

    it('should call `submitHandler` when the submit button is clicked', () => {
        const component = shallow(<SignIn {...props} />);
        component.find('.SignIn__submit-button').simulate('click');

        expect(props.submitHandler).toHaveBeenCalled();
    });

    it('should add the correct classes to the form input', () => {
        const customProps = Object.assign({}, props, {
            emailErrorMessage: 'something wrong with the email',
            passwordErrorMessage: 'something wrong with the password'
        });

        const component = shallow(<SignIn {...customProps} />);

        expect(component.find('.SignIn__email').hasClass('SignIn__email--error')).toBe(true);
        expect(component.find('.SignIn__email-error-message').exists()).toBe(true);

        expect(component.find('.SignIn__password').hasClass('SignIn__password--error')).toBe(true);
        expect(component.find('.SignIn__submit-button-error-message').exists()).toBe(true);
    });
});