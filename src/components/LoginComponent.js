import React from 'react';
import { Control, Form, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
               

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(values) {
        
        this.props.loginUser(values.email,values.password);
        this.props.resetUserLoginForm()
        // event.preventDefault();
    }
    render(){
        return(
            <main>
            <div className="slider-area ">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>Connexion</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="form-section row justify-content-center" >
                <div className=" col-lg-4 col-md-8 container rounded" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", padding: "50px"}}>
                    
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title" align="center">Formulaire de connexion</h2>
                        </div>
                        <div className="col-lg-12">
                            <Form className="form form_form" model="login"
                                onSubmit={(values) => this.handleSubmit(values)}>
                                <div className="row">
                                    
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Control.text className="form-control "  model=".email"
                                            name="email" id="email" type="email"  placeholder="Email"
                                            required/>
                                        
                                        </div>
                                       
                                        
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Control.text className="form-control "  model=".password"
                                            name="password" id="password" type="password"  placeholder="Mot de passe"
                                            required/>
                                        
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                    <button type="submit" className="button button-contactForm boxed-btn">connexion</button>
                                </div>
                                <hr/>
                                <div className="col-sm-12">
                                    <small>
                                        <span>
                                            Vous n'avez pas de compte ?
                                        </span>
                                        &nbsp;
                                        <Link to={"/inscription"}>
                                            inscrivez-vous.
                                        </Link>
                                    </small>
                                        
                                </div>
                            </Form>

                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
            
        )
    }
}