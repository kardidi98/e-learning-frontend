let keyword = ""
if(localStorage.getItem("keyword")){
     keyword = localStorage.getItem("keyword")
}
export const InitialUserRegister = {
    id: "",
    email: "",
    password: "",
    role: "",
    nom: "",
    prenom: "",
    adresse: "",
    tel: 0,
};


export const InitialUserLogin = {
    email: "",
    password: ""
    
};

export const InitialCours = {
    id: "",
    nom: "",
    dateDeb: "",
    dateFin: "",
    categorie: "",
    description: "",
};

export const KeywordForm = {
    key : keyword
}