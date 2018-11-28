import React from 'react'
// import { Link } from 'gatsby'
import './../components/all.css'
// import logoa from '../images/logoa.svg'
import Layout from '../components/layout'
import 'bootstrap'
import Navbar from '../components/navbar'



const AboutPage = () => (
    <Layout>
        <Navbar />
        
        <div>
            <p className="info">
               Ken-Glo Neon Clocks are top quality reproductions, styled after the popular Glo-Dial advertising clocks of the 1940s and 1950s.      
           </p>
            
            <p className="info">
               Each clock is made by us, the manufacturer. We specialize in personalizing the clock glass!
           </p>
            <p className="info">
 Features:
 
  Powder coated steel, with gloss black body and bezel.
 
  Synchronized clock movements: 120VAC, 60Hz
 
  On and off neon switch
 
  Choice of neon colors
        </p>
            <p className="info">
 Now in its 35th year, Ken-Glo Neon Clocks have been featured on television, newspapers and magazines. They are purchased
      </p>
            <p className="info">
 for use in homes, restaurants, offices, retail stores, and business lobbies.  Ken-Glo Neon Clocks make fine gifts for Birthdays,
     </p>
            <p className="info">
 Holidays, Weddings, Retirements, Anniversaries, Business Promotions, Special Awards, or Home Theaters.
           </p>
            
       </div>
    </Layout>
)

export default AboutPage