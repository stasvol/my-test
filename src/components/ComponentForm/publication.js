import React from "react";
import {Button, ButtonGroup, Form, FormGroup, Input, Label} from "reactstrap";
import style from "../CSS/tabs.module.css";


const Publication =()=>{

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