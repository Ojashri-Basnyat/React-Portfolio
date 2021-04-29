import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">resume: Ojashri Basnyat</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            I'm a certified Digital Marketer currently enrolled in UofT's Full Stack Web Development Bootcamp. I have 7 years of 
        Digital Marketing experience and in Graphic Designing as well. 
        I also love taking photos and going on walks with my 1 year old Cavalier King Charles Spaniel named Draco (inspired from the Harry 
        Potter series). I am a big potterhead and yes, I enjoy trivia nights, playing monopoly and reading fictional books.
                <p class="mt-5">
                <a href="https://www.linkedin.com/in/ojashri-basnyat-325703105/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Ojashri's LinkedIn"/></a>
                </p>
                <p>
                Download My Full <a href="https://github.com/Ojashri-Basnyat/React-Portfolio/raw/master/src/assets/Ojashri-Basnyat_Resume.pdf" class="link">Resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front End Experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back End experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;
