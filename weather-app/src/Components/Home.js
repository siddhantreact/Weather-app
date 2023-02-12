import React from 'react'
import "../Styles/Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (

        <div>



            <header className="  header ">

                <div className="btn"> <Link to={"/"}>home</Link> </div>
                <div className="btn"> <Link to={"/about"}>about</Link> </div>
                <div className="btn"> <Link to={"/weather"}>weather</Link> </div>


            </header>






            <main classNameName='main'>

                <section className="section-hero">

                    <img className="logo" src="../images/around-the-world.png" />

                    <div className=" section-hero-intro section grid container grid-two-column">

                        <div className="section-hero-data">

                            <h1>get the  <span>latest weather</span> report</h1>

                        </div>
                        <div className="section-hero-image">

                            <img src="../images/istockphoto-1305858039-1024x1024.jpg" alt="hero-image" />



                        </div>

                        <div className="btn section-hero-button">

                 

                            <Link to={"/weather"}>search</Link> 

                        </div>


                    </div>

                </section>


            </main>




            <footer className=" section-footer">


                <h5>@copyright 2022</h5>


            </footer>


        </div>
    )
}

export default Home
