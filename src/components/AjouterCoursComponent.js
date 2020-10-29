import React from 'react';
import {Form, Control} from 'react-redux-form';

export default class AjouterCours extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values) =>{
        this.props.postCourse(values.titre, values.dateDeb, values.dateFin, values.categorie,values.image,values.description);
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
                                        <h2>Ajouter Nouveau Cours</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="contact-section">
                    <div className="container rounded" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", padding: "50px"}}>
                        
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Formilaire d'ajout de cours</h2>
                            </div>
                            <div className="col-lg-12">
                                <Form className="form "  id="Form" model="course" onSubmit={(values)=> this.handleSubmit(values)}>
                                    <div className="row">
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.text className="form-control " model=".titre" name="name" id="name" type="text"  placeholder="Titre du cours" required/>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control " model=".dateDeb" name="dateDeb" id="edateDeb" type="date"  placeholder="Date Début" required/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control" model=".dateFin" name="dateFin" id="dateFin" type="date"  placeholder="Date Fin" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-sm-6 form-group">
                                                        <div id="default-select">
                                                            <Control.select className="form-control" model=".categorie" defaultValue="Marketing" required>
                                                                <option value="Marketing">Marketing</option>
                                                                <option value="Développement">Développement</option>
                                                                <option value="Programmation">Programmation</option>
                                                                <option value="AI">AI</option>
                                                                <option value="BI">BI</option>
                                                                <option value="Langues">Langues</option>
                                                                <option value="Langues">DevOps</option>
                                                            </Control.select>
                                                        </div>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label for="image"><div className="genric-btn default" style={{border: "1px solid #E5E6E9"}}><i className="fa fa-upload" style={{color: "#2D3092"}}></i>&nbsp;Ajouter Une Image Du Cours</div></label>
                                                    <Control.file className="form-control " model=".image" name="image" id="image" accept="image/*" hidden="true" required/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.textarea className="form-control w-100" model=".description" name="description" id="description" cols="30" rows="10" o placeholder=" Description" required></Control.textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                        <button type="submit" className="button button-contactForm boxed-btn">Soumettre</button>
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