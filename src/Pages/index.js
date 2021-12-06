import React from 'react'
import LandingSection from '../Components/LandingSection'
import InfoSection from '../Components/InfoSection'
import { AboutMe, Project1, Project2, Project3, Project4 } from '../Components/InfoSection/data'
import ContactSection from '../Components/ContactSection'
import TechStack from '../Components/TechStack'



const Home = () => {
    return (
        <div>
            <LandingSection />

            <h1 id='AboutMe' style={{display: 'flex', 
                        justifyContent: 'center',
                        color: '#0056C6',
                        background: 'black' }}>
                        About Me
            </h1>
            <InfoSection {...AboutMe}/>

            <h1 id='Portfolio' style={{display: 'flex', 
                        justifyContent: 'center',
                        color: '#0056C6',
                        background: 'black' }}>
                        Projects
            </h1>
            <InfoSection {...Project1}/>
            <InfoSection {...Project2}/>
            <InfoSection {...Project3}/>
            <InfoSection {...Project4}/>

            <h1 id='ContactMe' style={{display: 'flex', 
                        justifyContent: 'center',
                        color: '#0056C6',
                        background: 'black' }}>
                        Contact Me
            </h1>
            <ContactSection />
        </div>
    )
}

export default Home
