import React from "react";
import WhatWeDoNote from "./WhatWeDo";
import OurWorks from "./HappyDonor";
import Groomer from "./Groomer";
import StarComponent from "./StarXAi";
import AgencyComp from "./AgencyX";
import InovoiceComponent from "./Inovoice";
function Navbar(){
 return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between">
                    <div>
                        <a className="navbar-brand text-white" href="#">
                            <img width={100} src="https://i.ibb.co/sgNfKkB/Logo-1.png" alt="" />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item active">
                               
                               <a to="/saloon" class="nav-link" href="/saloon">
                                    Saloon
                               </a>
                             
                            </li>
                            <li class="nav-item">
                                <a to="/About" class="nav-link" href="/About us">
                                    About us
                                </a>
                            </li>
                            <li class="nav-item">
                                
                                <a to="/Register" class="nav-link " href="/Register">
                                    <button class="btn btn-light bg-transperent">Register</button>
                                </a> 


                                
                            </li>

                            <li class="nav-item">
                                <a to="/About" class="nav-link" href="/About us">
                                   get started
                                </a>
                            </li>
                        </ul>
                    </div>
                 </nav> 


                 <div className="first-comp">
                    <WhatWeDoNote></WhatWeDoNote>
                 </div>
                 <div>
                    <Groomer></Groomer>
                 </div>
                 <div>
                    <OurWorks></OurWorks>
                 </div>
                <div>
                    <StarComponent></StarComponent>
                </div>        
                <div>
                    <AgencyComp></AgencyComp>
                </div>    
                <div>
                    <InovoiceComponent></InovoiceComponent>
                    </div>     

    </div>
 )
}
export default Navbar ;