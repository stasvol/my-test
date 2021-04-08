import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, FormText, ButtonGroup} from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";

const ContactInformation = (props) => {

    const [valueTab, setValueTab] = useState('')
    const [valueTel, setValueTel] = useState('')
    const handleChange = (e)=>{
          debugger
        // e.preventDefault()

        const value = (e.target.value)

        setValueTel( [...valueTel,value])


        props.createDataChild(valueTab,valueTel)
        // console.log(valueTabOne)
    }

    return (
        <Form>
            <AvForm >
            <FormGroup>

                <Label for="exampleEmail">Telephone:
                    <AvField onChange={handleChange}  type="tel" name="telephone" id="exampleEmail" placeholder="telephone number" bsSize="lg" required/>
                </Label>

            </FormGroup>
            <FormGroup>

                <Label for="exampleEmail">Email:
                    <AvField onChange={handleChange}  type="email" name="email" id="exampleEmail" placeholder="email" bsSize="lg" required/>
                </Label>

            </FormGroup>
                <Button className={classnames({ active: props.activeTab === '1' },style.btn)}
                        onClick={() => { props.toggle('1') }} color={'warning'}>Prev</Button>
                <Button disabled={!valueTel} className={classnames({ active: props.activeTab === '3' },style.btn)}
                        onClick={() => { props.toggle('3'); }} color={'success'}>Next</Button>
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