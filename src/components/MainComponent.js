import React, { Component } from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser } from '../redux/ActionCreators';
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

const mapStateToProps = state => {
    return {
      etudiants: state.etudiants
    }
  }
const mapDispatchToProps = dispatch => ({
    postUser: (email, password, role, nom, prenom, adresse, tel,image) => dispatch(postUser(email, password, role, nom, prenom, adresse, tel,image)),
    resetUserForm: () => { dispatch(actions.reset('user'))}
  });

 class Main extends Component {
    constructor(props) {
        super(props);
    
      }

      
    render(){
        const SignUp = () => {
            return(
              <Inscription postUser={this.props.postUser} resetUserForm={this.props.resetUserForm}/>
            );
          };
         return (
            <div>
                <Header/>
                <Switch >
                        <Route path="/accueil" exact component={Accueil}></Route>
                        <Route path="/apropos" exact component={About}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/ajouterCours" exact component={AddCours}></Route>
                        <Route path="/cours" exact component={Cours}></Route>
                        <Route path="/enseignants" exact component={Enseignants}></Route>
                        <Route path="/inscription" exact component={SignUp}></Route>
                        <Route path="/connexion" exact component={Login}></Route>
                        <Redirect to="/accueil"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
 
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));