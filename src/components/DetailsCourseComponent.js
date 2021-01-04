import React from 'react';
import { Loading } from './LoadingComponent';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';

function RenderUserActionByRole({cours,subscribe,unsubscribe, inscription, role}){
    
    if(role === "ROLE_ETUDIANT"){
        if(inscription){
            return (
                <Button onClick={unsubscribe.bind(this,cours.id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                    Se désinscrire
                </Button>
                )
        }
        else{
            return (
            <Link id={"InscriptionBtnLinkAuth"+cours.id } onClick={subscribe.bind(this,cours.id )} className="btn genric-btn primary-border">
                S'inscrire
            </Link>
            )
        }
    }
    else { 
        
        return(
            <Link  to="/connexion"  id={"InscriptionBtnLink"+cours.id } className="btn genric-btn primary-border">S'inscrire</Link>
        )                  
   }
    
}

export default class DetailsCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cours: this.props.cours,
            countSubscriptions:this.props.countSubscriptions,
            image:this.props.image,
            inscription: this.props.inscription,
            prof:this.props.professeur
            
        }
    }

    

    render() {

        if (this.props.coursLoading || this.props.profLoading || this.props.imageLoading || this.props.inscriptionLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.courseFailed || this.props.profFailed || this.props.imageFailed || this.props.inscriptionFailed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.courseFailed}</h4>
                            <h4>{this.props.profFailed}</h4>
                            <h4>{this.props.imageFailed}</h4>
                            <h4>{this.props.inscriptionFailed}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {

            return (
                <main >
                    <div className="slider-area ">
                        <div className="slider-height2 d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap hero-cap2 text-center">
                                            <h2>{"Cours: " + this.state.cours.nom}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                &nbsp;
                <section className="form-section row justify-content-center" >
                <div className=" col-lg-10 col-md-8 container rounded">
                    
                                <div className="row">
                                    <div className="" style={{justifyContent: "center", border: "1px solid #86A6CE", padding: 20}}>
                                                <div className=" mb-40">
                                                    <div className="mb-40">
                                                    
                                                        <Image src={"data:image/*;base64," + this.state.image.data} alt={this.state.cours.nom} width="100%" height="100%" />
                                                                
                                                    </div>
                                                    
                                                    <div className="course-caption">
                                                        <div className="course-cap-top d-flex justify-content-between align-items-center">
                                                            <Link to={"/cours/"+this.state.cours.id}><h1>{this.state.cours.nom}</h1></Link>
                                                            <small className="align-items-center"><FolderOpenOutlinedIcon style={{color :"#4CD3E3"}}/>&nbsp;{this.state.cours.categorie}</small>
                                                        </div>
                                                        <div className="course-cap-mid justify-content-between align-items-center">

                                                            <ul>
                                                                {   
                                                                (localStorage.getItem("authority") === "ROLE_PROFESSEUR" && localStorage.getItem("username") === this.state.prof.email) ?
                                                                    <li><Link to={"/listeinscrits/"+this.state.cours.id}>{this.state.countSubscriptions +" inscrits."}</Link></li>
                                                                    :
                                                                    <li>{this.state.countSubscriptions +" inscrits."}</li>
                                                                }
                                                                
                                                                
                                                                <li>{this.state.cours.description}.</li>
                                                            </ul>
                                                            <ul>
                                                                <li><strong>Par: </strong><a href="#enseignant">{this.state.prof.nom + ' ' + this.state.prof.prenom + '.'}</a></li>
                                                            </ul>

                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="browse-btn2 text-center mt-50">
                                                                <RenderUserActionByRole cours={this.state.cours} subscribe={this.props.subscribe} unsubscribe={this.props.unsubscribe} inscription={this.state.inscription} role={this.props.role}/>
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
}