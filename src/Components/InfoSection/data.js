import img1 from '../../Images/headshotSmall.jpg'
import img2 from '../../Images/undraw_surfer.png'
import img3 from '../../Images/3dPrintingExample.JPG'
import img4 from '../../Images/undraw_programer.png'

export const AboutMe = {
    id: 'About',
    img: img1,
    imgStart: false,
    heading: 'About Me',
    subtitle: 'Hello! My name is Maxx King, I am a junior full-stack developer graduated from San Diego State University in December 2021. I am currently seeking full-time employment; please use the contact form at the bottom of the page to get in touch!',
    subtitle2: 'I am a motivated, passionate individual who loves challenge. I do best in projects where I can fully immerse myself in the task at hand. I am currently researching additive manufacturing technologies, composite materials engineering, and artificial intelligence.',
    borderR: '50%',
}

export const Project1 = {
    id: 'IchthysSurfboards',
    img: img2,
    imgStart: true,
    heading: 'Ichthys Surfboards',
    subtitle: 'Surfboard manufactuing company based out of San Diego, CA. Utilizing additive manufacturing technologies, composite materials, and machine learning; along with full web3 integration. Pushing the boundries to whats possible in the surfing industry.',
    subtitle2: 'Current work in progress, launch expected Q2 2022.',
}

export const Project2 = {
    id: '3DPrinting',
    img: img3,
    imgStart: false,
    heading: '3D Printing on Demand',
    subtitle: 'Connecting with individuals and businesses in the local community to provide 3D modeling and printing services at competitve prices. Design, Iterate, and Test products to meet client specifications before deadlines. Current materials include: PLA, ABS, ASA, CarbonFiber/Nylon, TPU.',
    subtitle2: 'Full Web3 Integration via NFT\'s(Non-Fungible Tokens).'
}

export const Project3 = {
    id: 'DolphinID',
    img: img2,
    imgStart: true,
    heading: 'Dolphin Classification W/ Nerual Network',
    subtitle: 'University assignment completed for Professor Marie Roch. Using the data and research provided, was able to create a neural network to identify specied of dolphins based off of their echolocation clicks. Network has over 98% accuracy in its predictions.',
}

export const Project4 = {
    id: 'PrettyColors',
    img: img4,
    imgStart: false,
    heading: 'Pretty Colors ',
    subtitle: 'Python utility to facilitate web design. Tool takes two images and creates a color gradient of equal width by any specified height. Similar to the CSS linear-gradient function, but creates a vertical color gradient for every pixel in the width.',
    subtitle2: 'Click the image to learn more!'
}