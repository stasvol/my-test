import React, {useState} from "react";
import classnames from "classnames"
import style from "./CSS/tabs.module.css"
import {Button, ButtonGroup, Card, CardText, CardTitle, Col, Container, Form, FormGroup, Nav,
        NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import BasicInformation from "./ComponentForm/basicInformation";
import ContactInformation from "./ComponentForm/contactInformation"
import PhotoFile from "./ComponentForm/photoFiles";
import Nove from "./ComponentForm/Nove";
import Example from "./ComponentForm/validateFormReactstrap";
import Publication from "./ComponentForm/publication";
import {AvField} from "availity-reactstrap-validation";
import handleSubmit from "redux-form/lib/handleSubmit";

// import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'react-bootstrap'

const Tabs = (props) =>{

    const [activeTab, setActiveTab] = useState('1')
    const [disabled, setDisabled] = useState(true)
    const [valueTab, setValueTab] = useState('')
    const [imgFile, setImgFile] = useState([])

    const toggle = tab => {

        if(activeTab !== tab ) {
            setActiveTab(tab)
        }
    }

    const createDataChild =(value,imgFile)=> {
        setValueTab(value)
    }

    const newValueTab = () =>{
        if (!valueTab ) {
            setDisabled(true)
        }else if (valueTab) {
            setDisabled(false)
        }
    }


    console.log(valueTab)
    // const handleClick = (tab) => {
    //
    //     // if (activeTab !== tab) {
    //     //     setActiveTab(tab)
    //     //     console.log(tab)
    //     // }
    // }
        return (
         <div >

            <Container className={'mt-3'}>
                <Nav  tabs className={style.Nav}>

                    <NavItem    className={style.Botton}>
                        <NavLink disabled={!valueTab}
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1') }}>
                            Tab1
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink disabled={!valueTab}
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>
                            Tab2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled={imgFile <= 0}
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}>
                            Tab3
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled={!valueTab}
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}>
                            Tab4
                        </NavLink>
                    </NavItem>
                    {/*<NavItem>*/}
                    {/*    <NavLink*/}
                    {/*        className={classnames({ active: activeTab === '5' })}*/}
                    {/*        onClick={() => { toggle('5'); }}>*/}
                    {/*        More Tabs*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                </Nav>
                <TabContent  activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Основная информация:</h4>
                                <BasicInformation  createDataChild={createDataChild}  toggle={toggle} activeTab={activeTab} />
                                {/*<ButtonGroup>*/}
                                {/*    */}
                                {/*    <Button disabled={!valueTab }*/}
                                {/*        className={classnames({active: activeTab === '2' }, style.btnNext)}*/}
                                {/*         onClick={() => {toggle('2')}} color={'success'}>Next</Button>*/}

                                {/*</ButtonGroup>*/}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Контактная информация:</h4>
                                <ContactInformation createDataChild={createDataChild} toggle={toggle} activeTab={activeTab}/>
                                {/*<FormGroup>*/}
                                {/*    <ButtonGroup toggle={toggle} activeTab={activeTab}>*/}
                                {/*        <Button className={classnames({ active: activeTab === '1' },style.btn)}*/}
                                {/*                        onClick={() => { toggle('1') }} color={'warning'}>Prev</Button>*/}

                                {/*        <Button disabled={!valueTab} className={classnames({ active: activeTab === '3' },style.btn)}*/}
                                {/*                  onClick={() => { toggle('3'); }} color={'success'}>Next</Button>*/}
                                {/*    </ButtonGroup>*/}
                                {/*</FormGroup>*/}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h4>Добавить фотографию:</h4>
                                <PhotoFile createDataChild={createDataChild}  toggle={toggle} activeTab={activeTab}/>
                                {/*<FormGroup>*/}
                                {/*    <ButtonGroup>*/}
                                {/*        <Button className={classnames({ active: props.activeTab === '2' },style.btn)}*/}
                                {/*                            onClick={() => { props.toggle('2'); }} color={'warning'}>Prev</Button>*/}

                                {/*        <Button  className={classnames({ active: props.activeTab === '4' }, style.btn)}*/}
                                {/*                 onClick={() => { props.toggle('4'); }} color={'success'}>Next</Button>*/}
                                {/*    </ButtonGroup>*/}
                                {/*</FormGroup>*/}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <h4>Публикация:</h4>
                                <Publication createDataChild={createDataChild}  toggle={toggle} activeTab={activeTab}/>
                                {/*<FormGroup check >*/}
                                {/*    <ButtonGroup>*/}
                                {/*        <Button className={classnames({ active: props.activeTab === '3' },style.btn)}*/}
                                {/*                onClick={() => { props.toggle('3'); }}  color={'warning'}>Prev</Button>*/}
                                {/*        <Button onSubmit={handleSubmit} className={style.btn} color={'info'}>Save</Button>*/}
                                {/*    </ButtonGroup>*/}
                                {/*</FormGroup>*/}
                            </Col>
                        </Row>
                    </TabPane>
                    {/*<TabPane tabId="5">*/}
                    {/*    <Row>*/}
                    {/*        <Col sm="6">*/}
                    {/*            <Card body>*/}
                    {/*                <CardTitle>Special Title Treatment</CardTitle>*/}
                    {/*                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                    {/*                <Button>Go somewhere</Button>*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*        <Col sm="6">*/}
                    {/*            <Card body>*/}
                    {/*                <CardTitle>Special Title Treatment</CardTitle>*/}
                    {/*                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                    {/*                <Button>Go somewhere</Button>*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</TabPane>                  */}
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