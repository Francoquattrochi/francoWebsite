import {FaLinkedin, FaGithub} from 'react-icons/fa';
function Footer(){
    const currYear = new Date().getFullYear()
    return(
        <div>
            <div className="footer">
                <a href="https://www.linkedin.com/in/franco-quattrochi-04b530210/"> <FaLinkedin/ > </a>
                <a href="https://github.com/Francoquattrochi"><FaGithub/></a>
                
            </div>
            <p className='footerText'>copyright @ {currYear}</p>
        </div>
    
        
    )
}
export default Footer;