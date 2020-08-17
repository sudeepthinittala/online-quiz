import React, { Fragment } from 'react';
import {Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
       <Fragment>
           <Helmet><title>quiz</title></Helmet>
           <div id="home">
               <section>
                   
                   <h1> Lets Play Quiz! </h1>
                  
                   <div className="play-button-container">
                       
                               <Link className="play-button" to={{pathname:"/play/instructions/",aboutProps:{text:"User"}}} >
                                   Play
                               </Link>

                   </div>
                   <div className="auth-container">
                       <Link className="auth-buttons" id="login-button" to="/login">Login</Link>
                       <Link  className="auth-buttons" id="signup-button" to="/register">Register</Link>
                   </div>
               </section>
           </div>
        </Fragment>
    );
};
export default Home;
