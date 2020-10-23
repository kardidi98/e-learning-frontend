import React from 'react';
import logo from '../favicon.ico';
import { Link } from 'react-router-dom';



export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            authority:'',
        }
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount(){
        if(localStorage.getItem("username") && localStorage.getItem("authority")){
            this.setState({
                username : localStorage.getItem("username"),
                authority : localStorage.getItem("authority")
            })
          
        }

    }
    logOut(){
        this.props.logout();
    }
    render() {
        return (

            <div>
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="header-area">
                        <div className="main-header ">
                            <div className="header-top d-none d-lg-block" >
                                <div className="header-left-social">
                                    <ul className="header-social">
                                        <li><a href="#link"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#link"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#link"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <div className="col-xl-12">
                                        <div className="row  align-items-center">
                                            <div className="header-info-left">
                                                <ul>
                                                    <li>e.learning@gmail.com</li>
                                                    <li>+212 667 45 22 56</li>
                                                </ul>
                                            </div>
                                            <div className="header-info-right " style={{position:"absolute",right:0}}>
                                                {
                                                    this.state.username !== ''?
                                                    <ul className="d-flex align-items-center">
                                                        <li style={{display : this.state.authority === "ROLE_PROFESSEUR" ? "block":"none"}}>
                                                            <Link to="/ajouterCours" style={{ textDecoration: "none" }} className="genric-btn success-border circle">
                                                                Ajouter Un Cours
                                                            </Link>
                                                        </li>
                                                        <li className='dropdown'>
                                                            <Link style={{textDecoration: 'none'}} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                                {this.state.username} 
                                                                <span class="caret"></span>
                                                            </Link>
                                                            <ul className="dropdown-menu">
                                                                <li><a href='#logout' onClick={()=>this.logOut()} style={{textDecoration: 'none'}}>Déconnexion</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    :
                                                    <ul>
                                                        <li><Link to="/ajouterCours" style={{ textDecoration: "none" }} className="genric-btn success-border circle">Ajouter Un Cours</Link></li>
                                                        <li ><Link to="/connexion" style={{ textDecoration: "none" }}><i className="ti-user"></i>Se connecter</Link></li>
                                                        <li><Link to="/inscription" style={{ textDecoration: "none" }}><i className="ti-lock"></i>S'inscrire</Link></li>
                                                    </ul>
                                                    
                                                }
                                                
                                            </div>
                                            <div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-bottom header-sticky">
                                <div className="logo d-none d-lg-block">
                                    <Link to="/accueil"><img src={logo} alt="" /></Link>
                                </div>
                                <div className="container">
                                    <div className="menu-wrapper">
                                        <div className="logo logo2 d-block d-lg-none">
                                            <Link to="/accueil"><img src={logo} alt="" /></Link>
                                        </div>
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link to="/accueil" style={{ textDecoration: "none" }}>Accueil</Link></li>
                                                    <li><Link to="/cours" style={{ textDecoration: "none" }}>Cours</Link></li>
                                                    <li><Link to="/enseignants" style={{ textDecoration: "none" }}>Enseignants</Link></li>
                                                    <li><Link to="/apropos" style={{ textDecoration: "none" }}>A Propos</Link></li>
                                                    <li><Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="header-search d-none d-lg-block d-flex">
                                            <form action="#" className="form-box f-right ">
                                                <input type="text" name="Search" placeholder="Chercher Des Cours ..." />
                                                <div className="search-icon">
                                                    <i className="fas fa-search special-tag"></i>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>

        )
    }
}