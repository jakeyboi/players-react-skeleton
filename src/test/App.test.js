import React from 'react';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../components/App';

configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk])();


describe('App Component', () => {
  it('Should contain Header and Landing components', () => {
    const wrapper = mount(<Provider store={mockStore}><App /></Provider>);
    const html = wrapper.html();
    expect(html).to.have.string('Login');
    expect(html).to.have.string('Scrabbly!');
    expect(html).to.have.string('Register');
    expect(html).to.have.string('Are you articulate?');
    expect(html).to.have.string('Test your might (and your vocabulary) with Scrabbly, the world\'s most premier Scrabble league!');
  });
});
