import React from 'react';
import { Loading } from './LoadingComponent';
import { Image } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Control, Form } from 'react-redux-form';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: "true"
        }

        this.handleUpdate = this.handleUpdate.bind(this);

    }
    handleUpdate(values) {
        this.setState({
            disabled: "true"
        });
        this.props.update(values.id,values.email,values.role, values.nom, values.prenom, values.adresse,
            values.tel, values.image)
    }
    enableInputs = () => {
        this.setState({
            disabled: "false"
        })
    }
    render() {
        if (this.props.usersLoading || this.props.imagesLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.usersFailed || this.props.imagesFailed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.usersFailed}</h4>
                            <h4>{this.props.imagesFailed}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <main>
                    <div className="slider-area ">
                        <div className="slider-height2 d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap hero-cap2 text-center">
                                            <h2>Profile</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="form-section  " id="profile">
                        <div  className="  container justify-content-center " style={{ textAlign: "center", width: "250px", height: "50%" }}>
                            {
                                this.props.image.data ?
                                    <Image style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
                                        src={"data:image/*;base64," + this.props.image.data} alt={this.props.user.nom} roundedCircle fluid />
                                    :
                                    <Image style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
                                        src="assets/img/logo/user_icon.png" alt={this.props.user.nom} roundedCircle fluid />

                            }

                        </div>
                    &nbsp;
                    <div style={{ textAlign: "center" }}>
                            <Typography component="h3" variant="p">{this.props.user.nom + " " + this.props.user.prenom}</Typography>
                        </div>
                    &nbsp;
                    <div className="row">
                            <Paper className="col-lg-8 col-md-8 container" elevation={3} style={{ padding: 50 }} >
                                <Typography component="h2" variant="p">Informations Personnelles</Typography>
                            &nbsp;
                                <Form className="form form_form" model="user"
                                    onSubmit={(values) => this.handleUpdate(values)} id="SignUpForm" encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group" hidden="true">
                                                <Control.text className="form-control "  model=".id"  name="id" id="id" type="text"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <Control.text className="form-control " model=".nom" disabled={this.state.disabled === "false" ? "disabled" : ""}
                                                    name="nom" id="nom" type="text" placeholder="Nom"
                                                    required />

                                            </div>


                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.text className="form-control " model=".prenom" disabled={this.state.disabled === "false" ? "disabled" : ""}
                                                    name="prenom" id="prenom" type="text" placeholder="Prénom"
                                                    required />

                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.text className="form-control " model=".tel" disabled={this.state.disabled === "false" ? "disabled" : ""}
                                                    name="tel" id="tel" type="number" placeholder="Tél." />
                                            </div>


                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Control.text className="form-control " model=".adresse" disabled={this.state.disabled === "false" ? "disabled" : ""}
                                                    name="adresse" id="adresse" type="text" placeholder="Adresse"
                                                    required />

                                            </div>
                                        </div>

                                        <div className="col-sm-6" style={{ display: (this.state.disabled === "true") ? "none" : "block" }}>
                                            <div className=" form-group">
                                                <label for="image">
                                                    <div className="genric-btn default justify-content-center"
                                                        style={{ border: "1px solid #E5E6E9" }}>
                                                        <i className="fa fa-upload" style={{ color: "#2D3092" }}></i>
                                                            &nbsp;Changer votre image de profile
                                                        </div>
                                                </label>
                                                <Control.file className="form-control " model=".image"
                                                    name="image" id="image" type="file" accept="image/*" placeholder="Image" hidden="true" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-group mt-3" style={{ display: this.state.disabled === "false" ? "block" : "none", textAlign: "center" }}>

                                        <button type="submit" className="button button-Form boxed-btn">Sauvegarder les modifications</button>

                                    </div>
                                </Form>
                                <div className="form-group mt-3" style={{ display: this.state.disabled === "true" ? "block" : "none", textAlign: "center" }}>

                                    <button type="button" onClick={this.enableInputs} className="button button-Form boxed-btn">Modifier Mon Profile</button>
                                </div>

                            </Paper>
                        </div>

                    </section>
                </main>

            )
        }
    }

}