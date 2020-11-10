import React from 'react';
import { Loading } from './LoadingComponent';
import { Image } from 'react-bootstrap';
import { Container, Typography } from '@material-ui/core';


function RenderProf({ prof, image }) {

    return (


        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-team mb-30">
                <div className="team-img">
                    <Image src={"data:image/*;base64," + image.data} alt={prof.id} width="100%" height="100%" />

                </div>
                <div className="team-caption" >
                    <h3><a href="#enseignant">{prof.nom + ' ' + prof.prenom}</a></h3>
                    <p style={{ textAlign: "center" }}>Enseignant</p>
                </div>
            </div>
        </div>

    )

}

export default class Enseignants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            professeurs: this.props.professeurs.professeurs,

        }
    }

    handleChange = (e) => {

        const target = e.target;
        const value = target.value;

        if (value !== "") {

            this.setState({
                professeurs: this.props.professeurs.professeurs.filter((item) => item.nom.toLowerCase().includes(value.toLowerCase()))
            })
        }
        else {
            this.setState({
                professeurs: this.props.professeurs.professeurs
            })
        }

    }
    render() {
        if (this.props.profLoading || this.props.imageLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.profFailed || this.props.imageFailed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.professeurs.errMess}</h4>
                            <h4>{this.props.image.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <main >
                    <div class="slider-area ">
                        <div class="slider-height2 d-flex align-items-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="hero-cap hero-cap2 text-center">
                                            <h2>Enseignants</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    <div className="container">

                        <div className="row mb-15 " >
                            <div className="col-lg-12">
                                <div className=" mb-90">
                                    <nav>
                                        <div className="row nav nav-tabs" id="nav-tab" role="tablist" style={{ paddingBottom: 20, justifyContent: "center" }}>

                                            <div className="mt-10 col-lg-4" >
                                                <input type="text" name="enseignant" placeholder="Charcher un enseignant par nom .." onChange={this.handleChange}
                                                    className="form-control" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: 3 }} />
                                            </div>

                                        </div>

                                    </nav>

                                </div>
                            </div>
                        </div>
                        <div class="team-area container ">
                            <div class="container">
                                <div class="row" style={{ width: "100%" }}>

                                    {
                                        this.state.professeurs.length > 0 ?
                                            this.state.professeurs.map((item) => {
                                                return (
                                                    <RenderProf prof={item}
                                                        image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.idimage))[0]}
                                                    />
                                                );
                                            })
                                            :
                                            <Container>
                                                <Typography gutterBottom variant="h2" component="h2" style={{ textAlign: "center" }} >
                                                    Aucun résultat.
                                                </Typography>
                                            </Container>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
    }
}