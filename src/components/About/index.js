import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} letterClass={letterClass} idx={15}/>
                    </h1>
                    <p>
                    I am a highly analytical and detail-oriented Software Engineer with a strong foundation in React, JavaScript, Python, and Django, specializing in building scalable, high-performance applications. Passionate about solving complex technical challenges, I leverage my expertise in React to develop dynamic, user-friendly front-end interfaces and Django to build robust, efficient back-end systems. With a deep understanding of SQL, MySQL, and data modeling, I design and optimize databases for seamless data management. My experience in CI/CD pipelines, data lakes, and cloud-based architectures ensures smooth deployment and integration of applications in fast-paced, production environments. I thrive in agile teams, taking ownership of tasks and consistently delivering clean, maintainable code. My strong problem-solving skills, technical versatility, and commitment to continuous learning allow me to adapt to evolving technologies while driving innovation in web development.
                    </p>
                    <p>
                    Technical Skills<br/>
                    •	Programming & Data Science: Advanced expertise in Python, with strong knowledge of data structures, algorithms, and object-oriented programming.<br/> 
                    •	Data Engineering & Databases: Strong understanding of SQL, and relational databases. Skilled in data manipulation and visualization using Matplotlib and Pandas.<br/>
                    •	Software Development & Web Technologies: Experience in full-stack development using React, CSS, Express, Django, and scripting with JavaScript, TCL, and HTML. Proficient in Docker for containerization and Jenkins for CI/CD pipelines.<br/>
                    •	Project Management & Collaboration: Skilled in version control with Git (Bitbucket, GitHub), Agile workflows using Jira & Confluence, and technical documentation with SharePoint & PowerPoint.

                        
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color = "#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color = "#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color = "#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color = "#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color = "#EC4D28" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPython} color='#3776AB'/>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About