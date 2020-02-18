import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './main';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('#buttonup').exists()).toBeTruthy();
  });

  it('increases number on click of increment', () => {
    let app = mount(<Counter />);
    let buttonup = app.find('#buttonup');
    let buttondown = app.find('#buttondown');
    buttonup.simulate('click');
    expect(app.state('count')).toEqual(1);
    buttonup.simulate('click');
    expect(app.state('count')).toEqual(2);

    buttondown.simulate('click');
    expect(app.state('count')).toEqual(1);
    buttondown.simulate('click');
    expect(app.state('count')).toEqual(0);
  });

  it('renders right', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
