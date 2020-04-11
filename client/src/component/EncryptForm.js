import React, {useState} from 'react'
import './form.css'


const EncryptForm = ()=>{

    const [form,setForm] = useState({
        file:{},
        text:"",
        fileName:""
    });

    const handletexttohidechange = (event) =>{
      setForm({file:form.file,text:event.target.value,fileName:form.fileName});
    }

    const handlefilechange = (event) =>{
        setForm({file:event.target.files[0],fileName:event.target.files[0].name,text:form.text});
    }

    const handlesubmit = (event) =>{
        alert(`${form.text} ${form.file.name}`);
        event.preventDefault();
    }

    return(
        <div style={{width:"100%"}}>
        <form onSubmit={handlesubmit}>
            <br/>
            <div>
                <label>
                Enter The text to be hidden here    
                </label>
            </div>
                
            <div>
                    <input className='textbox' 
                    type='text' 
                    value={form.text} 
                    onChange={handletexttohidechange} />
            </div>
                <br/> 

            <div>
                <label>
                Upload image file to hide text     
                </label>
            </div>
                

            <div className="custom-file mb-5" style={{width:"20%"}}>
                    <input type="file" className="custom-file-input" id="customFile"  onChange={handlefilechange}  />
                    <label className="text-left custom-file-label" htmlFor="customFile">{form.fileName}</label>
            </div>
                
                <br/>
            
            
            <button className='submitbutton' type='submit'>Encrypt</button>
        </form>
        </div>
    )

}
export default EncryptForm