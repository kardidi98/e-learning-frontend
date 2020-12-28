import React from 'react';
import { Loading } from './LoadingComponent';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button, Container, Typography } from '@material-ui/core';


let categorie = "all";
let enseignant = "";

 function RenderUserActionByRole({cours,subscribe,unsubscribe, inscription, role}){
    if(role === null){     
        return(
            <Link  to="/connexion" className="btn genric-btn primary-border">S'inscrire</Link>
        )                  
   }
    
    else if(role === "ROLE_ETUDIANT"){
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

function RenderCours({ cours, prof, image, subscribe,unsubscribe, inscription, countSubscriptions, role }) {
    
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
                            <li><strong>Par: </strong><a href="#enseignant">{prof.nom + ' ' + prof.prenom + '.'}</a></li>
                        </ul>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="browse-btn2 text-center mt-50">
                               <RenderUserActionByRole cours={cours} subscribe={subscribe} unsubscribe={unsubscribe} inscription={inscription} role={role}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}



export default class Cours extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cours: this.props.cours.cours,
            
        }
    }

    handleChange = (e) => {
        let cours = this.props.cours.cours;
        let professeur;

        const target = e.target;
        const value = target.value;
        const name = target.name;

        if (name === "enseignant") { enseignant = value }
        if (name === "categorie") { categorie = value }
        if (enseignant !== "") {
            professeur = this.props.professeurs.professeurs.filter((item) => item.nom.toLowerCase().includes(enseignant.toLowerCase()))[0];
        }

        if (enseignant === "" && categorie === "all") {
            this.setState({
                cours: this.props.cours.cours
            })
        }

        else {
            this.setState({
                cours: cours.filter((item) => {
                    if (professeur) {
                        return parseInt(item.professeurId) === parseInt(professeur.iduser) || item.categorie === (categorie)
                    }
                    else {
                        return null;
                    }

                })
            })
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
                                            <h2>Tous Les Cours</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                &nbsp;
                    <section className="all-course section-padding30" >
                        <div className="container">
                            <div className="row">
                                <div className="all-course-wrapper" style={{ width: "100%" }}>
                                    <div className="row mb-15">
                                        <div className="col-lg-12">
                                            <div className=" mb-90">
                                                <nav>
                                                    <div className="row nav nav-tabs" id="nav-tab" role="tablist" style={{ paddingBottom: 20, justifyContent: "center" }}>
                                                        <div className="input-group-icon mt-10 col-lg-4">
                                                            <div className="" id="default-select" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: 3 }}>
                                                                <select className="form-control" name="categorie" defaultValue="all" onChange={this.handleChange}>
                                                                    <option value="all">Toutes les catégories</option>
                                                                    <option value="Marketing">Marketing</option>
                                                                    <option value="Développement">Développement</option>
                                                                    <option value="Programmation">Programmation</option>
                                                                    <option value="AI">AI</option>
                                                                    <option value="BI">BI</option>
                                                                    <option value="Langues">Langues</option>
                                                                    <option value="DevOps">DevOps</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="mt-10 col-lg-4" >
                                                            <input type="text" name="enseignant" placeholder="Chercher l'enseignant par nom" onChange={this.handleChange}
                                                                className="form-control" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: 3 }} />
                                                        </div>

                                                    </div>

                                                </nav>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">

                                            <div className="row">
                                                {
                                                    this.state.cours.length > 0 ?
                                                        this.state.cours.map((item) => {
                                                            
                                                            return (

                                                                <RenderCours key={item.id} cours={item}
                                                                    prof={this.props.professeurs.professeurs.filter((p) => parseInt(p.iduser) === parseInt(item.professeurId))[0]}
                                                                    image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.imageId))[0]}
                                                                    subscribe={this.props.subscribe}
                                                                    unsubscribe={this.props.unsubscribe}
                                                                    inscription={this.props.inscriptions.filter((SubItem) => SubItem.courId.id === item.id )[0]}
                                                                    countSubscriptions={this.props.totalSubscription.filter((SubItem) => SubItem.courId.id === item.id).length}
                                                                    role={this.props.role}
                                                                />
                                                            );
                                                        })
                                                        :
                                                        <Container>
                                                            <Typography  gutterBottom variant="h2" component="h2" style={{textAlign: "center"}} >
                                                            Aucun résultat.
                                                            </Typography>
                                                        </Container>
                                                        
                                                }
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