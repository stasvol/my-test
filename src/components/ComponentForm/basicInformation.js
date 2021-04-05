import React, {useState} from "react";
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
    ModalFooter, Button, ButtonGroup
} from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {required} from "./valdators";
import style from "../CSS/tabs.module.css";

const BasicInformation = ({...props}) => {
     // const [text, setText] = useState()
     const [error, setError] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
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
    const toggle =()=> {
         if (isCheck) {
             setIsCheck(false)
         } else  if (!isCheck){
             setIsCheck(true)
         }
    }
    return (
        <Form className={'mt-2'}>
            <AvForm>
            <FormGroup check inline>

                    <Label sm={'12'} >Заголовок:
                        <AvField name={'text'} type="text" placeholder="Text" bsSize="lg" required/>
                        {/*<Input invalid type="text" placeholder="Text" bsSize="lg"/>*/}
                        {/*<FormFeedback invalid tooltip>Oh noes! that name is already taken</FormFeedback>*/}
                    </Label>


            </FormGroup>
            <FormGroup>

                    <Label for="exampleText" sm={'3'}>Описание:
                        <AvField type="textarea" name={"textarea"} id="exampleText" placeholder="text" required/>
                        {/*<Input valid type="textarea" name="text" id="exampleText" />*/}
                        {/*<FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>*/}
                    </Label>

            </FormGroup>

            <FormGroup check inline>
                <Label check>Статус:
                     {isCheck
                        ?  <b><i className={style.on}>  ON</i></b>
                        :  <b><i className={style.of}>  OF</i></b>
                     }
                    <CustomInput onClick={toggle} type="switch" id="exampleCustomSwitch" name="customSwitch"
                                     label="select" />

                </Label>
            </FormGroup>
            </AvForm>
            {/*{ !error  &&*/}
            {/*<Modal isOpen={ error !== false} toggle={closeModal}>*/}
            {/*    <ModalHeader toggle={closeModal}>Form is {modalError} valid!</ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        /!*You have {modalError} successfully filled out the form and submitted it. Your email ({AvField}) is {modalError} valid!*!/*/}
            {/*        <Button color="primary" onClick={closeModal}>Ok, got it!</Button>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}
            {/*}*/}
            <FormGroup >
                <ButtonGroup  >
                    <Button className={style.btnNext} color={'success'}>Next</Button>
                </ButtonGroup>
            </FormGroup>
        </Form>
    )
}
export default BasicInformation