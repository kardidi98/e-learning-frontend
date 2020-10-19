import * as ActionTypes from './ActionTypes';
import { service_utilisateur_baseUrl } from './service_utilisateur_baseUrl';
import axios from 'axios';


export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user
});

export const postUser = (email, password, role, nom, prenom, adresse, tel,image) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append("Access-Control-Allow-Origin", "*");
  
  const newUser = {
    email: email,
    password: password,
    role: role,
    nom: nom,
    prenom: prenom,
    adresse: adresse,
    tel: tel,
    image:image
  };
  console.log(newUser)
  
  
};
