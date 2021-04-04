import React, {useState} from "react";
import classnames from "classnames"
import style from "./CSS/tabs.module.css"
import {
    Button,
    Card,
    CardText,
    CardTitle,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import BasicInformation from "./ComponentForm/basicInformation";
import ContactInformation from "./ComponentForm/contactInformation"
import PhotoFile from "./ComponentForm/photoFiles";
import Nove from "./ComponentForm/Nove";
import Example from "./ComponentForm/validateFormReactstrap";

// import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'react-bootstrap'

const Tabs = (props) =>{

    const [activeTab, setActiveTab] = useState('1');
    const [disabled, setDisabled] = useState(false)

    const toggle = tab => {

        if(activeTab !== tab && !disabled) {
            setActiveTab(tab)
            setDisabled(false)
        }
    }

    const handleClick = (tab) => {
        setActiveTab(tab+1)
        console.log(tab)
    }

        return (
         <div>
            <Container className={'mt-3'}>
                <Nav disabled tabs>

                    <NavItem>

                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1') }}>
                            Tab1
                        </NavLink>
                        <button onClick={handleClick}>next</button>
                        <button onClick={handleClick}>back</button>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>
                            Tab2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}>
                            Tab3
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}>
                            Tab4
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}>
                            More Tabs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent  activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col md="6">
                                <h4>Основная информация:</h4>
                                <BasicInformation />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Контактная информация:</h4>
                                <ContactInformation/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <h4>Фотография:</h4>
                                <PhotoFile/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <h4>Публикация:</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
             {/*<Nove/>*/}
             {/*<Example/>*/}
         </div>
        )

}

export default Tabs









// <Container>
//     <TabPane id={'left-tabs-example'}  defaultActiveKey={'one'}>
//         <Row>
//             <Col sm={3}>
//                 <Nav variant={'pills'} className={'flex-column mt-3'}>
//                     <NavItem>
//                         <NavLink eventKey={'one'}>Design</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'two'}>Testing</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'three'}>Programmer</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'first4'}>Strong</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink eventKey={'first5'}>React</NavLink>
//                     </NavItem>
//                 </Nav>
//             </Col>
//             <Col sm={9} className={'flex-column mt-3'} >
//                 <TabContent eventKey={'one'}>
//                     AAAAAAAAAAAAAAAA
//                 </TabContent>
//                 <TabContent  className={'fade'} eventKey={'two'}>
//                     BBBBBBBBBBBBBB
//                 </TabContent>
//                 <TabContent  className={'fade'} eventKey={'three'}>
//                     CCCCCCCCCCCCCCCCCCCCCC
//                 </TabContent>
//                 <TabContent  className={'fade'}  eventKey={'first4'}>
//                     DDDDDDDDDDDDDDDD
//                 </TabContent>
//                 <TabContent  className={'fade'}  eventKey={'first5'}>
//                     AGGGGGGGGGGGGGGG
//                 </TabContent>
//             </Col>
//         </Row>
//     </TabPane>
// </Container>