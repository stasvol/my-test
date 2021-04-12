import React, {useReducer, useState} from "react";
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from "reactstrap";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";

import {AvForm,AvField} from "availity-reactstrap-validation";
import {map} from "react-bootstrap/ElementChildren";

const Publication = ({valueInfo,valueData,imgFile,...props}) => {

    // const [valueTab, setValueTab] = useState('')
    // const [checkValue, setCheckValue] = useState([])
    const [check, setCheck ] =  useState()

    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    //
    // function handleClick() {
    //     forceUpdate();
    // }


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
            // props.createDataChild(check)
        }

        // console.log(check)
    }

    const handleSubmit=(event)=>{

        event.preventDefault();
        const formData = new FormData(event.target);
        // FormData={valueTab:props.valueTab , valueData:props.valueData , imgFile:props.imgFile , check}
        // formData.append(props.valueTab,props.imgFile)
        console.log(formData)

    }

    const arr = {valueInfo,valueData,imgFile,check}
    // console.log(valueTab , valueData , imgFile , check)
    // const objProps = {valueTab,valueData,imgFile,check, ...props}
    //  // Array.isArray(objProps)
    // const valueArr = Object.entries(objProps).map(([key,value]) => (`${key} ${value}`))
    // console.log(valueTab,valueData,imgFile,check)
    console.log(arr)

// const rendFile = () =>{
//
//         return(
//             <div>
//                 <div>{props.valueTab}</div>
//                 <div>{props.valueData}</div>
//                 <div>{props.imgFile}</div>
//             </div>
//         )
//
// }


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