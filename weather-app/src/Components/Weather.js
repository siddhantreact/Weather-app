import React, { useRef, useState } from 'react'
import "../Styles/Weather.css"
import   {Link}  from "react-router-dom"

import Card from './Card'

function Weather() {

    const input = useRef()

    //weather api call<=====

    const [city ,setCity] = useState()

    const [data, setData] = useState()
    

  //clearing input!!!!

  {console.log(city)}

    async function searchWeather() {

        const cityToSearch = input.current.value


        setCity([...city , cityToSearch])

        const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=1e34d25ac4054494557757c7e39ce347`



        const response = await fetch(apiurl)

        const apiData = await response.json()

        //  console.log( apiData)

         
         setData([apiData])

         setCity([""])

  

    }




    return (
        <div className='container'>




            <header className="section-header">

                <div className="btn section-header-button" > <Link  to={"/"}>back</Link> </div>

            </header>


            <div className='center'>

                <main>

                    <section className="section-search ">



                        <input type="text" ref={input} id="city" defaultValue={city}  className="city-name" />


                        <div className="btn section-search-button"    onClick={searchWeather}>search</div>


                        {/* <div className="section-search-output"></div> */}



                    </section>



                </main>


                {

                    (data) && (<Card data={data} />)

                }

            </div>

        </div>
    )
}

export default Weather
