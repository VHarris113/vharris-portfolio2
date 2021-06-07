import React from "react";
import Typist from "react-typist";
import "react-bootstrap";


// import Hero from "../components/Hero";

function HomePage() {
    return (
        <div>
            <Typist>
                    <span>Hello!</span>
                <Typist.Backspace count={6} delay={500} />
                    <span>My name is Veronica Harris</span>
                    <br />
                    <span>I'm a Back End Developer</span>
                    <Typist.Backspace count={18} delay={200} />
                    <span>Front End Developer</span>
                    <Typist.Backspace count={19} delay={200} />
                    <span>Data Analyst</span>
                    <Typist.Backspace count={12} delay={200} />
                    <span>Database Specialist</span>
                    <Typist.Backspace count={19} delay={200} />
                    <span>Full-Stack Web Developer</span>
            </Typist>

        {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text}/> */}
        </div>
    )
}

export default HomePage;