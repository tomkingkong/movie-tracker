import React from "react";
import { MemoryRouter } from "react-router";
import { shallow, render } from "enzyme";

import { FormRoute } from "./FormRoute";

describe('FormRoute component', () => {

  it('should match snapshot with default path', () => {
    let wrapper = shallow(<FormRoute store={{}} />);
    render(
      <MemoryRouter initialEntries={['/']}>
        <FormRoute store={{}} />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });
});