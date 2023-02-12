import React from 'react'
import "../Styles/About.css"
import   {Link}  from "react-router-dom"

function About() {
    return (


        <div className='main_container'>

            <header className="section-header">

                <div className="btn section-header-button" > <Link to={"/"}>back</Link>  </div>

            </header>
            
            <section className="section-about">

                <div className=" section container grid grid-two-column">

                    <img className="about-image" src="../images/istockphoto-1305858039-1024x1024.jpg" />

                    <h2>Meet Thapa he is a <span>fullstack MERN </span> developer available for freelancing for more details dm on instagram...</h2>

                </div>

            </section>

        </div>


    )
}

export default About
