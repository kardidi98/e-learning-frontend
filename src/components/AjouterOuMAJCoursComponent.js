import { Col, Image, Row } from 'react-bootstrap';
import React from 'react';
import {Form, Control} from 'react-redux-form';

export default class AjouterCours extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cours: [],
            image: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        if(this.props.cours && this.props.image){
            this.setState({
                cours : this.props.cours,
                image:this.props.image
            })
        }
    }

    handleSubmit = (values) =>{
        this.props.postCourse(values.titre, values.dateDeb, values.dateFin, values.categorie,values.image,values.description);
    }
    handleUpdate = (values) =>{
        //this.props.updateCourse(values.titre, values.dateDeb, values.dateFin, values.categorie,values.image,values.description);
    }

    render(){
        const {cours, image}=this.state;
        console.log(image)
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
                                <Form className="form "  id="Form" model="course" onSubmit={cours.length === 0 ? (values)=> this.handleSubmit(values) : (values)=> this.handleUpdate(values)}>
                                    <div className="row">
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.text className="form-control " value={cours.nom} model=".titre" name="name" id="name" type="text"  placeholder="Titre du cours" required/>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control " value={cours.dateDeb} model=".dateDeb" name="dateDeb" id="edateDeb" type="date"  placeholder="Date Début" required/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <Control.text className="form-control" value={cours.dateFin} model=".dateFin" name="dateFin" id="dateFin" type="date"  placeholder="Date Fin" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-sm-6 form-group">
                                                        <div id="default-select">
                                                            <Control.select className="form-control" value={cours.categorie} model=".categorie" defaultValue="Marketing" required>
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
                                                    <Control.file className="form-control " model=".image" name="image" id="image" accept="image/*" hidden="true" required/>
                                                    <Row style={{ display: cours.length === 0 ? 'none':'block'}}>
                                                        <Col lg={6} xs={6} md={4}>
                                                            <Image src={"data:image/*;base64," + image.data} alt={cours.id} fluid thumbnail/>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.textarea className="form-control w-100" value={cours.description} model=".description" name="description" id="description" cols="30" rows="10" o placeholder=" Description" required></Control.textarea>
                                                
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