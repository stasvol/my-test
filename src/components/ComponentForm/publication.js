import React, {useReducer, useState} from "react";
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from "reactstrap";
import style from "../CSS/tabs.module.css";
import classnames from "classnames";

import {AvForm, AvField} from "availity-reactstrap-validation";
import {map} from "react-bootstrap/ElementChildren";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Publication = ({valueInfo, isCheck, valueContact, imgFile, ...props}) => {

    // const [valueTab, setValueTab] = useState('')
    // const [checkValue, setCheckValue] = useState([])
    const [check, setCheck] = useState([])
    const [modal, setModal] = useState(false);

    const {buttonLabel, className} = props;
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

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


    const handleClick = (e) => {

        setCheck(e.target.name)

        // let checkbox = Input.checkbox
        for (let i = 0; i <= check.length; i++) {
            setCheck( prevCheck=>[prevCheck,check[i]])
            // checkValue.push(checkbox[i])
            // setCheckValue([...checkValue,check[i]])
            // props.createDataChildPublicCheck([check])
        }

        // console.log([check])
    }

    // const handleSubmit=(event)=>{
    //
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     // FormData={valueTab:props.valueTab , valueData:props.valueData , imgFile:props.imgFile , check}
    //     // formData.append(props.valueTab,props.imgFile)
    //     console.log(formData)
    //
    // }

    // const arr = {valueInfo,valueData,imgFile,check}
    // console.log(valueTab , valueData , imgFile , check)
    const objProps = {valueInfo, isCheck, valueContact, imgFile, check}
    console.log(objProps)

  //   const handleChange =(value) => {
  // console.log(value)
  //   }

    //  // Array.isArray(objProps)
    // const valueArr = Object.entries(objProps)
    //     .map(([key,value]) => (<span>{key}</span>))
    // console.log(valueTab,valueData,imgFile,check)
    // console.log(valueArr)

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


    return (
        <div className={style.body}>
            <Form>

                <FormGroup check>
                    <Label check>
                        <div className={style.check}>
                            <Input onClick={handleClick} type="checkbox" name={'Услуга 1 '}/> Услуга 1
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <div className={style.check}>
                            <Input onClick={handleClick} type="checkbox"  name={'Услуга 2 '}/> Услуга 2
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <div className={style.check}>
                            <Input onClick={handleClick} type="checkbox"  name={'Услуга 3 '}/> Услуга 3
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <div className={style.check}>
                            <Input onClick={handleClick} type="checkbox" name={'Услуга 4 '}/> Услуга 4
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <div className={style.check}>
                            <Input onClick={handleClick} type="checkbox"  name={'Услуга 5 '}/> Услуга 5
                        </div>
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <ButtonGroup>
                        <Button className={classnames({active: props.activeTab === '3'}, style.btn)}
                                onClick={() => {props.toggle('3');}} color={'warning'}>Prev</Button>
                        <Button className={style.btn} color={'info'} onClick={toggle}>Save</Button>
                    </ButtonGroup>
                </FormGroup>
                {/*<FormGroup check >*/}
                {/*<ButtonGroup>*/}
                {/*    <Button className={style.btn}  color={'warning'}>Prev</Button>*/}
                {/*    <Button className={style.btn} color={'info'}>Save</Button>*/}
                {/*</ButtonGroup>*/}
                {/*    </FormGroup>*/}
            </Form>
            <div>
                {/*<div>*/}
                {/*    <span className={style.remove}>x</span>*/}
                {/*</div>*/}
                {/* <div>*/}
                {/*     <h3>Ваше объявление</h3>*/}
                {/* </div>*/}

                {/*{*/}
                {/*     Object.entries(objProps).map(([key,value])=> {*/}
                {/*      return  <div>*/}

                {/*          <div  className={style.wid}><div>{key}</div><input   key={key}  value={value}/> </div>*/}
                {/*                         /!*<img src={value}/>*!/*/}
                {/*                    /!*key={key}*!/*/}
                {/*                    /!*property={key}*!/*/}
                {/*                    /!* value={Number(value)}*!/*/}
                {/*          </div>*/}
                {/*    })*/}
                {/*}*/}
                {/*{*/}
                {/*    Object.entries(objProps).map(([key, value]) =>  <div> <img key={key} src={value} /></div>)*/}
                {/*}*/}

                <div>
                    {/*<Button color="danger" onClick={toggle}>{buttonLabel}</Button>*/}
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle} close={closeBtn}>Ваше объявление</ModalHeader>

                        <ModalBody>
                            {/*{*/}
                            {/*    Object.entries(objProps)*/}
                            {/*        // .filter((key,value) => key === props.imgFile && value === props.imgFile.value )*/}
                            {/*        .filter(([key, value]) => {*/}

                            {/*            return key === 'imgFile';*/}
                            {/*            console.log(key === 'imgFile')*/}
                            {/*        })*/}
                            {/*        // .filter((key,value) => { if(key !== props.imgFile) return false})*/}
                            {/*        .map(([key, value]) => {*/}
                            {/*            console.log(value)*/}
                            {/*            return(*/}
                            {/*                <div>*/}
                            {/*                    {value.map((src, i) => (*/}
                            {/*                        <img className={style.img} key={i} src={src}*/}
                            {/*                             alt={'No'}/>*/}
                            {/*                    ))}*/}
                            {/*                </div>*/}
                            {/*            )*/}
                            {/*        })*/}

                            {/*}*/}

                            {/*{objProps.imgFile}*/}

                            {

                                Object.entries(objProps)
                                    // .filter((key,value) => key !== props.imgFile  && value !== imgFile.value )
                                    .filter(([key, value]) => {return key !== 'imgFile';})
                                    .map(([key, value]) => {
                                        return <div>

                                            <div key={key.toString()} className={style.wid}><b key={key.value}>{key} :</b>
                                                   <span className={style.modInput}><i>{value?.toString()}</i></span>
                                                   {/*<input key={key} value={value} className={style.modInput}/>*/}
                                            </div>

                                        </div>
                                    })
                            }

                            {

                                    objProps.imgFile.map((src, i) => (
                                        <img className={style.img} key={i} src={src} alt={'No'}/>
                                    ))

                            }


                            {/*{*/}
                            {/*    Object.entries(objProps)*/}
                            {/*        // .filter((key,value) => key === props.imgFile && value === props.imgFile.value )*/}
                            {/*        .filter(key=> key  ===  imgFile)*/}
                            {/*        // .filter((key,value) => { if(key !== props.imgFile) return false})*/}
                            {/*        .map(([key, value]) =>  <div> <img className={style.img} key={key} src={value} alt={'No'}/></div>)*/}

                            {/*}*/}
                        </ModalBody>
                        <ModalFooter>
                            {/*<Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}


export default Publication