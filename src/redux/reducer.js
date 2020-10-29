import {getAllCourses,getAllProfessors,getImages} from "./ActionCreators";

export const initialState = {
    professeurs : Object.assign({},getAllProfessors()),
    etudiants :[],
    cours : Object.assign({},getAllCourses()),
    images:Object.assign({},getImages()),
};

export const Reducer = (state = initialState, action) => {
    return state;
};