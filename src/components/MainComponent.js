import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
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



export default class Main extends React.Component {
    render(){
         return (
            <Router>
                <Header/>
                <Switch>
                        <Route path="/accueil" exact component={Accueil}></Route>
                        <Route path="/apropos" exact component={About}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/ajouterCours" exact component={AddCours}></Route>
                        <Route path="/cours" exact component={Cours}></Route>
                        <Route path="/enseignants" exact component={Enseignants}></Route>
                        <Route path="/inscription" exact component={Inscription}></Route>
                        <Route path="/connexion" exact component={Login}></Route>
                        <Redirect to="/accueil"/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
 
}
