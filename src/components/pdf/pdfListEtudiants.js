import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
        fontSize: 11,
        backgroundColor: 'white',
        padding:20,
        
    },
    Container: {
        backgroundColor: "white",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },
    Details: {
        flexDirection: "column",
        marginLeft: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#112131',
        borderLeftStyle: 'solid',
        
        
    },
    elements:{
        marginBottom: 5,
        padding: 10,
    },
    titleElement:{
        marginBottom: 10,
        fontWeight: "bold",
        padding: 10,
    },
    Title:{
        flexDirection: "column",
        textAlign: "center",
        fontSize: 20,
        
        
    },
    SubTitle:{
        flexDirection: "column",
        textAlign: "center",
        fontSize: 12,
        marginBottom: 20
        
    }
});

export default class DocumentEtudiantsInscrits extends React.Component {

    render() {
        return (
            <Document>

                <Page size="A4" style={styles.page} >
                            <Text style={styles.Title}>Liste des étudiants inscrits</Text>
                            <Text style={styles.SubTitle}>~{"Cours: "+ this.props.inscriptions[0].courId.nom}~</Text>
                    
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


