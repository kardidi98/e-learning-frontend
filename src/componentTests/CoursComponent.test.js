import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cours from '../components/CoursComponent';

describe("Test component: Cours ", () => {
    let user;
    let cours;
    let image;
    let inscriptions;
    let wrapper;
    let wrap ;
    let role;
    beforeEach(() => {
        role = "ROLE_ETUDIANT"
        cours = {
            id: 1,
            nom: "Angular",
            dateDeb: "22/12/2020",
            dateFin: "22/12/2020",
            categorie: "Programmation",
            imageId: 1,
            description: "description...",
            professeurId: 1
        }
        user = {
            iduser: 1,
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
        inscriptions = {
            id: 2,
            dateInscription : "22/12/2020",
            courId: cours
        }
        wrapper = mount(
            <BrowserRouter>
                <Cours
                    professeurs={{ professeurs: [user] }}
                    cours={{ cours: [cours] }}
                    images={{ images: [image] }}
                    subscribe={() => { }}
                    unsubscribe={() => { }}
                    inscriptions={[inscriptions]}
                    totalSubscription={[inscriptions]} 
                    role = {role} />
            </BrowserRouter>
        );

        wrap = shallow(<Cours
            professeurs={{ professeurs: [user] }}
            cours={{ cours: [cours] }}
            images={{ images: [image] }}
            subscribe={() => { }}
            unsubscribe={() => { }}
            inscriptions={[inscriptions]}
            totalSubscription={[inscriptions]} 
            role = {role}/>)
             
    })

    

    test('Test presence if student connected', () => {
        
        expect(wrapper.exists()).toBe(true);
        
    });

    test('Test presence if prof connected', () => {
        role = "ROLE_PROFESSEUR"
        let wrapProf = mount(
            <BrowserRouter>
                <Cours
                    professeurs={{ professeurs: [user] }}
                    cours={{ cours: [cours] }}
                    images={{ images: [image] }}
                    subscribe={() => { }}
                    unsubscribe={() => { }}
                    inscriptions={[inscriptions]}
                    totalSubscription={[inscriptions]} 
                    role = {role} />
            </BrowserRouter>
        );
        expect(wrapProf.exists()).toBe(true);
        
    });

    test('Test presence if not connected', () => {
        let wrapDisconnect = mount(
            <BrowserRouter>
                <Cours
                    professeurs={{ professeurs: [user] }}
                    cours={{ cours: [cours] }}
                    images={{ images: [image] }}
                    subscribe={() => { }}
                    unsubscribe={() => { }}
                    inscriptions={[inscriptions]}
                    totalSubscription={[inscriptions]} 
                    role = {null} />
            </BrowserRouter>
        );
        expect(wrapDisconnect.exists()).toBe(true);
        
    });
    

    test('Test Filter Courses', () => {
    
         // Senario 1   
        wrap.find("input[name='enseignant']").simulate("change", {
            target: { name: "enseignant", value: "Kardidi" }
        });

        wrap.find("select[name='categorie']").simulate("change", {
            target: { name: "categorie", value: "Programmation" }
        });
        expect(wrap.state('cours')).toEqual([cours]);


        // Senario 2   
        wrap.find("input[name='enseignant']").simulate("change", {
            target: { name: "enseignant", value: "" }
        });

        wrap.find("select[name='categorie']").simulate("change", {
            target: { name: "categorie", value: "all" }
        });
        expect(wrap.state('cours')).toEqual([cours]);

        // Senario 3
        wrap.find("select[name='categorie']").simulate("change", {
            target: { name: "categorie", value: "Devops" }
        });
        expect(wrap.state('cours')).toEqual([]);

    });

    test('Test Loading Course', () => {
        let coursLoading = true;
        expect(shallow(<Cours cours={{ cours: [] }} professeurs={{ professeurs: [] }} 
            coursLoading={coursLoading} />).exists()).toBe(true)
    });
    test('Test Failed Course', () => {
        let coursFailed = true;
        expect(shallow(<Cours cours={{ cours: [] }} professeurs={{ professeurs: [] }} 
            courseFailed={coursFailed} />).exists()).toBe(true)
    });

    


})
