import React, {useRef, useState} from "react"
import {Button, Form, FormGroup, Label, Input, FormText, TabPane} from 'reactstrap';
import style from "../CSS/tabs.module.css";
import classnames from "classnames";


const PhotoFile = (props) => {

      const [selectedFile, setSelectedFile ] = useState([])
      const [isSelected, setIsSelected] = useState(false)
      const [imgFile, setImgFile] = useState([])


    const InputRef = useRef( null );

    const handleBtnClick = () => {


        /*Collecting node-element and performing click*/
        InputRef.currentTarget.focus();

    }

    const saveFile = (e) =>{
          // if (!e.target.files.length){
          //     return
          // }

          const files = Array.from(e.target.files)
          setSelectedFile(e.target.files[0])
           setIsSelected(true)

           files.forEach(file => {

             if (!file.type.match('image')){
                 return
             }
               const reader = new FileReader()

               reader.onload = ev => {
                   if (e.target.files.length <= 5) {
                       setImgFile(prevImgFile => [...prevImgFile, ev.currentTarget.result])
                   }
                   // console.log(ev.currentTarget.result)
                   // Input.insertAdjacentHTML('afterend',`< img src=${ev.target.result}/>`)
                   // const image =  files.map(file=>  {
                   //     return  `<img src="${ev.currentTarget.result}" alt="image"/>`
                   // })
                   // console.log(image)

               }
                reader.readAsDataURL(file)
               // console.log(file)
           })

        // if (e.target.files.length <= 5) {
        //     const arr =[]
        //     const file = e.target.files
        //      arr.push(file)
        //
        //     arr.map(el => {return  <div><span>{el.name}</span></div>})
        //
        //     // props.addPhotoFile(e.target.files)
        //     console.log(file)
        // }
    }

    console.log(imgFile)

    return(
        // <Form >
            <FormGroup>
                <Label for="exampleFile">
                <Input ref={InputRef} onChange={saveFile} type="file" name="file" id="exampleFile" multiple={true}  maxfilesize={5242880}/>
                </Label>
                <button onClick={()=>handleBtnClick(InputRef)}>open</button>
                {imgFile.map((file, i) => (
                    <img key={i} src={file} alt="image" className={style.img} />
                ))}

                {isSelected ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>lastModified: {selectedFile.lastModified}</p>
                          <p>Date:  {selectedFile.lastModifiedDate.toLocaleString()}</p>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
                {/*<FormText color="default">*/}
                {/*    This is some placeholder block-level help text for the above input.*/}
                {/*    It's a bit lighter and easily wraps to a new line.*/}
                {/*</FormText>*/}
            </FormGroup>

        // </Form>
    )

}

export default PhotoFile