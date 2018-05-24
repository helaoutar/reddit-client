import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import SignInContainer from './SignInContainer';
import SignIn from './SignIn';
import wrapWithStore from '../../hoc/wrapWithStore';
import { watch } from 'fs';
import { auth } from 'firebase';
const renderer = require('react-test-renderer');

jest.mock('firebase', () => ({
  auth: () => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  }),
}));

jest.mock('./SignIn', () => () => 'Test');

describe('SignInContainer', () => {
  it.only('test', () => {
    const component = renderer.create(<SignIn />).toJSON();
    console.log(component);
    expect(component).toMatchSnapshot();
  });

  it('should render SignIn component with the right props', () => {
    const initialState = {
      appState: 'loading',
      signInErrors: {
        emailErrorMessage: 'emailError',
        passwordErrorMessage: 'passwordError',
        genericMessage: 'genericMessage',
      },
    };

    const Component = wrapWithStore(SignInContainer, initialState);
    const wrapper = mount(<Component />);
    const signInWrapper = wrapper.find(SignIn);

    expect(signInWrapper.prop('isLoading')).toBe(true);
    expect(signInWrapper.prop('emailErrorMessage')).toBe('emailError');
    expect(signInWrapper.prop('passwordErrorMessage')).toBe('passwordError');
    expect(signInWrapper.prop('genericMessage')).toBe('genericMessage');
  });

  it('should call auth().signInWithEmailAndPassword with the right parameters', () => {
    const Component = wrapWithStore(SignInContainer);
    const wrapper = mount(<Component />);
    const signInWrapper = wrapper.find(SignIn);

    signInWrapper.prop('submitHandler')();
    
    expect(auth().signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
