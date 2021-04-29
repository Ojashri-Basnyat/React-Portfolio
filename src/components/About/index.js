import React from 'react'
import coverImage from "../../assets/images/ojashribasnyat.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        I'm a certified Digital Marketer currently enrolled in UofT's Full Stack Web Development Bootcamp. I have 7 years of 
        Digital Marketing experience and in Graphic Designing as well. 
        I also love taking photos and going on walks with my 1 year old Cavalier King Charles Spaniel named Draco (inspired from the Harry 
        Potter series). I am a big potterhead and yes, I enjoy trivia nights, playing monopoly and reading fictional books.
        </p>
      </div>
    </section>
  )
}

export default About