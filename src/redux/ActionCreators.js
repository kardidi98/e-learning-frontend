import * as ActionTypes from './ActionTypes';
import { service_utilisateur_baseUrl,service_cours_baseUrl,service_image_baseUrl } from './baseUrls';
import axios from 'axios';
import Alert from 'react-s-alert';
const createHistory = require("history").createBrowserHistory;

let history = createHistory();


/********************************
      Partie Utilisateur
*********************************/


export const postUser = (email, password, role, nom, prenom, adresse, tel,image) => (dispatch) => {
  
  Alert.info('En cours d\'inscription...', {
    position: 'bottom-left',
    effect: 'stackslide',
    timeout: 'none'});

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
  if(image){
    formData.append('image',image[0]);
  }
  
  formData.append('utilisateur', new Blob([JSON.stringify(newUser)], { type: "application/json" }));
  return axios.post(service_utilisateur_baseUrl+"signup",formData,headers)
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

export const updateUser = (id,email,role, nom, prenom, adresse, tel,image) => (dispatch) => {

  Alert.info('Mise à jour en cours...', {
    position: 'bottom-left',
    effect: 'stackslide',
    timeout: 'none'});

  const headers = new Headers();
  headers.append('Content-Type', 'multipart/form-data');
  
  const updatedUser = {
    id:id,
    email: email,
    role: role,
    nom: nom,
    prenom: prenom,
    adresse: adresse,
    tel: tel
  };


  const formData = new FormData();
  if(image){
    formData.append('image',image[0]);
  }
  formData.append('utilisateur', new Blob([JSON.stringify(updatedUser)], { type: "application/json" }));
  return axios.put(service_utilisateur_baseUrl+"update/"+id,formData,headers)
  .then((response)=>{
    
    if(response.data === "MAJ réussie."){
        
        Alert.success('La mise à jour du profile est réussie.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          window.location.reload(false)
        },2000)
      return response
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


  return axios.post(service_utilisateur_baseUrl+"login",User,headers)
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

export const studentsFailed = (errmess) => ({
  type: ActionTypes.FAILED_ETUDIANT,
  payload: errmess
});
export const studentsLoading = () => ({
  type: ActionTypes.LOADING_ETUDIANT
});
export const addStudents = (student) => ({
  type: ActionTypes.ADD_ETUDIANT,
  payload: student
});

export const getAllProfessors = () => (dispatch) => {
  

  dispatch(profLoading());

  return axios.get(service_utilisateur_baseUrl+"professors")
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



export const getAllStudents = () => (dispatch) => {
  

  dispatch(studentsLoading());

  return axios.get(service_utilisateur_baseUrl+"students")
  .then((response) => {
      if(response){
        dispatch(addStudents(response.data));
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(studentsFailed(error.message)));
    
}





/********************************
          Partie Cours
*********************************/
export const postCourse =  (titre, dateDeb, dateFin, categorie,image,description) => (dispatch) => {
  
  Alert.info('En cours d\'ajout...', {
    position: 'bottom-left',
    effect: 'stackslide',
    timeout: 'none'});

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
  
  if(image){
    formData.append('image',image[0]);
  }
  formData.append('cours', new Blob([JSON.stringify(newCourse)], { type: "application/json" }));
  formData.append('professeur', localStorage.getItem("username"));

  return axios.post(service_cours_baseUrl+"add",formData,headers)
  .then((response)=>{
    
    if(response.data === "Course added"){
        
        Alert.success('Cours ajouté avec succès.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          history.push('/mescours');
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

export const updateCourse =  (id,titre, dateDeb, dateFin, categorie,image,description) => (dispatch) => {
  Alert.info('Mise à jour en cours...', {
    position: 'bottom-left',
    effect: 'stackslide',
    timeout: 'none'});
    
  const headers = new Headers();
  headers.append('Content-Type', 'multipart/form-data');
  

  const updatedCourse = {
    id: id,
    nom: titre,
    dateDeb: dateDeb,
    dateFin: dateFin,
    categorie: categorie,
    description:description,

  };


  const formData = new FormData();
  if(image){
    formData.append('image',image[0]);
  }
  
  
  formData.append('cours', new Blob([JSON.stringify(updatedCourse)], { type: "application/json" }));
  formData.append('professeur', localStorage.getItem("username"));

  return axios.put(service_cours_baseUrl+"update/"+id,formData,headers)
  .then((response)=>{
    
    if(response.data === "MAJ réussie"){
        
        Alert.success('Cours mis à jour avec succès.', {
          position: 'bottom-left',
          effect: 'stackslide',
          timeout: 'none'});

        setTimeout(()=>{
          history.push('/mescours');
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

export const addCourseByKey = (course) => ({
  type: ActionTypes.ADD_COURSE_BY_KEY,
  payload: course
});

export const courseLoadingByKey = () => ({
  type: ActionTypes.LOADING_COURSE_BY_KEY
});
export const courseFailedByKey = (errmess) => ({
  type: ActionTypes.FAILED_COURSE_BY_KEY,
  payload: errmess
});

export const subscriptionLoading = () => ({
  type: ActionTypes.LOADING_SUBSCRIBE
});
export const subscriptionFailed = (errmess) => ({
  type: ActionTypes.FAILED_SUBSCRIBE,
  payload: errmess
});
export const addsubscription = (sub) => ({
  type: ActionTypes.ADD_SUBSCRIBE,
  payload: sub
});

export const getAllCourses = () => (dispatch) => {
  
  
  dispatch(courseLoading());

  return axios.get(service_cours_baseUrl+"All")
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

export const getCoursesByKeyWord= (keyword) => (dispatch) => {
  
  dispatch(courseLoadingByKey());

  return axios.get(service_cours_baseUrl+""+keyword)
  .then((response) => {
      if(response){
        dispatch(addCourseByKey(response.data));
        
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(courseFailedByKey(error.message)));
    
}

export const deleteCourse = (id) => (dispatch) => {

  if (window.confirm("Etes-vous sûre de vouloir supprimer ce cours ?")) {
    return axios.delete(service_cours_baseUrl+"delete/"+id)
    .then((response) => {
        if(response){
          Alert.success('Cours supprimé avec succès.', {
            position: 'bottom-left',
            effect: 'stackslide',
            timeout: 'none'});

          setTimeout(()=>{
            history.push('/mescours');
            window.location.reload(false)
          },2000)
          return response.data;
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .catch(error => {
        console.log('post course', error);
        Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
      });
    }
    
}

export const subscribe = (id) => (dispatch) => {

  
    return axios.post(service_cours_baseUrl+"subscribe/"+localStorage.getItem("username")+"/"+id)
    .then((response) => {
        if(response.data === "Inscription réussie"){
          Alert.success('Vous êtes maintenant inscrit dans ce cours.', {
            position: 'bottom-left',
            effect: 'stackslide',
            timeout: 'none'});

          setTimeout(()=>{
            history.push('/coursinscrits');
            window.location.reload(false)
          },2000)
          return response.data;
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .catch(error => {
        console.log('post course', error);
        Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
      });
    
    
}

export const unsubscribe = (id) => (dispatch) => {

  if (window.confirm("Etes-vous sûre de vouloir se désinscrire de ce cours ?")) {

    return axios.delete(service_cours_baseUrl+"unsubscribe/"+localStorage.getItem("username")+"/"+id)
    .then((response) => {
        if(response.data === "Desinscription réussie"){
          Alert.success('Désinscription réussie.', {
            position: 'bottom-left',
            effect: 'stackslide',
            timeout: 'none'});
            setTimeout(()=>{
              window.location.reload(false)
            },2000)
          
          return response.data;
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .catch(error => {
        console.log('post course', error);
        Alert.error('Problème dans le serveur ou Vous n\'êtes pas autorisé.', {
        position: 'bottom-left',
        effect: 'stackslide',
        timeout: 'none'});
      });
  
  }
}

export const getSubscriptions = () => (dispatch) => {
  
  dispatch(subscriptionLoading());

  return axios.get(service_cours_baseUrl+"inscription/All")
  .then((response) => {
      if(response){
        
        dispatch(addsubscription(response.data));
        return response.data;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(subscriptionFailed(error.message)));
    
}


/********************************
          Partie Image
*********************************/

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

  return axios.get(service_image_baseUrl+"All")
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



