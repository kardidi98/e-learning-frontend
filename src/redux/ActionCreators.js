import * as ActionTypes from './ActionTypes';
import { service_utilisateur_baseUrl } from './service_utilisateur_baseUrl';
import axios from 'axios';
import Alert from 'react-s-alert';
const createHistory = require("history").createBrowserHistory;

let history = createHistory();

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user
});
export const userFailed = (errmess) => ({
  type: ActionTypes.FAILED_USER,
  payload: errmess
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
    tel: tel
  };


  const formData = new FormData();
  if(image.length > 0){
    formData.append('image',image[0]);
  }
  
  formData.append('utilisateur', new Blob([JSON.stringify(newUser)], { type: "application/json" }));
  return axios.post(service_utilisateur_baseUrl+"users/signup",formData,headers)
  .then((response)=>{
    
    if(response.data === "User is added successfully."){
        
        Alert.success('Inscription réussie.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          history.push('/connexion');
          window.location.reload(false)
        },3000)
      return response
    }
    else{
      Alert.error('Email existe déjà ! Réssayez avec un autre. ', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
    }
    
  })
  .catch(error => {
     console.log('post user', error.message);
     Alert.error('Problème dans le serveur ! Réssayez plus tard.', {
      position: 'bottom-left',
      effect: 'stackslide',
      timeout: 'none'});
    }); 
};


export const loginUser = (email, password) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append("Access-Control-Allow-Origin", "*");
  
  const User = {
    email: email,
    password: password,
  };


  return axios.post(service_utilisateur_baseUrl+"users/login",User,headers)
  .then((response)=>{
     if(response.data === "dosen't exist."){
      Alert.error('Email inconnu ! Essayez de s\'enregistrer si vous n\'avez pas de compte.', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
    }
    else if(response.data === "Incorrect Password"){
      Alert.error('Mot de passe incorrect', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
    }
    else{
        localStorage.setItem("authorization", response.data.token);
        localStorage.setItem("username", email);
        
        localStorage.setItem("authority",JSON.parse(window.atob(response.data.token.split('.')[1])).roles[0].authority);
        
        Alert.success('Connexion réussie.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          history.push('/accueil');
          window.location.reload(false)
        },2000)
        
      
    }
    
    return response
    
  })
  .catch(error => {
     console.log('login user', error.message);
     Alert.error('Problème dans le serveur ! Réssayez plus tard.', {
      position: 'bottom-left',
      effect: 'stackslide',
      timeout: 'none'});
    }); 
};

export const logout = () => (dispatch) => {
        localStorage.clear();
        Alert.success('Déconnexion réussie ! Revisitez-nous.', {
            position: 'bottom-left',
            effect: 'stackslide',
            timeout: 'none'});
  
          setTimeout(()=>{
            history.push('/accueil');
            window.location.reload(false)
          },2000)
}

