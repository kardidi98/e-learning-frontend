import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/LoginComponent';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



describe("Test component: Login  ", () => {
    let submit;
    let wrapper;
    let store;
    let valid_user;
    let invalid_user;
    beforeEach(() => {
        window.alert = jest.fn();

        valid_user = {
            
            email: "abdokardidi44@gmail.com",
            password: "123456"
        }
        invalid_user = {
            
            email: "abdokardidi44gmail.com",
            password: "123456"
        }
        submit = jest.fn();
        store = createStore(
            combineReducers({
                ...createForms({
                    login: valid_user
                })
            }),
            applyMiddleware(thunk, logger)
        );
        wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <Login loginUser={() => submit} resetUserLoginForm={() => {}} />
                </BrowserRouter>

            </Provider>
        );

    })

    test('Test presence', () => {

        expect(shallow(<Login />).exists()).toBe(true);
    });

    test('Test login valid inputs', () => {

        wrapper.find("input[name='email']").simulate("change", {
            target: { name: "email", value: valid_user.email }
        });
        wrapper.find("input[name='password']").simulate("change", {
            target: { name: "password", value: valid_user.password }
        });

        expect(wrapper.find("input[name='email']").props().value).toEqual("abdokardidi44@gmail.com");
        expect(wrapper.find("input[name='password']").props().value).toEqual("123456");

    });

    test('Test login submission with inputs validity', () => {
        
        wrapper.find("form").simulate("submit");
        expect(window.alert).toBeCalledWith('login success');
    })

})