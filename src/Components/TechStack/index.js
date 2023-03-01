import React from 'react'
import {FaJava, FaPython, FaJs, FaReact} from 'react-icons/fa'
import { Container, Wrapper, Row, Name, NameB} from './TechStackElements'

const TechStack = () => {
    return (
        <Container >
            <Wrapper>
                <NameB>Tech Stack:</NameB>
                <div style={{display: "flex", flexDirection: "row", width: "80%"}}>
                    <div>
                        <Row>
                            <FaJava style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Java</Name>
                        </Row>
                        <Row>
                            <FaPython style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Python</Name>
                        </Row>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>C++</Name>
                        </Row>
                        <Row>
                            <FaJs style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Javascript</Name>
                        </Row>
                        <Row>
                            <FaReact style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>React</Name>
                        </Row>
                        <Row>
                            <FaReact style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Node.js</Name>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Angular.js</Name>
                        </Row>
                        <Row>
                            <FaReact style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>Typescript</Name>
                        </Row>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>HTML</Name>
                        </Row>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>CSS</Name>
                        </Row>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>MYSQL</Name>
                        </Row>
                        <Row>
                            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=currentColor" alt="404" style={{fontSize: '3rem', paddingLeft: '25px'}}/>
                            <Name>PERL</Name>
                        </Row>
                    </div>
                </div>

                
            </Wrapper>
        </Container>
    )
}

export default TechStack
