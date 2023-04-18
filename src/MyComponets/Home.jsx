import React from 'react'
import vg from "../assests/2.webp"

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

    <div className="home3">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur obcaecati distinctio in id, corrupti architecto illo illum ad necessitatibus sed amet sunt harum eum repellendus quasi earum reprehenderit similique impedit? Nulla culpa minus esse incidunt ducimus hic maiores voluptatibus, dolorem reiciendis tempora libero sunt impedit sequi unde cumque earum praesentium!</p>
        </div>
    </div>
    </>
  )
}

export default Home
