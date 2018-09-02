import React from "react";
import { MemoryRouter } from "react-router";
import { shallow, render } from "enzyme";
import { Provider } from 'redux'
import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store';

import {FormRoute} from "./FormRoute";

describe('FormRoute component', () => {
  let store;
  let testState;
  const initialState = {user:{name:'time'}};
  const mockStore = configureStore()

  beforeEach(() => {
    store = mockStore(initialState);
  })

  it('should match snapshot with default path', () => {
    let wrapper = shallow(<FormRoute store={store} />);
    render(
      <MemoryRouter initialEntries={['/']}>
        <FormRoute store={store} />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /login path', () => {
    let wrapper = shallow(<FormRoute store={store} />);

    render(
      <MemoryRouter initialEntries={['/login']}>
        <FormRoute store={store} />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /signup path', () => {
    let wrapper = shallow(<FormRoute store={store} />);

    render(
      <MemoryRouter initialEntries={['/signup']}>
        <FormRoute store={store} />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /user path', () => {
    let wrapper = shallow(<FormRoute store={store} />);

    render(
      <MemoryRouter initialEntries={['/:user_id']}>
        <FormRoute store={store} />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });
})