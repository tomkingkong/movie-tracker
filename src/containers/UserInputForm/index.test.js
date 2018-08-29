import React from 'react';
import { shallow } from 'enzyme';
import UserInputForm from '.';

describe('UserInputForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserInputForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });

  
});