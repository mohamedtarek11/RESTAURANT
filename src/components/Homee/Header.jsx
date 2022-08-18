import React, { Fragment } from "react"
// import headlogo from "./../../images/1.png"
import "./headr.css"
function Header (){
    return(
<Fragment>
<div className="header mb-0" >
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8 col-lg-6 col-sm-8 text-start">
                <div className="headertext text-start">
                <div>
                <h1>Good food choices <br /> are good <br /> investments.</h1>
                <p className="headerparg">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />                 Etiam et purus a odio finibus bibendum amet leo</p>
                 <div>
                 <button className="btn btn-danger headerbtn"> New oeder <span className="ms-2"><i class="fa-solid fa-basket-shopping"></i></span></button>
                 <button className="btn btn-white ms-sm-3 mt- headerbtn btntwo "> learn more &#x2192; </button>
                 </div>
                </div>
                </div>

            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
                {/* <img src={headlogo} alt="noimg"  className="img-fluid"/> */}
            </div>

        </div>
    </div>
</div>
</Fragment>
    )
}
export default Header
