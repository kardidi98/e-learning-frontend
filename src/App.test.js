import { shallow } from 'enzyme';
import React from 'react';
import App from "./App";
import About from './components/AboutComponent';
import Accueil from './components/AccueilComponent';
import Contact from './components/ContactComponent';
import MesCours from './components/MesCoursComponent';
import MesCoursInscrits from './components/MesCoursInscritsComponent';
import Profile from './components/ProfileComponent';
import ResultatRecherche from './components/ResearchResultComponent';
describe("testing components existence ", () => {
  
  test('App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('withRouter(Connect(Main))').exists()).toBe(true);
  });

  test('About', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Contact', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Home', () => {
    const wrapper = shallow(<Accueil cours={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

 


  test('My Courses', () => {
    const wrapper = shallow(<MesCours cours={{ cours: [] }} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('My subscribed courses', () => {
    const wrapper = shallow(<MesCoursInscrits inscriptions={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Profile', () => {
    const wrapper = shallow(<Profile image={[]} user={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Search By Keyword', () => {
    const wrapper = shallow(<ResultatRecherche resultatRechercheCours={{ resultatRechercheCours: [] }} />);
    expect(wrapper.exists()).toBe(true);
  });

})
