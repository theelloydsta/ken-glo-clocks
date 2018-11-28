import React from 'react'
import { Link } from 'gatsby'
import './../components/all.css'
import Layout from '../components/layout'
import 'bootstrap'
import $ from 'jquery'




const Navbar = () => (
    <Layout>
<div className="wrapper">
    <header>
        <nav>
            <div className="menu-icon">
                <i className="fa fa-bars fa-2x" />
            </div>
            {/* <div className="logo">LOGO</div> */}
            <div className="menu">
                <ul>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="#">Products</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</div>

        {/* <script type="text/javascript" > */}
            {/* Menu toggle - button */}
        
{/* $(document).ready(function () {
                $(".menu-icon").on("click", function () {
                    $("nav ul").toggleClass("showing");
                })

            }); */}
            
            
{/* Scrolling Effect */}
            {/* $(window).on("scroll", function () {
  if ($(window).scrollTop()) {
                $('nav').addClass('black');
            }
  else {
                $('nav').removeClass('black');
            }
          })
          
    </script > */}
</Layout>
)
export default Navbar 

 