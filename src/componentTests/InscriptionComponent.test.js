import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Inscription from '../components/InscriptionComponent';



describe("Test component: Registration  ", () => {
    let submit;
    let wrapper;
    let store;
    let valid_user;
    let invalid_user;
    beforeEach(() => {
        window.alert = jest.fn();

        valid_user = {
            email: "abdokardidi44@gmail.com",
            password: "123456",
            role: "ROLE_PROFESSEUR",
            nom: "Kardidi",
            prenom: "Abdellatif",
            adresse: "hay houda rue 05 NR 40",
            tel: "062365896",
        }
        invalid_user = {
            email: "bensaid1999gmail.com",
            password: "123456",
            role: "ROLE_PROFESSEUR",
            nom: "Bensaid",
            prenom: "",
            adresse: "hay houda rue 05 NR 40",
            tel: "062365896",
        }
        submit = jest.fn();
        store = createStore(
            combineReducers({
                ...createForms({
                    user: valid_user
                })
            }),
            applyMiddleware(thunk, logger)
        );
        wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <Inscription postUser={()=>submit} resetUserForm={()=>{}} />
                </BrowserRouter>

            </Provider>
        );

    })

    test('Test presence', () => {

        expect(shallow(<Inscription />).exists()).toBe(true);
    });

    test('Test registration valid inputs', () => {

        wrapper.find("input[name='email']").simulate("change", {
            target: { name: "email", value: valid_user.email }
        });
        wrapper.find("input[name='password']").simulate("change", {
            target: { name: "password", value: valid_user.password }
        });
        wrapper.find("select[name='role']").simulate("change", {
            target: { name: "role", value: valid_user.role }
        });
        wrapper.find("input[name='nom']").simulate("change", {
            target: { name: "nom", value: valid_user.nom }
        });

        wrapper.find("input[name='prenom']").simulate("change", {
            target: { name: "prenom", value: valid_user.prenom }
        });
        wrapper.find("input[name='adresse']").simulate("change", {
            target: { name: "adresse", value: valid_user.adresse }
        });
        wrapper.find("input[name='tel']").simulate("change", {
            target: { name: "tel", value: valid_user.tel }
        });

        expect(wrapper.find("input[name='email']").props().value).toEqual("abdokardidi44@gmail.com");

        expect(wrapper.find("input[name='email']").props().value).not.toEqual("bensaid1999@gmail.com");

        expect(wrapper.find("input[name='password']").props().value).toEqual("123456");
        expect(wrapper.find("select[name='role']").props().value).toEqual("ROLE_PROFESSEUR");
        expect(wrapper.find("input[name='nom']").props().value).toEqual("Kardidi");
        expect(wrapper.find("input[name='prenom']").props().value).toEqual("Abdellatif");
        expect(wrapper.find("input[name='adresse']").props().value).toEqual("hay houda rue 05 NR 40");
        expect(wrapper.find("input[name='tel']").props().value).toEqual("062365896");

    });

    test('Test registration submission with inputs validity', () => {
        
        wrapper.find("form").simulate("submit");
        expect(window.alert).toBeCalledWith('register succeeded');
    })

})