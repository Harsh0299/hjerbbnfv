import React, { Component } from "react";
import './Component3.css';
import Slider from "react-slick";

export default class Adds extends Component{
    render(){
        const data = [require("./images/add-image1.jpeg"),require("./images/add-image2.jpeg"),require("./images/add-image3.jpeg"),require("./images/add-image4.jpeg"),require("./images/add-image5.jpeg")];
    
        return (
            <>
                <div>
                    <Slider
                     autoplay={true} 
                     autoplaySpeed={2000}
                     prevArrow = {<button className="arrow1"><img src={require("./images/left-arrow1.png")} alt="." style={{height:"20px",width:"50%"}}/></button>}
                     nextArrow = {<button className="arrow2"><img src={require("./images/right-arrow.png")} alt="." style={{height:"20px",width:"50%"}}/></button>}
                    >
                    {data.map((item,i)=>
                        <a href="#0" key={i}>
                            <img className="add"
                            src={item} 
                            alt="."
                            style={{width:"100%",height:"350px"}}/>
                        </a>
                    )}
                    </Slider>
                </div>
            </>
        )
    }
}