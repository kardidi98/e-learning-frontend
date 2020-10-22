import React from 'react';
import { Control, Form, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Inscription extends React.Component{
    constructor(props) {
        super(props);
               

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleSubmit(values) {
        
        this.props.postUser(values.email, values.password,
            values.role, values.nom, values.prenom, values.adresse,
             values.tel, values.image);
        
        this.props.resetUserForm();
        
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
                                        <h2>Inscription</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="form-section ">
                    <div className="container rounded" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", padding: "50px", width:"30%"}}>
                        
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title" align="center">Formulaire d'inscription</h2>
                        </div>
                        <div className="col-lg-12">
                            <Form className="form-contact form_form" model="user"
                                onSubmit={(values) => this.handleSubmit(values)} id="SignUpForm" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Control.text className="form-control " model=".nom"
                                            name="nom" id="nom" type="text"  placeholder="Nom"
                                             required/>
                                            
                                        </div>
                                       
                                        
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group">
                                            <Control.text className="form-control "  model=".prenom"
                                            name="prenom" id="prenom" type="text"  placeholder="Prénom"
                                             required/>
                                           
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Control.text className="form-control "  model=".email"
                                             name="email" id="email" type="email"  placeholder="Email"
                                              required/>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group">
                                            <Control.text className="form-control "  model=".password"
                                             name="password" id="password" type="password"  placeholder="Mot de passe"
                                              required/>
                                           
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Control.text className="form-control "  model=".tel"
                                            name="tel" id="tel" type="number"  placeholder="Tél."/>
                                        </div>
                                       
                                        
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="form-group">
                                            <Control.text className="form-control " model=".adresse"
                                             name="adresse" id="adresse" type="text"  placeholder="Adresse"
                                              required/>
                                          
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                            <div className="form-group">
                                                <Control.select model=".role" name="role" defaultValue="ROLE_ETUDIANT"  required
                                                    className="form-control">
                                                    <option value="ROLE_ETUDIANT">Etudiant</option>
                                                    <option value="ROLE_PROFESSEUR">Enseignant</option>
                                                </Control.select>
                                            </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className=" form-group">
                                                <label for="image">
                                                    <div className="genric-btn default justify-content-center" $
                                                            style={{border: "1px solid #E5E6E9"}}>
                                                        <i className="fa fa-upload" style={{color: "#2D3092"}}></i>
                                                        &nbsp;Inserer Votre Image De Profile Ici
                                                    </div>
                                                </label>
                                                <Control.file className="form-control " model=".image"
                                                name="image" id="image" type="file" accept="image/*"  placeholder="Image" hidden="true"/>
                                            </div>
                                    </div>
                                    
                                </div>
                                    <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                            <button type="submit" className="button button-Form boxed-btn">inscription</button>
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