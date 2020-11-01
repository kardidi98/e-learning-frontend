import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
        fontSize: 11,
        backgroundColor: 'white'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    Container: {
        backgroundColor: "white",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        padding: 20
    },
    Details: {
        flexDirection: "column",
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#112131',
        borderStyle: 'solid',
        
    },
    elements:{
        marginBottom: 5,
        borderBottomWidth: 1,
        padding: 10,
    },
    titleElement:{
        marginBottom: 10,
        fontWeight: "bold",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
    }
});

export default class DocumentEtudiantsInscrits extends React.Component {

    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page} >
                    
                        {this.props.inscriptions?
                            <View style={styles.Container} >

                                        
                                        <View style={styles.Details}>
                                            <Text style={styles.titleElement}>Nom</Text>
                                            {
                                                ((this.props.inscriptions)).map((subItem) => (
                                                    Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                                <Text style={styles.elements}>{item.nom}</Text>
                                                                
                                                    ))
                                                ))
                                            }
                                        </View>
                                        <View style={styles.Details}>
                                            <Text style={styles.titleElement}>Prénom</Text>
                                            {
                                                ((this.props.inscriptions)).map((subItem) => (


                                                        Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                            
                                                                <Text style={styles.elements}>{item.prenom}</Text>
                                                            
                                                    ))
                                                ))
                                            }
                                        </View>
                                        <View style={styles.Details}>
                                            <Text style={styles.titleElement}>Email</Text>

                                            {
                                                ((this.props.inscriptions)).map((subItem) => (
                                                        Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                                <Text style={styles.elements}>{item.email}</Text>
                                                         ))
                                                ))
                                            }
                                        </View>
                                        <View style={styles.Details}>
                                            <Text style={styles.titleElement}>Numéro Tél.</Text>

                                            {
                                                ((this.props.inscriptions)).map((subItem) => (

                                                        Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                                <Text style={styles.elements}>{item.tel}</Text>
                                                            
                                                    ))
                                                ))
                                            }
                                        </View>
                                        <View style={styles.Details}>
                                            <Text style={styles.titleElement}>Date d'inscription</Text>
                                            {
                                                ((this.props.inscriptions)).map((subItem) => (


                                                    
                                                    
                                                        Object.assign([{}], this.props.etudiants.filter((etudiant) => etudiant.iduser === subItem.etudiantId)).map((item) => (
                                                            
                                                                <Text style={styles.elements}>{subItem.dateInscription}</Text>
                                                   ))
                                                ))
                                            }
                                        </View>

                            </View>
                            :
                            ""
    }
                        

                </Page>
            </Document>
        )
    }

};


