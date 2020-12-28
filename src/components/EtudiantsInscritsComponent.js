import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Loading } from './LoadingComponent';
import Button from '@material-ui/core/Button';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { Container } from '@material-ui/core';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DocumentEtudiantsInscrits from "./pdf/pdfListEtudiants";

export default class EtudiantsInscrits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inscription: this.props.inscriptions,

        }
    }


    render() {
        if (this.props.etudiantsLoading || this.props.coursLoading || this.props.inscriptionLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.coursFailed || this.props.etudiantsFailed || this.props.inscriptionFailed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.coursFailed}</h4>
                            <h4>{this.props.etudiantsFailed}</h4>
                            <h4>{this.props.inscriptionFailed}</h4>
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
                                            <h2>Etudiants Inscrits Dans Ce Cours</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    {

                        this.state.inscription.length > 0
                            ?



                            <div className="container pb-40">

                                <TableContainer component={Paper} elevation={3}>
                                    <Table aria-label="Cart">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell colSpan="5" align="right">
                                                    <Button variant="contained" color="primary" startIcon={<GetAppOutlinedIcon />}>
                                                        <PDFDownloadLink 
                                                            document={<DocumentEtudiantsInscrits
                                                             inscriptions={this.state.inscription} 
                                                             etudiants={this.props.etudiants}
                                                             />} 
                                                             fileName={"Liste_etudiants_"+ this.state.inscription[0].courId.nom+ ".pdf"}
                                                             style={{textDecoration: "none", color: "white"}}>
                                                        {({ blob, url, loading, error }) => (loading ? 'Préparation du document...' : 'Télécharger PDF !')}
                                                        </PDFDownloadLink>
                                                        
                                                    </Button>
                                                     
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>

                                                <TableCell align="left"><Typography align='left' variant="h6" color="textPrimary" component="p">Nom</Typography></TableCell>
                                                <TableCell align="left"><Typography align='left' variant="h6" color="textPrimary" component="p">Prénom</Typography></TableCell>
                                                <TableCell align="left"><Typography align='left' variant="h6" color="textPrimary" component="p">Email</Typography></TableCell>
                                                <TableCell align="left"><Typography align='left' variant="h6" color="textPrimary" component="p">Numéro Tél.</Typography></TableCell>
                                                <TableCell align="left"><Typography align='left' variant="h6" color="textPrimary" component="p">Date d'inscription</Typography></TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {
                                                ((this.props.inscriptions)).map((subItem) => (



                                                    Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                        <TableRow key={subItem.id}>
                                                            <TableCell align="left" ><Typography align="left" variant="body" color="textPrimary" component="p">{item.nom}</Typography></TableCell>
                                                            <TableCell align="left" ><Typography align="left" variant="body" color="textPrimary" component="p">{item.prenom}</Typography></TableCell>
                                                            <TableCell align="left"><Typography align="left" variant="body" color="textPrimary" component="p">{item.email}</Typography></TableCell>

                                                            <TableCell align="left"><Typography align="left" variant="body" color="textPrimary" component="p" >{item.tel}</Typography></TableCell>
                                                            <TableCell align="left"><Typography align="left" variant="body" color="textPrimary" component="p">{subItem.dateInscription}</Typography></TableCell>

                                                        </TableRow>



                                                    ))
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>



                            :
                            <Container>
                                <Typography gutterBottom variant="h2" component="h2" style={{ textAlign: "center" }} >
                                    Aucun résultat.
                                </Typography>
                            </Container>
                    }
                </main>
            );

        }

    }



}
