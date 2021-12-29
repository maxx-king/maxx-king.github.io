import React from 'react'

import HeroSection from '../Components/HeroSection'
import TechStack from '../Components/TechStack'
import InfoSection from '../Components/InfoSection'
import { AboutMe, Project1, Project2, Project3, Project4 } from '../Components/InfoSection/data'
import ContactSection from '../Components/ContactSection'



const Home = () => {
    return (
        <div>
            <HeroSection />
            <InfoSection {...AboutMe} />
            <TechStack />
            <h1 id='Portfolio' style={{display: 'flex', 
                        justifyContent: 'center',
                        color: '#D4AF37',
                        background: 'black'     }}>
                        Projects
            </h1>
            <InfoSection {...Project1}/>
            <InfoSection {...Project2}/>
            <InfoSection {...Project3}/>
            <InfoSection {...Project4}/>

            <h1 id='ContactMe' style={{display: 'flex', 
                        justifyContent: 'center',
                        color: '#D4AF37',
                        background: 'black' }}>
                        Contact Me!
            </h1>
            <ContactSection />
        </div>
    )
}

export default Home
