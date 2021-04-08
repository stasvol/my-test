import React, {useState} from "react";
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from "reactstrap";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";
import handleSubmit from "redux-form/lib/handleSubmit";


const Publication =(props)=>{

    const [valueTab, setValueTab] = useState('')

    const handleChange = (e)=>{

        e.preventDefault()

        const value = (e.target.value)

        setValueTab( [...valueTab,value])


        props.createDataChild(valueTab)
        // console.log(valueTabOne)
    }

    // const handleSubmit =()=>{
    //     handleChange()
    // }


    return(

   <Form>
    <FormGroup check>
        <Label check>
            <div className={style.check}>
            <Input type="checkbox" />  УСЛУГА 1
            </div>
        </Label>
    </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input type="checkbox" />  УСЛУГА 2
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input type="checkbox" />  УСЛУГА 3
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input type="checkbox" />  УСЛУГА 4
               </div>
           </Label>
       </FormGroup>
       <FormGroup check >
           <Label check>
               <div className={style.check}>
               <Input type="checkbox" />  УСЛУГА 5
               </div>
           </Label>
       </FormGroup>

       <FormGroup check >
           <ButtonGroup>
               <Button className={classnames({ active: props.activeTab === '3' },style.btn)}
                       onClick={() => { props.toggle('3'); }}  color={'warning'}>Prev</Button>
               <Button onSubmit={handleChange} className={style.btn} color={'info'}>Save</Button>
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