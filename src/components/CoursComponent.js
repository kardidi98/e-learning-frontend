import React from 'react';


export default class Cours extends React.Component{
    render(){
        return(
            <main>
            <div className="slider-area ">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>Tous Les Cours</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;
            <section className="all-course section-padding30">
                <div className="container">
                    <div className="row">
                        <div className="all-course-wrapper">
                            <div className="row mb-15">
                                <div className="col-lg-12">
                                    <div className=" mb-90">
                                        <nav>                                                                             
                                            <div className="row nav nav-tabs" id="nav-tab" role="tablist" style={{paddingBottom: 20,justifyContent: "center"}}>
                                                <div className="input-group-icon mt-10 col-lg-4">
                                                    <div className="" id="default-select" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius:3}}>
                                                        <select className="form-control">
                                                            <option value="1">Catégories</option>
                                                            <option value="1">Développement</option>
                                                            <option value="1">Programmation</option>
                                                            <option value="1">AI</option>
                                                            <option value="1">BI</option>
                                                        </select>
                                                    </div>
    
                                                </div>
                                                <div className="mt-10 col-lg-4" >
                                                    <input type="text" name="enseignant" placeholder="Enseignant"
                                                        className="form-control" style={{boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius:3}}/>
                                                </div>
                                                
                                            </div>
                                             
                                        </nav>
    
                                    </div>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
    
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-6">
                                                    <div className="single-course mb-40">
                                                        <div className="course-img">
                                                            <img src="assets/img/gallery/popular_sub1.png" alt=""/>
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
                                                            <img src="assets/img/gallery/popular_sub2.png" alt=""/>
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
                                                            <img src="assets/img/gallery/popular_sub3.png" alt=""/>
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