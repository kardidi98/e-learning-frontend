import React from 'react';

export default class Inscription extends React.Component{
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
            <section className="contact-section ">
                <div className="container rounded" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", padding: "50px", width:"30%"}}>
                    
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title" align="center">Formulaire d'inscription</h2>
                    </div>
                    <div className="col-lg-12">
                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="nom" id="nom" type="text"  placeholder="Nom"/>
                                    </div>
                                   
                                    
                                </div>
                                <div className="col-sm-6">
                                   <div className="form-group">
                                        <input className="form-control valid" name="prénom" id="prénom" type="text"  placeholder="Prénom"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email"  placeholder="Email"/>
                                    </div>
                                   
                                    
                                </div>
                                <div className="col-sm-6">
                                   <div className="form-group">
                                        <input className="form-control valid" name="password" id="password" type="password"  placeholder="Mot de passe"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="Tél" id="tel" type="number"  placeholder="Tél."/>
                                    </div>
                                   
                                    
                                </div>
                                <div className="col-sm-12">
                                   <div className="form-group">
                                        <input className="form-control valid" name="adresse" id="adresse" type="text"  placeholder="Adresse"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                   <div className="form-group">
                                   		<label for="image"><div className="genric-btn default" style={{border: "1px solid #E5E6E9"}}><i className="fa fa-upload" style={{color: "#2D3092"}}></i>&nbsp;Ajouter Une Image De Profile</div></label>
                                        <input className="form-control valid" name="image" id="image" type="file"  placeholder="Image" hidden="true"/>
                                    </div>
                                </div>
                            </div>
                                <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                        <button type="submit" className="button button-contactForm boxed-btn">inscription</button>
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