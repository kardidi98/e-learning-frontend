import React from 'react';
import { Loading } from './LoadingComponent';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';

function RenderUserActionByRole({cours,subscribe,unsubscribe, inscription}){
    if(localStorage.getItem("authority") === null){     
        return(
            <Link  to="/connexion" className="btn genric-btn primary-border">S'inscrire</Link>
        )                  
   }
    
    else if(localStorage.getItem("authority") === "ROLE_ETUDIANT"){
        if(inscription){
            return (
                <Button onClick={unsubscribe.bind(this,cours.id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                    Se désinscrire
                </Button>
                )
        }
        else{
            return (
            <Link onClick={subscribe.bind(this,cours.id )} className="btn genric-btn primary-border">
                S'inscrire
            </Link>
            )
        }
    }
    return null;
}

function RenderCours({ cours, prof, image, subscribe,unsubscribe, inscription, countSubscriptions }) {
    
    return (

        <div className=" col-lg-4 col-md-6 col-sm-6 " >
            <div className="single-course mb-40">
                <div className="course-img">
                   
                            <Image src={"data:image/*;base64," + image.data} alt={cours.nom} width="100%" height="100%" />
                            
                </div>
                <div className="course-caption">
                    <div className="course-cap-top d-flex justify-content-between align-items-center">
                        <h4>{cours.nom}</h4>
                        <small className="align-items-center"><FolderOpenOutlinedIcon style={{color :"#4CD3E3"}}/>&nbsp;{cours.categorie}</small>
                    </div>
                    <div className="course-cap-mid justify-content-between align-items-center">

                        <ul>
                            {   
                            (localStorage.getItem("authority") === "ROLE_PROFESSEUR" && localStorage.getItem("username") === prof.email) ?
                                <li><Link to={"/listeinscrits/"+cours.id}>{countSubscriptions +" inscrits."}</Link></li>
                                :
                                <li>{countSubscriptions +" inscrits."}</li>
                            }
                            
                            
                            <li>{cours.description}.</li>
                        </ul>
                        <ul>
                            <li><strong>Par: </strong><a href="#link">{prof.nom + ' ' + prof.prenom + '.'}</a></li>
                        </ul>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="browse-btn2 text-center mt-50">
                               <RenderUserActionByRole cours={cours} subscribe={subscribe} unsubscribe={unsubscribe} inscription={inscription} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


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
                                <h2>Nos Cours Les Plus Récents</h2>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-12">

                                  <div className="row">
                                                {

                                                    !this.props.coursLoading && !this.props.profLoading && !this.props.imageLoading && !this.props.inscriptionLoading ?
                                                        this.props.cours.slice(0,3).map((item) => {
                                                            
                                                            return (

                                                                <RenderCours cours={item}
                                                                    prof={this.props.professeurs.professeurs.filter((p) => parseInt(p.iduser) === parseInt(item.professeurId))[0]}
                                                                    image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.imageId))[0]}
                                                                    subscribe={this.props.subscribe}
                                                                    unsubscribe={this.props.unsubscribe}
                                                                    inscription={this.props.inscriptions.filter((SubItem) => SubItem.courId.id === item.id )[0]}
                                                                    countSubscriptions={this.props.totalSubscription.filter((SubItem) => SubItem.courId.id === item.id).length}
                                                                />
                                                            );
                                                        })
                                                        :
                                                        <div className="container">
                                                            <div className="row">
                                                                <Loading />
                                                            </div>
                                                        </div>
                                                        
                                                }
                                            </div>

                                        </div>
                       </div>
                    
                </div>
            </div>
    </main>
        )
    }
}