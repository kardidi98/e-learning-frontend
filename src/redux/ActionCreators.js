import * as ActionTypes from './ActionTypes';
import { service_utilisateur_baseUrl,service_cours_baseUrl,service_image_baseUrl } from './baseUrls';
import axios from 'axios';
import Alert from 'react-s-alert';
const createHistory = require("history").createBrowserHistory;

let history = createHistory();


export const profFailed = (errmess) => ({
  type: ActionTypes.FAILED_PROF,
  payload: errmess
});
export const profLoading = () => ({
  type: ActionTypes.LOADING_PROF
});
export const addProf = (prof) => ({
  type: ActionTypes.ADD_PROF,
  payload: prof
});

export const getAllProfessors = () => (dispatch) => {
  

  dispatch(profLoading());

  return axios.get(service_utilisateur_baseUrl+"users/professors")
  .then((response) => {
      if(response){
        dispatch(addProf(response.data));
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(profFailed(error.message)));
    
}


export const imageFailed = (errmess) => ({
  type: ActionTypes.FAILED_IMAGE,
  payload: errmess
});
export const imageLoading = () => ({
  type: ActionTypes.LOADING_IMAGE
});
export const addImage = (img) => ({
  type: ActionTypes.ADD_IMAGE,
  payload: img
});

export const getImages = () => (dispatch) => {
  

  dispatch(imageLoading());

  return axios.get(service_image_baseUrl+"images/All")
  .then((response) => {
      if(response){
        dispatch(addImage(response.data));
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(imageFailed(error.message)));
    
}



export const postUser = (email, password, role, nom, prenom, adresse, tel,image) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'multipart/form-data');
  
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
     Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
      position: 'bottom-left',
      effect: 'stackslide',
      timeout: 'none'});
    }); 
};


export const loginUser = (email, password) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
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
     Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
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


export const postCourse =  (titre, dateDeb, dateFin, categorie,image,description) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'multipart/form-data');
  

  const newCourse = {
    nom: titre,
    dateDeb: dateDeb,
    dateFin: dateFin,
    categorie: categorie,
    description:description,

  };


  const formData = new FormData();
  
  formData.append('image',image[0]);
  formData.append('cours', new Blob([JSON.stringify(newCourse)], { type: "application/json" }));
  formData.append('professeur', localStorage.getItem("username"));

  return axios.post(service_cours_baseUrl+"courses/add",formData,headers)
  .then((response)=>{
    
    if(response.data === "Course added"){
        
        Alert.success('Cours ajouté avec succès.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          history.push('/cours');
          window.location.reload(false)
        },2000)
      return response
    }
    
    
  })
  .catch(error => {
     console.log('post course', error);
     Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
      position: 'bottom-left',
      effect: 'stackslide',
      timeout: 'none'});
    }); 
};


export const courseLoading = () => ({
  type: ActionTypes.LOADING_COURSE
});
export const courseFailed = (errmess) => ({
  type: ActionTypes.FAILED_COURSE,
  payload: errmess
});
export const addCourse = (course) => ({
  type: ActionTypes.ADD_COURSE,
  payload: course
});

export const getAllCourses = () => (dispatch) => {
  
  
  dispatch(courseLoading());

  return axios.get(service_cours_baseUrl+"courses/All")
  .then((response) => {
      if(response){
        dispatch(addCourse(response.data));
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(courseFailed(error.message)));
    
}

