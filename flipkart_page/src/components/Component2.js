import React, { Component } from "react";
import './Component2.css'

export default class Menu extends Component{
    render(){
        return (
            <>
            <div className="menu">
                <a href="#0" className="colFlex" style={{marginLeft:"2%"}}>
                    <div><img src={require("./images/menu-image-1.webp")} alt="."/></div>
                    <div className="items">Top Offers</div>
                    </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-2.webp")} alt="."/></div>
                    <div className="items">Grocery</div>
                    </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-3.webp")} alt="."/></div>
                    <div className="items">Mobiles</div>
                </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-4.webp")} alt="."/></div>
                    <div className="items">
                        Fashion 
                        <img src={require("./images/arrow-black1.png")} alt="."/>
                    </div>
                </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-5.webp")} alt="."/></div>
                    <div className="items">
                        Electronics 
                        <img src={require("./images/arrow-black1.png")} alt="."/>
                    </div>
                </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-6.webp")} alt="."/></div>
                    <div className="items">
                        Home 
                        <img src={require("./images/arrow-black1.png")} alt="."/>
                    </div>
                </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-7.webp")} alt="."/></div>
                    <div className="items">Appliances</div>
                </a>
                <a href="#0" className="colFlex">
                    <div><img src={require("./images/menu-image-8.webp")} alt="."/></div>
                    <div className="items">Travel</div>
                </a>
                <a href="#0"className="colFlex"  style={{marginRight:"1%",width:"15%"}}>
                    <div><img src={require("./images/menu-image-9.webp")} alt="."/></div>
                    <div className="items" style={{marginTop:"-1%"}}>
                        Beauty,Toys & More
                        <img src={require("./images/arrow-black1.png")} alt="."/>
                    </div>
                </a>
            </div>
            </>
        )
    }
}