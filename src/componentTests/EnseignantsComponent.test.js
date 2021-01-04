import { mount, shallow } from 'enzyme';
import React from 'react';
import Enseignants from '../components/EnseignantsComponent';

describe("Test component: Professeurs ", () => {
    let user;

    let image;

    let wrapper;
    beforeEach(() => {
        user = {
            email: "abdokardidi44@gmail.com",
            password: "123456",
            role: "ROLE_PROFESSEUR",
            nom: "Kardidi",
            prenom: "Abdellatif",
            adresse: "hay houda rue 05 NR 40",
            tel: "062365896",
            idimage: 1
        }

        image = {
            id: 1,
            data: "/9j/4AAQSkZJRgABAQAAAQABAAD/"
        }

        wrapper = mount(
            <Enseignants professeurs={{ professeurs: [user] }} 
            images={{ images: [image] }} />)
    })


    test('Test presence', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Test Filter Prof', () => {
        wrapper.find("input[name='enseignant']").simulate("change", {
            target: { name: "enseignant", value: "Kardidi" }
        });
        expect(wrapper.state('professeurs')).toEqual([user]);
        
        wrapper.find("input[name='enseignant']").simulate("change", {
            target: { name: "enseignant", value: "Bensaid" }
        });
        expect(wrapper.state('professeurs')).toEqual([]);

        wrapper.find("input[name='enseignant']").simulate("change", {
            target: { name: "enseignant", value: "" }
        });
        expect(wrapper.state('professeurs')).toEqual([user]);
    });

    test('Test Loading Prof', () => {
       let profLoading = true;
       expect(mount(<Enseignants professeurs={{ professeurs: [] }} profLoading={profLoading} />).exists()).toBe(true)
    });
    test('Test Failed Prof', () => {
        let profFailed = true;
        expect(mount(<Enseignants professeurs={{ professeurs: [] }} profFailed={profFailed} />).exists()).toBe(true)
     });


})
