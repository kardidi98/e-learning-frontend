import React from 'react';
import { mount, shallow } from 'enzyme';
import EtudiantsInscrits from '../components/EtudiantsInscritsComponent';

describe("Test component: Liste Etudiants ", () => {

    let cours;
    let inscriptions;
    let wrapper;
    let etudiant

    beforeEach(() => {
        cours = {
            id: 1,
            nom: "Angular",
            dateDeb: "22/12/2020",
            dateFin: "22/12/2020",
            categorie: "Programmation",
            imageId: 1,
            description: "description..."
        }
        etudiant = {
            iduser: 1,
            email: "abdokardidi44@gmail.com",
            password: "123456",
            role: "ROLE_ETUDIANT",
            nom: "Kardidi",
            prenom: "Abdellatif",
            adresse: "hay houda rue 05 NR 40",
            tel: "062365896",
            idimage: 1
        }

        inscriptions = {
            id: 2,
            dateInscription: "22/12/2020",
            courId: cours
        }
        wrapper = shallow(
                <EtudiantsInscrits inscriptions={[inscriptions]}
                    etudiants={[etudiant]}
                    cours={[cours]} />);
    })

    test('Test Presence', () => {
        expect(wrapper.exists()).toBe(true);
        
    });

    test('Test Loading Prof', () => {
        let etudiantsLoading = true;
        expect(shallow(<EtudiantsInscrits etudiants={{ etudiants: [] }} 
            etudiantsLoading={etudiantsLoading} />).exists()).toBe(true)
     });
     test('Test Failed Prof', () => {
         let etudiantsFailed = true;
         expect(shallow(<EtudiantsInscrits etudiants={{ etudiants: [] }} 
            etudiantsFailed={etudiantsFailed} />).exists()).toBe(true)
      });
})