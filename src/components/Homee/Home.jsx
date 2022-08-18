import React, { Fragment } from "react"
import "./home.css"
import Header from './Header';
import "./headr.css"
import headlogo from "./../../images/1.png"
import make1 from "./../../images/make1.png"
import data from './../data/Data';
import car from "./../../images/car1.jpg"
import car2 from "./../../images/car2.jpg"
import car3 from "./../../images/car3.jpg"

// import mmakes from "./../../images/mmakes.jpg"
import foot from "../../images/wave2.png"

function Home() {

    return (
        <Fragment>
            <Header />
            <div className="num mb-5 mt-0 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center">
                                <h2 className="numcontent " id="numcontent"> 8965<span><i className="fa-solid fa-plus"></i></span> </h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h2 className="numcontent "> 7845<span><i className="fa-solid fa-plus"></i></span> </h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h2 className="numcontent "> 1287<span><i className="fa-solid fa-plus"></i></span> </h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h2 className="numcontent "> 5687<span><i className="fa-solid fa-plus"></i></span> </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ////////////////////////////////// */}
            <section>
                <div className="selves mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-7">
                                <div className="text-end">
                                    <img src={headlogo} alt="no-img" className="img-fluid selvesimg" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div className="selvescont">
                                    <div>
                                        <h1>
                                            We pride ourselves on <br /> making real food from the <br /> best ingredients.
                                        </h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Mollitia quidem facilis expedita quos earum minima non
                                            tempora debitis vero nemo, molestiae doloremque iusto,
                                            totam rerum! Harum animi nulla dolor ipsam!</p>
                                        <button className="btn btn-danger headerbtn"> New oeder <span className="ms-2"><i className="fa-solid fa-basket-shopping"></i></span></button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* /////////////////////////////// */}
            <section className="make mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div>
                                <h1>
                                    We make everything by hand <br /> with the best possible <br /> ingredients
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                </p>
                            </div>
                            <div>
                                <p><span className="me-2"><i className="fa-solid fa-check"></i></span>Etiam sed dolor ac diam volutpat.</p>
                                <p><span className="me-2"><i className="fa-solid fa-check"></i></span>Erat volutpat aliquet imperdiet.</p>
                                <p><span className="me-2"><i className="fa-solid fa-check"></i></span>purus a odio finibus bibendum</p>

                            </div>
                            <button className="btn btn-danger headerbtn"> New oeder </button>

                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className="row">
                                <div>
                                    <img src={make1} alt="no-img" className="img-fluid" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* //////////////////////////// */}
            <div className="some mb-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h1 className="my-4">When a man's stomach is full it makes no <br />
                                    difference whether he is rich or poor.</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                </p>
                                <a href="#sss" className="someref"> watch our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ////////////////////////////////////////// */}
            <div className="food mb-4 ">
                <div className="container">
                    <div className="row">
                        <h1 className="foodheader text-center my-4">Explore Our Foods</h1>
                        <p className="foodpatag text-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat erat tellus. Far far away,
                            behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.


                        </p>
                    </div>

                    <div className="row">{data.map(function (elem,index) {
                        return (
                            <div className="col-md-4 col-lg-4 col-sm-12 " key={index}>
                                <div className="foodcon mt-3 p-1">
                                    <img src={elem.img} alt="no-imf" className="img-fluid" />
                                    <h5 className="mb-0 foodcont">{elem.cont}</h5>
                                    <p className="mt-0">{elem.subcon}</p>
                                    <h3>{elem.price}</h3>
                                </div>
                                <button className="btn btn-danger headerbtn mt-3"> New oeder <span className="ms-2"></span></button>

                            </div>
                        )
                    })}</div>
                </div>
            </div>
            {/* ///////////////////////////////////////////// */}
            <div className="test ">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center testcont">Testimonials</h1>
                        <div className="col-md-12">
                            <div>
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={car} class=" text-center" alt="..." />
                                            <p className="testparag">"Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they live."</p>

                                        </div>
                                        <div class="carousel-item active">
                                            <img src={car2} class=" text-center" alt="..." />
                                            <p className="testparag">"Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they live."</p>

                                        </div>
                                        <div class="carousel-item active">
                                            <img src={car3} class=" text-center" alt="..." />
                                            <p className="testparag">"Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they live."</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*///////////////////////////////// */}
            <h2 className="text-center mb-3 Asked"> Frequently Asked Questions</h2>

            <div className="Baked ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="Bakedcont text-center">
                                <h3>Baked fresh daily by bakers with passion</h3>
                            </div>

                        </div>
                        <div className="col-md-5">
                            <button className="btn btn-danger headerbtn mt-3"> New oeder <span className="ms-2"></span></button>

                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////// */}
            <footer className="footer mt-5">
            <img src={foot} alt="no-img" className="img-fluid" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="foot text-center">
                                <ul>
                                    <li>
                                        <a href="#d">Register</a>
                                    </li>
                                    <li>
                                        <a href="#d">Forum</a>
                                    </li>
                                    <li>
                                        <a href="#d">Affiliate</a>
                                    </li>
                                    <li>
                                        <a href="#d">FAQ</a>
                                    </li>
                                </ul>
                                <ul className="mt-4">
                                    <li>
                                        <a href="#d"><i class="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i class="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i class="fa-brands fa-youtube"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i class="fa-solid fa-sportsball"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i class="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i class="fa-brands fa-square-instagram"></i></a>
                                    </li>
                                </ul>
                                <p className="text-center ms-5"> © 2021. Foodera. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>

    )
}




export default Home