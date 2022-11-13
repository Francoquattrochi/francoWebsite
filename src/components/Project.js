import projectInfo from "../project-info";
import Carousel from 'react-bootstrap/Carousel';
import Section from "./Section";

function createCItem(props){
    return(
        <Carousel.Item>
            <img
            className="d-block w-200 project-img"
            src={props.src}
            alt={props.srcDesc}
            />
            <Carousel.Caption className="project-text centered">
                <h3 className="project-text">{props.name}</h3>
                <p className="">{props.description}</p>
                <p className="">{props.skills}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )

}

function Project(){
    return(
        <div className="area">
            <Section title="Projects"/>
            <Carousel className="project-c center">
                {projectInfo.map(createCItem)}
            </Carousel>
        </div>
        
    )


}




export default Project;