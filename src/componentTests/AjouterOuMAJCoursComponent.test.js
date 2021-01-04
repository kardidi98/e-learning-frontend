import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { createForms } from 'react-redux-form';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AjouterOuMAJCours from '../components/AjouterOuMAJCoursComponent';



describe("Test component: Ajouter Ou MAJ cours  ", () => {
    let cours 
    let store;
    let submit;
    let wrapper;
    beforeEach(()=>{
        window.alert = jest.fn();
        cours = {
            id: 1,
            nom: "Angular",
            dateDeb: "22/12/2020",
            dateFin: "22/12/2020",
            categorie: "Programmation",
            image: [new Blob(['image.png'], {type:"image/png"})],
            description: "description..."
        }
        
        submit = jest.fn();
        store = createStore(
            combineReducers({
                ...createForms({
                    course: cours
                })
            }),
            applyMiddleware(thunk, logger)
        );
        wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <AjouterOuMAJCours postCourse={()=>submit}  resetCourseForm={()=>{}} cours={[]} image={[]}/>          
                </BrowserRouter>   
            </Provider>
        );
        
        
    })

    test('Test presence', () => {
      
      expect(shallow(<AjouterOuMAJCours/>).exists()).toBe(true)
    });

    test('Test inputs', () => {
       
        wrapper.find("input[name='nom']").simulate("change", {
            target : {name: "nom", value : cours.nom}
        });
        wrapper.find("select[name='categorie']").simulate("change", {
            target : {name: "categorie", value : cours.categorie}
        });
        wrapper.find("input[name='dateDeb']").simulate("change", {
            target : {name: "dateDeb", value : cours.dateDeb}
        });
        wrapper.find("input[name='dateFin']").simulate("change", {
            target : {name: "dateFin", value : cours.dateFin}
        });
        wrapper.find("textarea[name='description']").simulate("change", {
            target : {name: "description", value : cours.description}
        });
        expect(wrapper.find("input[name='nom']").props().value).toEqual("Angular");
        expect(wrapper.find("select[name='categorie']").props().value).toEqual("Programmation");
        expect(wrapper.find("input[name='dateDeb']").props().value).toEqual("22/12/2020");
        expect(wrapper.find("input[name='dateFin']").props().value).toEqual("22/12/2020");
        expect(wrapper.find("textarea[name='description']").props().value).toEqual("description...");
        
      });
      
      test('Test addCourse submission ', () => {
        let prevented = false;
        wrapper.find("form").simulate("submit",{
            preventDefault: ()=>{
                prevented=true
            }
        } );
        expect(prevented).toBe(true);
        
    })

  })