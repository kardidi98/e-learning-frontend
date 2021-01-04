import { Col, Image, Row } from 'react-bootstrap';
import React from 'react';
import {Form, Control} from 'react-redux-form';

export default class AjouterOuMAJCours extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cours: [],
            image: [],
            showError: "false"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    componentDidMount(){
        if(this.props.cours){
            this.setState({
                cours : this.props.cours
            })
        }
        if(this.props.image){
            this.setState({
                image:this.props.image
            })
        }
    }

    handleSubmit = (values) =>{
       
        if(values.image){
            this.props.postCourse(values.nom, values.dateDeb, values.dateFin, values.categorie,values.image,values.description);
            this.props.resetCourseForm();
        }
        else{
            // alert("Image Obligatoire")
            this.setState({
                showError: "true"
            })
           
        }
        
    }
    handleUpdate = (values) =>{
        this.props.updateCourse(values.id, values.nom, values.dateDeb, values.dateFin, values.categorie,values.image,values.description);
        // alert("updated successfully")
    }
    
    handleChangeImage = (e) =>{
        this.setState({
            showError: "false"
        })
    }

    render(){
        const {cours, image, showError}=this.state;
        return(
            <main>
                <div className="slider-area ">
                    <div className="slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap hero-cap2 text-center">
                                        <h2>
                                            { cours.length === 0?
                                            "Ajout Du Nouveau Cours"
                                            :
                                            "Mise A Jour Du Cours"
                                            }
                                        </h2>
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
                                <h2 className="contact-title">
                                    { cours.length === 0?
                                    "Formulaire d'ajout du cours"
                                    :
                                    "Formulaire de mise à jour du cours"
                                    }
                                </h2>
                                
                            </div>
                           
                            <div className="col-lg-12">
                                <Form className="form "  id="Form_Cours" model="course" onSubmit={cours.length === 0 ? ((values)=> this.handleSubmit(values)) : ((values)=> this.handleUpdate(values))}>
                                    <div className="row">
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group" hidden="true">
                                                <Control.text className="form-control "  model=".id"  name="id" id="id" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <Control.text className="form-control "  model=".nom" name="nom" id="nomCours" type="text"  placeholder="Titre du cours" required/>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control "  model=".dateDeb" name="dateDeb" id="dateDebCours" type="date"  placeholder="Date Début" required/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control"  model=".dateFin" name="dateFin" id="dateFinCours" type="date"  placeholder="Date Fin" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-sm-6 form-group">
                                                        <div id="default-select">
                                                            
                                                                <Control.select  className="form-control"   model=".categorie" name="categorie" id="categorieCours"
                                                                      required>
                                                                    <option value="">Choisir la catégorie</option>
                                                                    <option value="Marketing">Marketing</option>
                                                                    <option value="Développement">Développement</option>
                                                                    <option value="Programmation">Programmation</option>
                                                                    <option value="AI">AI</option>
                                                                    <option value="BI">BI</option>
                                                                    <option value="Langues">Langues</option>
                                                                    <option value="Devops">DevOps</option>
                                                                </Control.select>
                                              
                                                        </div>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label for="image">
                                                        <div className="genric-btn default" style={{border: "1px solid #E5E6E9"}}><i className="fa fa-upload" style={{color: "#2D3092"}}></i>
                                                            &nbsp;
                                                            { cours.length === 0?
                                                            "Ajouter Une Image Du Cours"
                                                            :
                                                            "Changer L'image Du Cours"
                                                            }
                                                        </div>
                                                    </label>
                                                    <Control.file className="form-control " model=".image"  onChange={this.handleChangeImage}
                                                      name="image" id="imageCours" accept="image/*" hidden={true}/>
                                                    {
                                                        image.length === 0? 
                                                        
                                                        <div></div>
                                                        :
                                                        <Row  >
                                                            <Col lg={6} xs={6} md={4}>
                                                                <Image src={"data:image/*;base64," + image.data} alt={cours.id} fluid thumbnail/>
                                                            </Col>
                                                        </Row>
                                                        
                                                        
                                                    }
                                                    <small style={{color : "#F44336", display : showError ==="true"? "block":"none"}}>
                                                        Vous devez insérer un image.
                                                    </small>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.textarea className="form-control w-100"  model=".description" name="description" id="descriptionCours" cols="30" rows="10" o placeholder=" Description" required></Control.textarea>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                        <button type="submit" id="submitCours" className="button button-contactForm boxed-btn">Soumettre</button>
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