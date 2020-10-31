import React from 'react';
import {Link} from 'react-router-dom';


export default class Accueil extends React.Component{
    render(){
        return(
            <main>
            <div className="slider-area ">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7 col-md-8">
                                    <div className="hero__caption" style={{textAlign: "initial"}}>
                                        <span >Cours En Ligne</span>
                                        <h3>#StayHome</h3>
                                        <h1>Apprenez En Ligne Plus Facilement!</h1>

                                        <div className="hero_btn">
                                            <Link to="/cours" style={{textDecoration: "none"}} className="button boxed-btn " >Commencez</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5">
                                    <div className="hero-man d-none d-lg-block f-right">
                                        <img src="../assets/img/hero/we-create.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;
            
            <div className="categories-area section-padding30">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="cl-xl-7 col-lg-8 col-md-10">
                            <div className="section-tittle text-center mb-70">
                                <span>Cours En Ligne</span>
                                <h2>Toutes Les Catégories</h2>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">Programmation</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">Langues</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">DevOps</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">Développement</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">BI</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                               
                                <div className="cat-cap">
                                    <h5><a  href="#link">AI</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">Finance</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-cat mb-50">
                                
                                <div className="cat-cap">
                                    <h5><a  href="#link">Marketing</a></h5>
                                    <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        
            <div className="popular-course section-padding30">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="cl-xl-7 col-lg-8 col-md-10">
                            <div className="section-tittle text-center mb-70">
                                <h2>Nos Cours Les Plus Populaires</h2>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                        
                            <div className="single-course mb-40">
                                <div className="course-img">
                                    <img src="../assets/img/gallery/popular_sub1.png" alt=""/>
                                </div>
                                <div className="course-caption">
                                    <div className="course-cap-top">
                                        <h5><a href="#link">Design</a></h5>
                                    </div>
                                    <div className="course-cap-mid d-flex justify-content-between">
                                    
                                        <ul><li>52 inscrits</li></ul>

                                    </div>
                                <div className="row">
                                            <div className="col-lg-12">
                                                <div className="browse-btn2 text-center mt-50">
                                                    <a href="courses.html" className="btn genric-btn primary-border">S'inscrire</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-course mb-40">
                                <div className="course-img">
                                    <img src="../assets/img/gallery/popular_sub2.png" alt=""/>
                                </div>
                                <div className="course-caption">
                                    <div className="course-cap-top">
                                        <h5><a href="#link">Développement En Angular</a></h5>
                                    </div>
                                    <div className="course-cap-mid d-flex justify-content-between">
                                        
                                        <ul><li>52 inscrits</li></ul>
                                    </div>
                                    <div className="row">
                                            <div className="col-lg-12">
                                                <div className="browse-btn2 text-center mt-50">
                                                    <a href="courses.html" className="btn genric-btn primary-border">S'inscrire</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-course mb-40">
                                <div className="course-img">
                                    <img src="../assets/img/gallery/popular_sub3.png" alt=""/>
                                </div>
                                <div className="course-caption">
                                    <div className="course-cap-top">
                                        <h5><a href="#link">Initiation à la Blockchain</a></h5>
                                    </div>
                                    <div className="course-cap-mid d-flex justify-content-between">
                                        
                                        <ul><li>52 inscrits</li></ul>

                                    </div>
                                    <div className="row">
                                            <div className="col-lg-12">
                                                <div className="browse-btn2 text-center mt-50">
                                                    <a href="courses.html" className="btn genric-btn primary-border">S'inscrire</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </main>
        )
    }
}