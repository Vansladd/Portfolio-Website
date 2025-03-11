import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import TiltedCard from './TiltedCard'
import CardImage from '../../assets/images/gradphoto.png'
import CursiveT from '../CursiveT'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','i','w','o']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)

        }, [])


    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <div className='test'>
                        <CursiveT/>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    </div>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19}/>
                </h1>
                <h2>Fullstack Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>

            </div>
            <div className='logo-container'>
                <TiltedCard
                    imageSrc={CardImage}
                    altText="Taiwo Ajomale Graduate Photo"
                    captionText="Graduate Software Devloper"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        </p>
                    }
                />
            </div>
            

        </div>
    )
}

export default Home