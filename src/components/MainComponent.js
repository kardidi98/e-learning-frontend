import React, { Component } from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser,loginUser, logout,postCourse,getAllCourses,getAllProfessors
  ,getImages, updateCourse,deleteCourse, subscribe ,getSubscriptions
  , getAllStudents, unsubscribe, updateUser} from '../redux/ActionCreators';
import {InitialCours } from '../redux/forms';
import { actions } from 'react-redux-form';
import Header from './HeaderComponent';
import Accueil from './AccueilComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Cours from './CoursComponent';
import AddOrUpdateCours from './AjouterOuMAJCoursComponent';
import Login from './LoginComponent';
import Inscription from './InscriptionComponent';
import Enseignants from './EnseignantsComponent';
import MesCours from './MesCoursComponent';
import Footer from './FooterComponent';
import Alert from 'react-s-alert';
import EtudiantsInscrits from './EtudiantsInscritsComponent';
import MesCoursInscrits from './MesCoursInscritsComponent';
import Profile from './ProfileComponent';


const mapStateToProps = state => {
    return {
      etudiants: state.etudiants,
      cours : state.cours,
      professeurs: state.professeurs,
      images: state.images,
      subscription: state.subscription
    }
  }
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    postUser: (email, password, role, nom, prenom, adresse, tel,image) => dispatch(postUser(email, password, role, nom, prenom, adresse, tel,image)),
    updateUser: (id,email,  role, nom, prenom, adresse, tel,image) => dispatch(updateUser(id,email,  role, nom, prenom, adresse, tel,image)),
    resetUserForm: () => { dispatch(actions.reset('user'))},
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    resetUserLoginForm: () => { dispatch(actions.reset('login'))},
    changeUserForm: (model, value) => {dispatch(actions.change(model, value))},
    postCourse:  (titre, dateDeb, dateFin, categorie,image,description) => dispatch(postCourse(titre, dateDeb, dateFin, categorie,image,description)),
    updateCourse:  (id, titre, dateDeb, dateFin, categorie,image,description) => dispatch(updateCourse(id,titre, dateDeb, dateFin, categorie,image,description)),
    resetCourseForm: () => {dispatch(actions.reset("course"))},
    changeCourseForm: (model, value) => {dispatch(actions.change(model, value))},
    deleteCourse: (id) => {dispatch(deleteCourse(id))},
    subscribe: (id) => {dispatch(subscribe(id))},
    unsubscribe: (id) => {dispatch(unsubscribe(id))},
    getSubscriptions: (coursId) => dispatch(getSubscriptions(coursId)),
    getAllCourses: () => {dispatch(getAllCourses())},
    getAllProfessors: () => {dispatch(getAllProfessors())},
    getAllStudents: () => {dispatch(getAllStudents())},
    getImages: () => {dispatch(getImages())},
  });

 class Main extends Component {
   
  constructor(props){
    super(props);
    this.state = {
        username : '',
        authority:'',
    }
    
  }
  componentDidMount(){
    
    this.props.getAllCourses();
    this.props.getAllProfessors();
    this.props.getAllStudents();
    this.props.getImages();
    this.props.getSubscriptions();
    if(localStorage.getItem("username") && localStorage.getItem("authority")){
          this.setState({
              username : localStorage.getItem("username"),
              authority : localStorage.getItem("authority")
          })
        
    }

  }
      
    render(){
        const SignUp = () => {
            return(
              <Inscription postUser={this.props.postUser} resetUserForm={this.props.resetUserForm}/>
            );
          };
          const LogIn = () => {
            return(
              <Login loginUser={this.props.loginUser}  resetUserLoginForm={this.props.resetUserLoginForm}/>
            );
          };
          const addOrUpdateCourse = () =>{
            if(this.state.authority === null || this.state.authority === "ROLE_ETUDIANT"){
              return (
                
                  <Redirect to="/connexion"/>
                )
               
            }
            else{
              this.props.changeCourseForm("course",InitialCours)
                return (
                  <AddOrUpdateCours postCourse={this.props.postCourse} resetCourseForm={this.props.resetCourseForm}
                                    updateCourse={this.props.updateCourse}
                  />
               )
              }   
            }
           
            const Courses = () => {
              let me = Object.assign({},this.props.etudiants.etudiants.filter((item) => item.email === this.state.username)[0]);
              return(
                
                <Cours totalSubscription={this.props.subscription.subscription}
                       unsubscribe = {this.props.unsubscribe}
                       inscriptions = {this.props.subscription.subscription.filter((item) => item.etudiantId === me.iduser)}
                       inscriptionLoading = {this.props.subscription.isLoading}
                       inscriptionFailed = {this.props.subscription.errMess}
                       cours = {this.props.cours}
                       coursLoading = {this.props.cours.isLoading}
                       coursFailed = {this.props.cours.errMess}
                       professeurs={this.props.professeurs}
                       profLoading = {this.props.professeurs.isLoading}
                       profFailed = {this.props.professeurs.errMess}
                       images = {this.props.images}
                       imageLoading = {this.props.images.isLoading}
                       imageFailed = {this.props.images.errMess}
                       subscribe={this.props.subscribe}
                />
              );
            };
            const MyCourses = () => {
              if(localStorage.getItem("authority") === null || this.state.authority === "ROLE_ETUDIANT"){
                  return (
                    <Redirect to="/connexion"/>
                  )
                 
              }
              else {
                
                let professeur = Object.assign({},this.props.professeurs.professeurs.filter((item) => item.email === this.state.username)[0]);
                  
                  return(
                    
                      <MesCours totalSubscription={this.props.subscription.subscription}
                            deleteCourse={this.props.deleteCourse}
                            cours = {this.props.cours.cours.filter((item)=> item.professeurId === professeur.iduser)}
                            coursLoading = {this.props.cours.isLoading}
                            coursFailed = {this.props.cours.errMess}
                            images = {this.props.images}
                            imageLoading = {this.props.images.isLoading}
                            imageFailed = {this.props.images.errMess}
                      />
                    );  
              }
              
              
            };
            const MySubCourses = () => {
              if(localStorage.getItem("authority") === null || this.state.authority === "ROLE_PROFESSEUR"){
                  return (
                    <Redirect to="/connexion"/>
                  )
                 
              }
              else {
                
                let me = Object.assign({},this.props.etudiants.etudiants.filter((item) => item.email === this.state.username)[0]);
                
                  return(
                    
                      <MesCoursInscrits totalSubscription={this.props.subscription.subscription}
                            unsubscribe = {this.props.unsubscribe}
                            inscriptions = {this.props.subscription.subscription.filter((item) => item.etudiantId === me.iduser)}
                            inscriptionLoading = {this.props.subscription.isLoading}
                            inscriptionFailed = {this.props.subscription.errMess}
                            images = {this.props.images}
                            imageLoading = {this.props.images.isLoading}
                            imageFailed = {this.props.images.errMess}
                      />
                    );  
              }
              
              
            };
            const EditCourse = ({match}) => {
              if(localStorage.getItem("authority") === null || localStorage.getItem("authority") === "ROLE_ETUDIANT"){
                  return (
                    <Redirect to="/connexion"/>
                  )
                 
              }
              else {
                
                  let cours = Object.assign({},this.props.cours.cours.filter((item)=> item.id === parseInt(match.params.id,10))[0]);
                  const InitialCoursMAJ = {
                    id: cours.id,
                    nom: cours.nom,
                    dateDeb: cours.dateDeb,
                    dateFin: cours.dateFin,
                    categorie: cours.categorie,
                    description: cours.description
                  };
                  this.props.changeCourseForm("course",InitialCoursMAJ);
                  return(
                      
                      <AddOrUpdateCours resetCourseForm={this.props.resetCourseForm} updateCourse={this.props.updateCourse}
                            cours = {cours}
                            coursLoading = {this.props.cours.isLoading}
                            coursFailed = {this.props.cours.errMess}
                            image = {this.props.images.images.filter((item)=> parseInt(item.id) === parseInt(cours.imageId))[0]}
                            imageLoading = {this.props.images.isLoading}
                            imageFailed = {this.props.images.errMess}
                      />
                    );  
              }
              
            };
            const Professors = () => {
              
              return(
                
                <Enseignants professeurs = {this.props.professeurs}
                       profLoading = {this.props.professeurs.isLoading}
                       profFailed = {this.props.professeurs.errMess}
                       images = {this.props.images}
                       imageLoading = {this.props.images.isLoading}
                       imageFailed = {this.props.images.errMess}
                />
              );
            };

            const ListStudents = ({match}) => {
              if(localStorage.getItem("authority") === null || localStorage.getItem("authority") === "ROLE_ETUDIANT"){
                  return (
                    <Redirect to="/connexion"/>
                  )
                 
              }
              else {
                  let inscription = (this.props.subscription.subscription.filter((item) => item.courId.id === parseInt(match.params.coursId,10)));
                  return(
                    
                      <EtudiantsInscrits inscriptions={inscription}
                            inscriptionLoading={this.props.subscription.isLoading}
                            inscriptionFailed = {this.props.subscription.errMess}
                            etudiants={this.props.etudiants.etudiants}
                            etudiantsLoading = {this.props.cours.isLoading}
                            etudiantsFailed = {this.props.cours.errMess}
                            cours = {this.props.cours.cours.filter((item)=> item.id === parseInt(match.params.coursId))[0]}
                            coursLoading = {this.props.cours.isLoading}
                            coursFailed = {this.props.cours.errMess}
                      />
                    );  
              }
              
            };

            const MyProfile = () => {
              if(localStorage.getItem("authority") === null){
                  return (
                    <Redirect to="/connexion"/>
                  )
                 
              }
              else {
                
                let me = [];
                if(localStorage.getItem("authority") === "ROLE_ETUDIANT") {
                  me = Object.assign({},this.props.etudiants.etudiants.filter((item) => item.email === this.state.username)[0]);
                }
                else{
                  me = Object.assign({},this.props.professeurs.professeurs.filter((item) => item.email === this.state.username)[0]);
                  }
                let image = Object.assign({},this.props.images.images.filter((item) => item.id === me.idimage)[0]);
                const InitialUserProfile = {
                    id: me.iduser,
                    email: me.email,
                    role: me.role,
                    nom: me.nom,
                    prenom: me.prenom,
                    adresse: me.adresse,
                    tel: me.tel
                };
                this.props.changeUserForm("user",InitialUserProfile)
                return(
                    
                      <Profile update={this.props.updateUser}
                            user={me}
                            usersLoading = {this.props.etudiants.isLoading}
                            usersFailed = {this.props.etudiants.errMess}
                            image = {image}
                            imagesLoading = {this.props.images.isLoading}
                            imagesFailed = {this.props.images.errMess}
                      />
                    );  
              }
            };
           
         return (
            <div >
                <Header logout={this.props.logout}/>
                <Switch >
                        
                        <Route path="/accueil" exact component={Accueil}></Route>
                        <Route path="/apropos" exact component={About}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/ajouterCours" exact component={addOrUpdateCourse}></Route>
                        <Route path="/cours" exact component={Courses}></Route>
                        <Route path="/mescours" exact component={MyCourses}></Route>
                        <Route path="/coursinscrits" exact component={MySubCourses}></Route>
                        <Route path="/editercours/:id" exact component={EditCourse}></Route>
                        <Route path="/listeinscrits/:coursId" exact component={ListStudents}></Route>
                        <Route path="/enseignants" exact component={Professors}></Route>
                        <Route path="/inscription" exact component={SignUp}></Route>
                        <Route path="/profile" exact component={MyProfile}></Route>
                        <Route path="/connexion" exact component={LogIn}></Route>
                        <Redirect to="/accueil"/>
                </Switch>
                <Alert stack={{limit: 3}} />
                <Footer/>
            </div>
        );
    }
 
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));