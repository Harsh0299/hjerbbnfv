import React, { Component } from "react";
import './Component4.css'
import Slider from "react-slick";
export default class Footer extends Component{
    render(){
        return (
            <>
            <div className="dontKnow">
                <div className="A">
                    <div className="heads">
                        <h2>Deals of the Day</h2>
                        <img style={{height:"25px",marginTop:"1.9%",marginLeft:"-4%"}} src={require("./images/stopwatch.png")} alt="."/>
                        <p>{}</p>
                        <button style={{marginLeft:"auto"}}className="view">VIEW ALL</button>
                    </div>
                    <hr/>
                    <div>
                        <div className="Card">
                            <Slider slidesToShow={5} infinite={false}>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer1.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Never Before Deals</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer2.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Watch</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer3.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Rakhi</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer4.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Toys</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer5.webp")}  style={{height: "100px",width: "50%"}}/>
                                <p>Clothes</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer1.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Never Before Deals</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer2.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Watch</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer3.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Rakhi</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer4.webp")}  style={{height: "100px",width: "70%"}}/>
                                <p>Toys</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            <a title="From ₹494" className="offer" href="#0">
                                <img alt="." src={require("./images/offer5.webp")}  style={{height: "100px",width: "50%"}}/>
                                <p>Clothes</p>
                                <p className="t2">From ₹494</p>
                                <p className="t3">Callmate, conekt....</p>
                            </a>
                            </Slider>
                        </div>
                        
                    </div>
                </div>
                <a href="#0">
                    <div className="B">
                        <img src={require("./images/add-imageVertical.jpg")} alt="."/>
                    </div>
                </a>
            </div>
            </>
        )
    }
}