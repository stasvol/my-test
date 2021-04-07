import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText, ButtonGroup} from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";
import style from "../CSS/tabs.module.css";

const ContactInformation = (props) => {

    return (
        <Form>
            <AvForm >
            <FormGroup>

                <Label for="exampleEmail">Telephone:
                    <AvField type="tel" name="telephone" id="exampleEmail" placeholder="telephone number" bsSize="lg" required/>
                </Label>

            </FormGroup>
            <FormGroup>

                <Label for="exampleEmail">Email:
                    <AvField type="email" name="email" id="exampleEmail" placeholder="email" bsSize="lg" required/>
                </Label>

            </FormGroup>
            </AvForm>
        {/*  <FormGroup>*/}
        {/*    <ButtonGroup>*/}
        {/*        <Button className={style.btn}  color={'warning'}>Prev</Button>*/}
        {/*        <Button className={style.btn} color={'success'}>Next</Button>*/}
        {/*    </ButtonGroup>*/}
        {/*</FormGroup>*/}
        </Form>
    )

}

export default ContactInformation