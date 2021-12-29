import React from 'react'
import {FaJava, FaPython, FaJs, FaReact} from 'react-icons/fa'
import { Container, Wrapper, Row, Name, Exp, NameB} from './TechStackElements'

const TechStack = () => {
    return (
        <Container >
            <Wrapper>
                <NameB>Tech Stack:</NameB>

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
                    <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
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
                    <NameB style={{textAlign: 'center', justifyContent: 'center'}}> In addition to: HTML, CSS, SQL, GIT, SOLIDITY, BASH
                    </NameB>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default TechStack
