import img1 from '../../Images/techStack.JPG'
import img2 from '../../Images/undraw_surfer.png'
import img3 from '../../Images/3dPrintingExample.JPG'
import img4 from '../../Images/undraw_programer.png'

export const AboutMe = {
    id: 'About',
    img: img1,
    imgStart: false,
    heading: 'About Me',
    subtitle: 'I am a junior full-stack developer graduating from San Diego State University in December 2021. I am currently seeking full-time employment; please use the contact form at the bottom of the page to get in touch!',
}

export const Project1 = {
    id: 'IchthysSurfboards',
    img: img2,
    imgStart: true,
    heading: 'Ichthys Surfboards || 01',
    subtitle: 'Surfboard manufactuing company based out of San Diego, CA. Utilizing additive manufacturing technologies, composite materials, and machine learning; along with full web3 integration. Pushing the boundries to whats possible in the surfing industry.',
}

export const Project2 = {
    id: '3DPrinting',
    img: img3,
    imgStart: false,
    heading: '02 || 3D Printing on Demand',
    subtitle: 'Connecting with individuals and businesses in the local community, providing 3D modeling and printing services at competitve prices. Design, Iterate, and Test products to meet client specifications before deadlines.',
}

export const Project3 = {
    id: 'DolphinID',
    img: img2,
    imgStart: true,
    heading: 'Dolphin Classification W/ Nerual Network || 03',
    subtitle: 'University assignment completed for Professor Marie Roch. Using the data and research provided, was able to create a neural network to identify specied of dolphins based off of their echolocation clicks. Network has over 98% accuracy in its predictions.',
}

export const Project4 = {
    id: 'PrettyColors',
    img: img4,
    imgStart: false,
    heading: '04 || Pretty Colors ',
    subtitle: 'Python utility to facilitate web design. Tool takes two images and creates a color gradient of equal width by any specified height. Similar to the CSS linear-gradient function, but creates a vertical color gradient for every pixel in the width.',
}