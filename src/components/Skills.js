import Section from "./Section"
import skillsInfo from "../skills-info"
import { AnimationOnScroll } from 'react-animation-on-scroll';
function createSkill(props){
    return(
        <div className="row center">
            <div className="col-md-6 ">
                <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce="true" duration={2}>
                    <h5 className="skills-text">{props.left}</h5>
                </AnimationOnScroll>

            </div>
            <div className="col-md-6 ">
                <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce="true" duration={2}>
                    <h5 className="skills-text">{props.right}</h5>
                </AnimationOnScroll>
            </div>

        </div>
    )
}
function Skills(){
    return(
        <div className="area text">
            <Section title="About Me"/>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                <p className="skills-p">
                    I am currently a student working as a Python Instructor but when im not 
                    teaching I like to learn new skills and technologies that I can apply to
                    build bigger and better projects that I enjoy. Here are some of the technologies
                    I have learned.
                </p>
            </AnimationOnScroll>
            {skillsInfo.map(createSkill)}
        </div>


    )
}

export default Skills