import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component{
     
    render(){
        const year = new Date().getFullYear();
        return(
            <div>
            <footer>
            <div className="footer-area footer-bg">
                <div className="container">
                    <div className="footer-top footer-padding">
                        <div className="footer-heading justify-content-center">
                            <div className="row justify-content-between" style={{textAlign: "center"}}>
                                
                                <div className="col-xl-12 col-lg-12">
                                    <div className="footer-tittle2">
                                        <h4>Nos Réseaux Sociaux</h4>
                                    </div>
                                    <div className="footer-social">
                                        <a href="#link"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#link"><i className="fab fa-twitter"></i></a>
                                        <a  href="#link"><i className="fab fa-google"></i></a>
                                        <a href="#link"><i className="fab fa-instagram"></i></a>
                                        <a href="#link"><i className="fab fa-youtube"></i></a>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center" style={{justifyContent: "space-between"}}>
                            <div className="col-lg-6 footer-tittle" style={{color: "#9FA8A3"}}>
                                <h2 style={{color: "white"}}>E-Learning</h2>
                                <div style={{width: "70%"}}>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.
                                Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</div>
                            </div>
                            <div className=" row col-lg-6">
                                
                                <div className="single-footer-caption mb-50 col-lg-6" >
                                    <div className="footer-tittle">
                                        <h4>Navigation</h4>
                                        <ul>
                                            <li className="footerLink"><Link to="/accueil">Accueil</Link></li>
                                            <li className="footerLink"><Link to="/cours">Cours</Link></li>
                                            <li className="footerLink"><Link to="/enseignants">Enseignants</Link></li>
                                            <li className="footerLink"><Link to="/aprops">A Propos</Link></li>
                                            <li className="footerLink"><Link to="/contact">Conactez-nous</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-caption mb-50 col- col-lg-6" >
                                    <div className="footer-tittle">
                                        <h4>Catégories</h4>
                                        <ul>
                                            <li><a href="#link">Développement</a></li>
                                            <li><a href="#link">Programmation</a></li>
                                            <li><a href="#link">SEO</a></li>
                                            <li><a href="#link">BI</a></li>
                                            <li><a href="#link">Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                
                            
                            
                        </div>
                    </div>
                    <div className="footer-bottom" >
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12">
                                <div className="footer-copy-right text-center">
                                    <p style={{textAlign: "center"}}>
                                    Copyright &copy;{year} All rights reserved | E-Learning </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="back-top" >
            <a title="Go to Top" href="#top"> <i className="fas fa-level-up-alt" style={{color: "white"}}></i></a>
        </div>
        </div>
        )
    }
}