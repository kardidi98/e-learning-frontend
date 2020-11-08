import {getAllCourses,getAllProfessors,getImages, getAllStudents,getSubscriptions,getCoursesByKeyWord} from "./ActionCreators";
const keyword = ""
if(localStorage.getItem("keyword")){
     keyword = localStorage.getItem("keyword")
}


export const initialState = {
    professeurs : Object.assign({},getAllProfessors()),
    etudiants :Object.assign({},getAllStudents()),
    cours : Object.assign({},getAllCourses()),
    resultatRechercheCours : Object.assign({},getCoursesByKeyWord(keyword)),
    images:Object.assign({},getImages()),
    inscriptions:Object.assign({},getSubscriptions()),
};

export const Reducer = (state = initialState, action) => {
    return state;
};