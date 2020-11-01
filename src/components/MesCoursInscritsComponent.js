import React from 'react';
import { Loading } from './LoadingComponent';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { Button, Container, Typography } from '@material-ui/core';
import { Image } from 'react-bootstrap';



function RenderCours({ cours, image, unsubscribe , countSubscriptions}) {
    return (

        <div className=" col-lg-12 col-md-12 col-sm-12 " >
            <div className="my-single-course mb-40 row align-items-center">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    {
                        image ?
                            <Image src={"data:image/*;base64," + image.data} alt={cours.nom} width="100%" height="100%" />
                            :
                            <Image src="assets/img/logo/icon-cours.jpg" alt={cours.nom} width="100%" height="100%" />
                    }                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 my-course-caption">
                    <div className="course-cap-top d-flex justify-content-between align-items-center">
                        <h1>{cours.nom}</h1>
                        <div className="align-items-center"><FolderOpenOutlinedIcon style={{ color: "#4CD3E3" }} />&nbsp;{cours.categorie}</div>
                    </div>

                    <div className="my-course-cap-mid justify-content-between ">

                        <ul>
                            <li>{countSubscriptions +" inscrits."}</li>
                            <li>{cours.description}.</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-3 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
                   
                    <Button onClick={unsubscribe.bind(this,cours.id)} variant="contained" color="secondary" startIcon={<DeleteOutlineIcon />}>
                        Se désinscrire
                     </Button>

                </div>

            </div>
        </div>

    )

}



export default class MesCoursInscrits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inscription: this.props.inscriptions,

        }
    }

    handleChange = (e) => {
        let inscriptions = this.props.inscriptions;


        const target = e.target;
        const value = target.value;

        if (value === "all") {
            this.setState({
                inscription: this.props.inscriptions
            })
        }

        else {
            this.setState({
                inscription:  inscriptions.filter((item) => item.courId.categorie === value)
            })
        }



    }

    render() {

        if (this.props.inscriptionLoading || this.props.imageLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.inscriptionFailed || this.props.imageFailed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.subscription.errMess}</h4>
                            <h4>{this.props.image.errMess}</h4>
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
                                            <h2>Mes Cours Inscrits</h2>
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
                                                                    <option value="Langues">DevOps</option>
                                                                </select>
                                                            </div>

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
                                                    this.state.inscription.length > 0 ?
                                                        this.state.inscription.map((item) => {
                                                            return (
                                                                <RenderCours cours={item.courId}
                                                                    image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.courId.imageId))[0]}
                                                                    unsubscribe = {this.props.unsubscribe}
                                                                    countSubscriptions={this.props.totalSubscription.filter((SubItem) => SubItem.courId.id === item.courId.id).length}
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