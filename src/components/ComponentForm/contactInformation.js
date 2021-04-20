import React, {useEffect, useState} from "react";
import {Button, FormGroup, Label, Input} from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";


const ContactInformation = (props) => {

    // const [valueTab, setValueTab] = useState('')
    const [valueContact, setValueContact] = useState({telephone:'',email:''})


    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value
        const name = e.target.name
        // valueData.push(value)
        setValueContact( prevValueContact=>({
            ...prevValueContact,
            [name]: value
        }))
    }

    useEffect(()=>{
        props.createDataChildContact(valueContact)
    },[valueContact])
    // const handleSubmit = (e)=> {
    //
    //     e.preventDefault()
    //
    //
    // }
    // console.log(valueData)

    return (
        <AvForm>
            {/*<AvForm >*/}
            <FormGroup>

                <Label for="exampleEmail">Telephone:
                    <AvField onChange={handleChange} type="text" name="telephone" id="exampleEmail"
                             placeholder="telephone number" bsSize="lg" required value={valueContact.telephone} />
                </Label>

            </FormGroup>
            <FormGroup>

                <Label for="exampleEmail">Email:
                    <Input onChange={handleChange}  type="email" name="email" id="exampleEmail"
                           placeholder="email" bsSize="lg" value={valueContact.email} />
                </Label>

            </FormGroup>
                <Button className={classnames({ active: props.activeTab === '1' },style.btn)}
                        onClick={() => { props.toggle('1') }} color={'warning'}>Prev</Button>
                <Button disabled={valueContact.telephone <= 0} className={classnames({ active: props.activeTab === '3' },style.btn)}
                        onClick={() => { props.toggle('3');}} color={'success'}>Next</Button>
            {/*</AvForm>*/}
        {/*  <FormGroup>*/}
        {/*    <ButtonGroup>*/}
        {/*        <Button className={style.btn}  color={'warning'}>Prev</Button>*/}
        {/*        <Button className={style.btn} color={'success'}>Next</Button>*/}
        {/*    </ButtonGroup>*/}
        {/*</FormGroup>*/}
        </AvForm>
    )

}

export default ContactInformation