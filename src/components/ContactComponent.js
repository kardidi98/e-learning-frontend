import React from 'react';
import TabletAndroidOutlinedIcon from '@material-ui/icons/TabletAndroidOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

export default class Header extends React.Component{
    render(){
        return(
    <main>
        <div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center">
                                <h2>Contactez-Nous</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="contact-section">
            <div className="container">
                
                <div className="row ">
                    <div className="col-12">
                        <h2 className="contact-title">Restons En Contact</h2>
                    </div>
                    <div className="col-lg-9">
                        <form className="form-contact contact_form"  method="post" id="contactForm" >
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" o placeholder=" Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text"  placeholder="Nom"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email"  placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text"  placeholder="Sujet"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3" style={{textAlign: "center"}}>
                                <button type="submit" className="button button-contactForm boxed-btn">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 ">
                        
                        <div className="media contact-info align-items-center">
                            <span><TabletAndroidOutlinedIcon color="primary" fontSize="large"/></span>
                            &nbsp;
                            <div className="media-body">
                                <h3>+212 667 45 22 56</h3>
                            </div>
                        </div>
                        <div className="media contact-info align-items-center">
                            <span ><EmailOutlinedIcon color="primary" fontSize="large"/></span>
                            &nbsp;
                            <div className="media-body">
                                <h3>e.learning@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
            
        )
    }
}