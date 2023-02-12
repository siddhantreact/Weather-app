import React from 'react'

import "../Styles/Card.css"

function Card(props) {


  const data = props.data


  //  {console.log(data)}



  return (

    <div className='card_container  center'>



      {

        data.map((e) => {


          return (
            <div>

              <h5>city : {e.name}</h5>

              <h5>temp : {e.main.temp}</h5>

              <h5>wind speed : {e.wind.speed}</h5>

              <h5>pressure : {e.main.pressure}</h5>
              <h5>temp_max: {e.main.temp_max}</h5>
              <h5>temp_min : {e.main.temp_min}</h5>
              <h5>humidity : {e.main.humidity}</h5>

            </div>
          )
        })


      }





    </div>
  )
}

export default Card
