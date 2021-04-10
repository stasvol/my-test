import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, FormText, ButtonGroup} from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";


const ContactInformation = (props) => {

    // const [valueTab, setValueTab] = useState('')
    const [valueData, setValueData] = useState(null)

    const handleChange = (e)=>{
        e.preventDefault()
        const value = (e.target.value)

        setValueData([value])


        props.createDataChild(valueData)
        // console.log(valueTel)
    }
    const handleSubmit = (e)=> {

        e.preventDefault()


    }
    // console.log(valueData)

    return (
        <Form onSubmit={handleSubmit}>
            <AvForm >
            <FormGroup>

                <Label for="exampleEmail">Telephone:
                    <AvField onChange={handleChange}  value={valueData}   type="tel" name="telephone" id="exampleEmail" placeholder="telephone number" bsSize="lg" required/>
                </Label>

            </FormGroup>
            <FormGroup>

                <Label for="exampleEmail">Email:
                    <AvField  type="email" name="email" id="exampleEmail" placeholder="email" bsSize="lg" required/>
                </Label>

            </FormGroup>
                <Button className={classnames({ active: props.activeTab === '1' },style.btn)}
                        onClick={() => { props.toggle('1') }} color={'warning'}>Prev</Button>
                <Button disabled={!valueData} className={classnames({ active: props.activeTab === '3' },style.btn)}
                        onClick={() => { props.toggle('3');}} color={'success'}>Next</Button>
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