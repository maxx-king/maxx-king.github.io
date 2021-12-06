import React from 'react'
import {FaJava, FaPython, FaJs, FaReact} from 'react-icons/fa'
import { Container, Row, Name, Exp} from './TechStackElements'

const TechStack = () => {
    return (
        <Container>
            <Name>Tech Stack:</Name>

            <Row>
                <FaJava style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                <Name> Java
                </Name>
                <Exp> 7 Years
                </Exp>
            </Row>

            <Row>
                <FaPython style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                <Name> Python
                </Name>
                <Exp> 2 Years
                </Exp>
            </Row>

            <Row>
                <i class="devicon-cplusplus-plain" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                <Name> C++
                </Name>
                <Exp> 1.5 Years
                </Exp>
            </Row>

            <Row>
                <FaJs style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                <Name> Javascript
                </Name>
                <Exp> 2 Years
                </Exp>
            </Row>

            <Row>
                <FaReact style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                <Name> React.js
                </Name>
                <Exp> 1 Year
                </Exp>
            </Row>

            <Row>
                <Name> in addition to: HTML, CSS, SQL, GIT, SOLIDITY, BASH
                </Name>
            </Row>
        
        </Container>
    )
}

export default TechStack
