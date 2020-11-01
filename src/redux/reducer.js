import {getAllCourses,getAllProfessors,getImages, getAllStudents,getSubscriptions} from "./ActionCreators";

export const initialState = {
    professeurs : Object.assign({},getAllProfessors()),
    etudiants :Object.assign({},getAllStudents()),
    cours : Object.assign({},getAllCourses()),
    images:Object.assign({},getImages()),
    inscriptions:Object.assign({},getSubscriptions()),
};

export const Reducer = (state = initialState, action) => {
    return state;
};