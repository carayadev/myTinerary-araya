import React from 'react'
import { Link } from 'react-router-dom'
import click from '../assets/images/click.jpeg'


export const Hero = () => {
    return (
      <div className="container_mapa">
        <div className="col-4 call_a"><h1>The experience begins now...</h1></div>
        <div className="col-3 mapa">
         <Link to="cities"><img src={click} className="img_click" alt="btn click" /></Link>
        </div>
        <div className="col-4 call_b"><h1>Discover the world where you live</h1></div>
      </div>
  )
}
