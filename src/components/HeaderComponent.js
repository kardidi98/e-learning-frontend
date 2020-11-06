import React from 'react';
import logo from '../favicon.ico';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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
                                    <ul className="header-social ">
                                        <li><a href="#link"><FacebookIcon fontSize="small"/></a></li>
                                        <li><a href="#link"><LinkedInIcon fontSize="small"/></a></li>
                                        <li><a href="#link"><TwitterIcon fontSize="small"/></a></li>
                                        
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
                                                                <span className="caret"></span>
                                                            </Link>
                                                            <ul className="dropdown-menu" >
                                                                <li><Link to="/profile" style={{textDecoration: 'none'}}>Mon Profile</Link></li>
                                                                <hr/>
                                                                <li><Link to={this.state.authority === "ROLE_PROFESSEUR" ? "/mescours":"/coursinscrits"} style={{textDecoration: 'none'}}>Mes Cours</Link></li>
                                                                <hr/>
                                                                <li><a href='#logout' onClick={()=>this.logOut()} style={{textDecoration: 'none'}}>Déconnexion</a></li>
                                                                
                                                                
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    :
                                                    <ul>
                                                        <li ><Link to="/connexion" style={{ textDecoration: "none" }}><PersonOutlinedIcon style={{color: "#4044B4"}}/>Se connecter</Link></li>
                                                        <li><Link to="/inscription" style={{ textDecoration: "none" }}><LockOutlinedIcon style={{color: "#4044B4"}}/>S'inscrire</Link></li>
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
                                                    <SearchIcon/>
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