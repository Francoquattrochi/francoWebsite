import { AnimationOnScroll } from 'react-animation-on-scroll';
function Introduction(){
    return(
        <div className="area row">
            <div className="col-lg-7 col-md-6 col-sm-12">
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce="true" duration={2}>
                <h1 className="intro-header">
                Hey, I'm <span id="important">Franco</span>
                </h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration={2}>
                <p className="text"> I am a computer science student at the <span id="important">University of Toronto</span>,
                currently in my 4th year looking for a career as a Software Engineer. 
                </p>
            </AnimationOnScroll>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <img className="profile-pic" src="../images/profile_pic.jpeg" alt="Franco Quattrochi"/>
            </div>
            
            
        </div>

    )
}
export default Introduction;