import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";

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
        </Form>
    )

}

export default ContactInformation