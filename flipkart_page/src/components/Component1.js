import React, { Component } from "react";
import './Component1.css'
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
export default class Header extends Component{
    render(){
        const showLogin=()=>{
            return <div className="LoginMaterial">
                <div className="L1">
                    <p><b>New Customer?</b></p><pre>    </pre>
                    <p><a href="#0" style={{color:"rgb(0, 132, 240)"}}><b>Sign Up</b></a></p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",marginBottom:"8%",marginRight:"8%"}}/>
                    <p>My Profile</p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",marginBottom:"8%",marginRight:"8%"}}/>
                    <p>Flipkart Plus Zone</p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",marginBottom:"8%",marginRight:"8%"}}/>
                    <p>Orders</p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",marginBottom:"8%",marginRight:"8%"}}/>
                    <p>WishList</p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",marginBottom:"8%",marginRight:"8%"}}/>
                    <p>Rewards</p>
                </div>
                <hr/>
                <div className="L">
                    <img src={require("./images/my-Profile.png")} alt="" style={{height:"20px",width:"20px",    marginBottom:"8%",marginRight:"8%"}}/>
                    <p>Gift Cards</p>
                </div>
            </div>
        }
        return (
            <>
            <div className="Header">
                <div className="space1"></div>
                <div className="Materials">
                    <div style={{display:"flex",width:"8%"}}>
                        <div className="Flipkart">
                            <img style={{width:"80%",height:"19px"}} src={require("./images/flipkart-plus.png")} alt="Flipkart" title="Flipkart"/>
                            <a href="#0">
                                <span>Explore</span> 
                                <span style={{color:"yellow"}}>Plus </span>
                                <img style={{width:"10%",height:"10px"}} src={require("./images/plus.png")} alt="+"/>
                            </a>
                        </div>
                    </div>

                    <div style={{display:"flex",width:"40%",marginLeft:"1%"}}>
                        <div className="Form">
                            <input className="searchTxt" type="text" placeholder="Search for products, brands and more"/>
                            <button className="searchBtn"><img style={{width:"fit-content",height:"20px"}} src={require("./images/search.png")} alt="search"/></button>
                        </div>
                    </div>

                    <div style={{display:"flex",width:"9%",marginLeft:"5%"}}>
                        <div className="Login">
                            <Tippy
                             content={showLogin()}
                             interactive={true}
                             theme="light"
                            >
                                <button className="loginBtn"><b>Login</b></button>
                            </Tippy>
                        </div>
                    </div>
                    <a href="#0" className="sell" style={{marginLeft:"5%"}}>
                        <div className="Seller">
                                <b>Become a Seller</b>
                        </div>
                    </a>
                   <Tippy
                        content={showLogin()}
                        interactive={true}
                        theme="light"
                    >
                    <a href="#0" className="more" style={{marginLeft:"4%"}}>
                        <div className="More">
                                <b>More </b>
                                <img src={require("./images/arrowDown.png")} style={{height:"10px"}} alt="."/>
                        </div>
                    </a>
                    </Tippy>
                    <a href="#0" style={{textDecoration:"none",color:"white",marginLeft:"4%"}}>
                        <div className="Cart">
                                <img src={require("./images/cart.png")} style={{height:"15px"}} alt="."/>
                                <b> Cart</b>
                        </div>
                    </a>
                </div>
                <div className="space"></div>
            </div>
            </>
        )
    }
}