import React from 'react';
import { Loading } from './LoadingComponent';


let categorie = "all";
let enseignant = "";


function RenderCours({ cours, prof, image }) {
    return (

        <div className=" col-lg-4 col-md-6 col-sm-6 " >
            <div className="single-course mb-40">
                <div className="course-img">
                    <img src={"data:image/*;base64," + image.data} alt={cours.nom} width="100%" height="100%" />
                </div>
                <div className="course-caption">
                    <div className="course-cap-top">
                        <h3>{cours.nom}</h3>
                    </div>
                    <div className="course-cap-mid justify-content-between align-items-center">

                        <ul>
                            <li>52 inscrits.</li>
                            <li>{cours.description}.</li>
                        </ul>
                        <ul>
                            <li><strong>Par: </strong><a href="#link">{prof.nom + ' ' + prof.prenom + '.'}</a></li>
                        </ul>

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

    )

}



export default class Cours extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cours: this.props.cours.cours,

        }
    }

    handleChage = (e) => {
        let cours = this.props.cours.cours;
        let professeur = [];

        const target = e.target;
        const value = target.value;
        const name = target.name;

        if (name === "enseignant") { enseignant = value }
        if (name === "categorie") { categorie = value }
        if (enseignant !== "") {
            professeur = this.props.professeurs.professeurs.filter((item) => item.nom.toLowerCase().includes(enseignant.toLowerCase()))[0];
        }

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
        if (enseignant === "" && categorie === "all") {
            this.setState({
                cours: this.props.cours.cours
            })
        }


    }

    render() {

        if (this.props.cours.isLoading || this.props.professeurs.isLoading || this.props.images.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.cours.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.cours.errMess}</h4>
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
                                                                <select className="form-control" name="categorie" defaultValue="all" onChange={this.handleChage}>
                                                                    <option value="all">Toutes les catégories</option>
                                                                    <option value="Marketing">Marketing</option>
                                                                    <option value="Développement">Développement</option>
                                                                    <option value="Programmation">Programmation</option>
                                                                    <option value="AI">AI</option>
                                                                    <option value="BI">BI</option>
                                                                    <option value="Langues">Langues</option>
                                                                    <option value="Langues">DevOps</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="mt-10 col-lg-4" >
                                                            <input type="text" name="enseignant" placeholder="Chercher d'enseignant par nom" onChange={this.handleChage}
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
                                                                <RenderCours cours={item}
                                                                    prof={this.props.professeurs.professeurs.filter((p) => parseInt(p.iduser) === parseInt(item.professeurId))[0]}
                                                                    image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.imageId))[0]}
                                                                />
                                                            );
                                                        })
                                                        :
                                                        <div className="col-lg-12 col-md-12 col-sm-12 " style={{ textAlign: "center" }}>
                                                            <h1>No Result</h1>
                                                        </div>
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