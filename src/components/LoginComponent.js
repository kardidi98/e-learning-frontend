import React from 'react';

export default class Login extends React.Component{
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
                            <form className="form-contact contact_form"  method="post" id="contactForm" >
                                <div className="row">
                                    
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email"  placeholder="Email"/>
                                        </div>
                                       
                                        
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="form-group">
                                            <input className="form-control valid" name="password" id="password" type="password"  placeholder="Mot de passe"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3"  style={{textAlign: "center"}}>
                                    <button type="submit" className="button button-contactForm boxed-btn">connexion</button>
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