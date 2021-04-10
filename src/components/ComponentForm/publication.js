import React, {useState} from "react";
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from "reactstrap";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";

import {AvForm,AvField} from "availity-reactstrap-validation";

const Publication =(props)=>{

    // const [valueTab, setValueTab] = useState('')
    // const [checkValue, setCheckValue] = useState([])
    const [check, setCheck ] =  useState()

    // const handleChange = (checked)=>{
    //     // e.preventDefault()
    //
    //     // const value = (e.target.value)
    //     // console.log(e.target.value)
    //
    //     // setChecked( [...checked,value])
    //
    //
    //     props.createDataChild(valueTab)
    //     // console.log(checked)
    // }

    const handleClick =(e)=>{

        setCheck (e.target.name)


         // let checkbox = Input.checkbox
        for (let i= 0; i <= check ; i++){
            setCheck( [...check[i]] )
            // checkValue.push(checkbox[i])
            // setCheckValue([...checkValue,check[i]])
        }
        // props.createDataChild(valueTab)
        // console.log(check)
    }

    const handleSubmit=(event)=>{

        event.preventDefault();
        const data = new FormData(event.target);
        // FormData={valueTab:props.valueTab , valueData:props.valueData , imgFile:props.imgFile , check}
        console.log(data)

    }
    props.createDataChild(check)

    console.log(props.valueTab ,  props.valueData , props.imgFile , check)


    return(

   <Form onSubmit={handleSubmit}>

    <FormGroup check>
        <Label check>
            <div className={style.check}>
            <Input onClick={handleClick} type="checkbox" name={'УСЛУГА 1'} checkbox={'УСЛУГА 1'}/>  УСЛУГА 1
            </div>
        </Label>
    </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input onClick={handleClick} type="checkbox" checkbox={'УСЛУГА 2'} name={'УСЛУГА 2'}/>  УСЛУГА 2
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input onClick={handleClick} type="checkbox" checkbox={'УСЛУГА 3'} name={'УСЛУГА 3'}/>  УСЛУГА 3
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input onClick={handleClick} type="checkbox" checkbox={'УСЛУГА 4'} name={'УСЛУГА 4'}/>  УСЛУГА 4
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input onClick={handleClick}  type="checkbox" checkbox={'УСЛУГА 5'} name={'УСЛУГА 5'}/>  УСЛУГА 5
               </div>
           </Label>
       </FormGroup>

       <FormGroup check >
           <ButtonGroup>
               <Button className={classnames({ active: props.activeTab === '3' },style.btn)}
                       onClick={() => { props.toggle('3'); }}  color={'warning'}>Prev</Button>
               <Button  className={style.btn} color={'info'}>Save</Button>
           </ButtonGroup>
       </FormGroup>
       {/*<FormGroup check >*/}
       {/*<ButtonGroup>*/}
       {/*    <Button className={style.btn}  color={'warning'}>Prev</Button>*/}
       {/*    <Button className={style.btn} color={'info'}>Save</Button>*/}
       {/*</ButtonGroup>*/}
       {/*    </FormGroup>*/}
   </Form>
    )
}

export default Publication