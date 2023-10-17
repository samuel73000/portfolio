import "../../scss/About.scss";
function About(){
    return(
        <section className="container-about" id="about">

            <div className="container-me">
            <h2 className="title-me">ABOUT ME</h2>
            <p className=" p-me">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
             
            <div className="container-know">
            <h3 className="title-know">Get to know me!</h3>
            <p className="p-know">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
           <a className="btn-know" href="#contact">CONTACT</a>
           </div>


           <div className="container-skills">
            <h3 className="title-skills">My Skills</h3>
            <div className="display-skills">
            <div className="skills">HTML</div>
            <div className="skills">CSS</div>
            <div className="skills">JavaScript</div>
            <div className="skills">React</div>
            <div className="skills">SASS</div>
            <div className="skills">GIT</div>
            <div className="skills">GitHub</div>
            <div className="skills">Responsive Design</div>
            <div className="skills">SEO</div>
            <div className="skills">REDUX</div>
            <div className="skills">Terminal</div>
            <div className="skills">SQL Basics</div>
            </div>

            </div>
        
        </section>
    )
}

export default About;