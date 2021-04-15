import React, {useEffect, useState} from "react";
import {
    Form,
    FormGroup,
    Label,

    Input,
    CustomInput,
    FormFeedback,
    ModalBody,
    Modal,
    ModalHeader,
    ModalFooter, Button, ButtonGroup, Col
} from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {required} from "./valdators";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";
import classNames from "classnames";

const BasicInformation = ({...props}) => {


    const [isCheck, setIsCheck] = useState(true)
    const [valueInfo, setValueInfo] = useState('')

    // const [error, setError] = useState(false)
    // const  handleValidSubmit =(event, values) =>{
    //
    //  }
    //
    // const handleInvalidSubmit =(event, errors, values)=> {
    //
    //  }

    //  const modalError =  error ? 'not' : '';
    //
    // const closeModal=()=> {
    //     setError(false);
    // }

    const handleChange = (e)=>{

           e.preventDefault()

        const value = (e.target.value)

        setValueInfo( [value])

    }

    useEffect(()=> {
        props.createDataChildInfo(valueInfo)
    },[valueInfo])

    // console.log(valueTab +','+ isCheck)

    const toggleCheck =()=> {
        setIsCheck(!isCheck)
         // if (isCheck) {
         //     setIsCheck(false)
         // } else  if (!isCheck){
         //     setIsCheck(true)
         // }
        props.createDataChildContIsCheck(isCheck)
    }
      // console.log(isCheck ,  valueTab)
    return (
        <Form className={'mt-2'}>
            {/*{ valueTabOne.map((el,i )=> {*/}
            {/*    return <ul>*/}
            {/*        <li key={i}>{el}</li>*/}
            {/*            </ul>*/}
            {/*})*/}

            {/*}*/}
            <AvForm>
            <FormGroup check inline>

                    <Label sm={'12'} >Заголовок:
                        <AvField onChange={handleChange}  name={'text'} type="text" placeholder="Text" bsSize="lg" required  />
                        {/*<Input invalid type="text" placeholder="Text" bsSize="lg"/>*/}
                        {/*<FormFeedback invalid tooltip>Oh noes! that name is already taken</FormFeedback>*/}
                    </Label>


            </FormGroup>
            <FormGroup>

                    <Label for="exampleText" sm={'3'}>Описание:
                        <AvField onChange={handleChange} type="textarea" name={"textarea"} id="exampleText" placeholder="text"   />
                        {/*<Input valid type="textarea" name="text" id="exampleText" />*/}
                        {/*<FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>*/}
                    </Label>

            </FormGroup>

            <FormGroup check inline>
                <Label check>Статус:
                     {isCheck
                        ?  <b><i className={style.of}>  OF</i></b>
                        :  <b><i className={style.on}>  ON</i></b>
                     }
                    <CustomInput onClick={toggleCheck} type="switch" id="exampleCustomSwitch" name="customSwitch"
                                     label="select" value={isCheck}  />

                </Label>
            </FormGroup>

            </AvForm>

            <ButtonGroup>

                <Button disabled={!valueInfo}
                        className={classnames({active: props.activeTab === '2' }, style.btnNext)}
                        onClick={() => {props.toggle('2')}} color={'success'}>Next</Button>

            </ButtonGroup>
            {/*{ !error  &&*/}
            {/*<Modal isOpen={ error !== false} toggle={closeModal}>*/}
            {/*    <ModalHeader toggle={closeModal}>Form is {modalError} valid!</ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        /!*You have {modalError} successfully filled out the form and submitted it. Your email ({AvField}) is {modalError} valid!*!/*/}
            {/*        <Button color="primary" onClick={closeModal}>Ok, got it!</Button>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}
            {/*}*/}
            {/*<FormGroup >*/}
            {/*    <ButtonGroup>*/}
            {/*        <Button onClick={handleClick}  className={style.btnNext} color={'success'}>Next</Button>*/}
            {/*    </ButtonGroup>*/}
            {/*</FormGroup>*/}
        </Form>
    )
}


export default BasicInformation