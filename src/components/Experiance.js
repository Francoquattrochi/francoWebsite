import { useState } from 'react';
import experianceInfo from '../experiance-info';
import Section from './Section';
import { AnimationOnScroll } from 'react-animation-on-scroll';





function Experiance(){
    const [job, setJob] = useState(0);
    const [liftActive, setActive] = useState(true);
    function setAlg(){
        setJob(0);
        setActive(false)
        setTimeout(()=>{
            setActive(true)
        }, 1000);
        setActive(true)
        
    }
    function setQ(){
        setJob(1);
        setActive(false);
        setTimeout(()=>{
            setActive(true)
        }, 1000);
        
    }


    
    return(
        <div className="exp-area">
            <Section title="Experience"/>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <button className="col-12 btn btn-lg btn-light exp-button" id="lift" style={job===0 ? {color:"rgb(71, 181, 255)",fontWeight:"bold" } :null} onClick={setAlg}>Algorithmics</button>
                    <button className="col-12 btn btn-lg btn-light exp-button" id="lift" style={job===1 ? {color:"rgb(71, 181, 255)",fontWeight:"bold" } :null} onClick={setQ}>Q-Learning</button>
                </div>
                <div className="col-md-8 col-sm-12">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <div className={`card ${liftActive ? "lift-animation" : "" }`}>
                        <div className="card-header">
                            <h3>{experianceInfo[job].role} at <span className="keeptogether" id="important">{experianceInfo[job].company}</span></h3>
                            <p>{experianceInfo[job].start} - {experianceInfo[job].end}</p>
                        </div>
                        
                        <div className="card-body exp-text">
                            <p><span id="important">{'>'}</span> {experianceInfo[job].detail1}</p>
                            <p><span id="important">{'>'}</span> {experianceInfo[job].detail2}</p>
                            <p><span id="important">{'>'}</span> {experianceInfo[job].detail3}</p>

                        </div>
                    </div>
                </AnimationOnScroll>

                </div>
            </div>
        </div>
    )
    
}
export default Experiance;