import courseInfo from "../course-info";
import Section from "./Section";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function createCourse(props){
    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
            <AnimationOnScroll animateIn="animate__slideInUp" duration={2} animateOnce="true">
                <div className="row course-box grid">
                    <div className="col-lg-8 col-md-12">
                        <h5>{props.title}</h5>
                    </div>
                    <div className="col-lg-4">
                        <img className="course-sub-img" src={props.src} alt={props.srcDesc}/>
                    </div>
                    
                </div>
            </AnimationOnScroll>
        </div>

    )

}

function Course(){
    return(
        <div className="area">
        <Section title="Related Course Work"/>
            <div className="row">
                {courseInfo.map(createCourse)}
            </div>
        </div>


    )
}
export default Course;