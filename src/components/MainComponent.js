import React, { Component } from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser,loginUser, logout,postCourse,getAllCourses,getAllProfessors,getImages } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import Header from './HeaderComponent';
import Accueil from './AccueilComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Cours from './CoursComponent';
import AddCours from './AjouterCoursComponent';
import Login from './LoginComponent';
import Inscription from './InscriptionComponent';
import Enseignants from './EnseignantsComponent';
import Footer from './FooterComponent';
import Alert from 'react-s-alert';

const mapStateToProps = state => {
    return {
      etudiants: state.etudiants,
      cours : state.cours,
      professeurs: state.professeurs,
      images: state.images,
    }
  }
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    postUser: (email, password, role, nom, prenom, adresse, tel,image) => dispatch(postUser(email, password, role, nom, prenom, adresse, tel,image)),
    resetUserForm: () => { dispatch(actions.reset('user'))},
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    resetUserLoginForm: () => { dispatch(actions.reset('login'))},
    postCourse:  (titre, dateDeb, dateFin, categorie,image,description) => dispatch(postCourse(titre, dateDeb, dateFin, categorie,image,description)),
    resetCourseForm: () => {dispatch(actions.reset("course"))},
    getAllCourses: () => {dispatch(getAllCourses())},
    getAllProfessors: () => {dispatch(getAllProfessors())},
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
    this.props.getImages();
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
          const addCourse = () =>{
            if(this.state.authority === "" || this.state.authority === "ROLE_ETUDIANT"){
              return (
                
                Alert.error('Il faut s\'inscrire ou s\'authentifier en tant qu\'enseignant pour effectuer cette opération.', {
                  position: 'bottom-left',
                  effect: 'stackslide',
                  timeout: 'none'}),
                  <Redirect to="/connexion"/>
                )
               
            }
            else{
                return (
                  <AddCours postCourse={this.props.postCourse}/>
               )
              }   
            }
           
            const Courses = () => {
              
              return(
                
                <Cours cours = {this.props.cours}
                       coursLoading = {this.props.cours.isLoading}
                       coursFailed = {this.props.cours.errMess}
                       professeurs={this.props.professeurs}
                       profLoading = {this.props.professeurs.isLoading}
                       profFailed = {this.props.professeurs.errMess}
                       images = {this.props.images}
                       imageLoading = {this.props.images.isLoading}
                       imageFailed = {this.props.images.errMess}
                />
              );
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
         return (
            <div >
                <Header logout={this.props.logout}/>
                <Switch >
                        <Route path="/accueil" exact component={Accueil}></Route>
                        <Route path="/apropos" exact component={About}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/ajouterCours" exact component={addCourse}></Route>
                        <Route path="/cours" exact component={Courses}></Route>
                        <Route path="/enseignants" exact component={Professors}></Route>
                        <Route path="/inscription" exact component={SignUp}></Route>
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