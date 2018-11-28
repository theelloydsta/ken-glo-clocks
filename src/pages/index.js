import React from 'react'
import { Link } from 'gatsby'
import './../components/all.css'
import logoa from '../images/logoa.svg'
import Layout from '../components/layout'
import 'bootstrap'
import Navbar from '../components/navbar'



const IndexPage = () => (
  <Layout>
    <Navbar />
    <div className="hero-image">
      <a>
        <img src={logoa} alt="logoa" width="1000" height="1000" />
      </a>
      
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


