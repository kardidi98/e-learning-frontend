import React from 'react';

export default class AjouterCours extends React.Component{
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
                                <form className="form-contact contact_form"  method="post" id="contactForm">
                                    <div className="row">
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control " name="name" id="name" type="text"  placeholder="Titre du cours"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <input className="form-control " name="dateDeb" id="edateDeb" type="date"  placeholder="Date Début"/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <input className="form-control" name="dateFin" id="dateFin" type="date"  placeholder="Date Fin"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-sm-6 form-group">
                                                        <div className="" id="default-select">
                                                            <select className="form-control">
                                                                <option value="1">Catégories</option>
                                                                <option value="1">Développement</option>
                                                                <option value="1">Programmation</option>
                                                                <option value="1">AI</option>
                                                                <option value="1">BI</option>
                                                            </select>
                                                        </div>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label for="image"><div className="genric-btn default" style={{border: "1px solid #E5E6E9"}}><i className="fa fa-upload" style={{color: "#2D3092"}}></i>&nbsp;Ajouter Une Image Du Cours</div></label>
                                                    <input className="form-control " name="image" id="image" type="file"  placeholder="Image" hidden="true"/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="description" id="description" cols="30" rows="10" o placeholder=" Description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                        <button type="submit" className="button button-contactForm boxed-btn">Soumettre</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}