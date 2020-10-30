import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { IconButton } from '@material-ui/core';
import { Image } from 'react-bootstrap';



function RenderCours({ cours, image, deleteCourse }) {
    return (

        <div className=" col-lg-12 col-md-12 col-sm-12 " >
            <div className="my-single-course mb-40 row align-items-center">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    {
                        image?
                        <Image src={"data:image/*;base64," + image.data} alt={cours.nom} width="100%" height="100%"/>
                        :
                        <Image src="assets/img/logo/icon-cours.jpg" alt={cours.nom} width="100%" height="100%"/>                    
                    }                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 my-course-caption">
                    <div className="course-cap-top d-flex justify-content-between align-items-center">
                        <h1>{cours.nom}</h1>
                        <div className="align-items-center"><FolderOpenOutlinedIcon style={{color :"#4CD3E3"}}/>&nbsp;{cours.categorie}</div>
                    </div>

                    <div className="my-course-cap-mid justify-content-between ">

                        <ul>
                            <li>52 inscrits.</li>
                            <li>{cours.description}.</li>
                        </ul>
                       


                    </div>
                    


                </div>
                <div className="col-lg-2 col-md-12 col-sm-12" style={{textAlign: "center"}}>
                        <Link to={"/editercours/" + cours.id} >
                            <IconButton aria-label="Edit" title="Edit"><EditOutlinedIcon style={{ color: '#2196F3' }} /></IconButton>
                        </Link>
                        <Link onClick={deleteCourse.bind(this,cours.id)}>
                            <IconButton aria-label="Delete" title="Delete"><DeleteOutlineOutlinedIcon style={{ color: '#F44336' }} /></IconButton>
                        </Link>
                    </div>

            </div>
        </div>

    )

}



export default class MesCours extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cours: this.props.cours,

        }
    }

    handleChage = (e) => {
        let cours = this.props.cours;


        const target = e.target;
        const value = target.value;

        if (value === "all") {
            this.setState({
                cours: this.props.cours
            })
        }

        else {
            this.setState({
                cours: cours.filter((item) => item.categorie === value)
            })
        }



    }

    render() {

        if (this.props.cours.isLoading || this.props.images.isLoading) {
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
                                            <h2>Mes Cours</h2>
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
                                                                    image={this.props.images.images.filter((img) => parseInt(img.id) === parseInt(item.imageId))[0]}
                                                                    deleteCourse={this.props.deleteCourse}
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