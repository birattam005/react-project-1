import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram  } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quo minima sapiente! Delectus aliquid, enim error ducimus mollitia deserunt sint.
          </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur obcaecati distinctio in id, corrupti architecto illo illum ad necessitatibus sed amet sunt harum eum repellendus quasi earum reprehenderit similique impedit? Nulla culpa minus esse incidunt ducimus hic maiores voluptatibus, dolorem reiciendis tempora libero sunt impedit sequi unde cumque earum praesentium!</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
              <div style={{
                animationDelay: "0.3s"
              }}>
                  <AiFillGoogleCircle />
                  <p>Google</p>
              </div>

              <div style={{
                animationDelay: "0.5s"
              }}>
                  <AiFillAmazonCircle />
                  <p>Amazon</p>
              </div>

              <div style={{
                animationDelay: "0.7s"
              }}>
                  <AiFillYoutube />
                  <p>Youtube</p>
              </div>

              <div style={{
                animationDelay: "0.1s"
              }}>
                  <AiFillInstagram />
                  <p>Instagram</p>
              </div>
          </article>
        </div>
    </div>

    </>
  )
}

export default Home
