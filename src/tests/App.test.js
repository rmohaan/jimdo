/* global describe, it  */

import * as React from 'react';
import expect from 'expect';

import { mount } from 'enzyme';
import Provider from './utils/provider';
import Form from '../components/form/index';

describe('<Form /> testing', () => {
  
  const wrapper = mount(<Provider><Form /></Provider>);
  
  it('Component is rendered', () => {
    expect(wrapper.find('Form').length).toEqual(1);
    expect(wrapper.find('p').length).toBe(0);
  });

  it('Should show validation error if validation fails while submitting the form', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.error-input-controls').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('Should submit the data in the form to store', () => {
    expect(wrapper.find('Form').props().data).toEqual({});

    wrapper.find('input').at(0).simulate('change', {target: {value: 'raja'}});
    wrapper.find('input').at(1).simulate('change', {target: {value: 'raja@gmail.com'}});
    wrapper.find('textarea').at(0).simulate('change', {target: {value: 'raja'}});
    wrapper.find('button').simulate('click');

    expect(wrapper.find('.error').length).toBe(0);
    expect(wrapper.find('p').length).toBe(0);
    expect(wrapper.find('Form').props().data).toEqual({ name: 'raja', email: 'raja@gmail.com', message: 'raja' });
  });

});
