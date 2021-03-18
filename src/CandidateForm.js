import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.css';

const CandidateForm = (props) => {
    const{isSubmitted,toggleIsSubmitted, formSubmit} = props

    const jobTitleArr = ['Front-End Developer',
                        'Node.js Developer',
                        'MEAN Stack Developer',
                        'FULL Stack Developer']

    const [id, setId] = useState(uuidv4())
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [jobTitle,setJobTitle] = useState('')
    const [experience,setExp] = useState('')
    const [skills,setSkills] = useState('')
   

    useEffect(() => {
        if(isSubmitted){
            setId(uuidv4())
            setName('')
            setEmail('')
            setContact('')
            setJobTitle('')
            setExp('')
            setSkills('')
            toggleIsSubmitted()
        }
    },[isSubmitted, toggleIsSubmitted])

    const handleChange = (e) => {
            //console.log('handle change' , e.target.name)
            const attr = e.target.name
            if(attr === 'name'){
                setName(e.target.value)
            }else if(attr === 'email'){
                setEmail(e.target.value)
            }else if(attr === 'contact'){
                setContact(e.target.value)
            }else if(attr === 'experience'){
                setExp(e.target.value)
            }else if(attr === 'skills'){
                setSkills(e.target.value)
            }
        }

    const handleJobTitleChange = (e) => {
        const change = e.target.value
        setJobTitle(change)
       // console.log(change)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
        id : uuidv4() ,
        name:name,
        email : email,
        phone:contact,
        jobTitle:jobTitle,
        experience:experience,
        skills:skills
    }
        formSubmit(formData)
       // console.log('formData',formData)

    }

    return(
        <div className = 'container'>
            <div className = 'row mb-3 mt-3 '>
                <h2>Apply for job</h2>
            </div>

            <div className = 'col-md-12'>
                <form onSubmit = {handleSubmit} className = 'form-group'>

                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label className="form-label">Full name</label>
                    </div>
                    <div className = 'col-sm-8'>
                        <input className = 'form-control form-control-lg'  type="text" name = 'name' value ={name} onChange = {handleChange} required/> <br/>
                    </div>    
                </div>

                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label className="form-label">Email address</label>
                    </div>
                    <div className = 'col-sm-8'>
                        <input className = 'form-control form-control-lg' type="email" name = 'email' value = {email} onChange = {handleChange} placeholder = 'example@email.com' required/><br/>    
                    </div>    
                </div>
            
                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label className="form-label">Contact Number</label>
                        
                    </div>
                    <div className = 'col-sm-8'>
                        <input className = 'form-control form-control-lg' type= 'tel' name = 'contact' value = {contact} onChange = {handleChange} placeholder = '+91 9988554344' required/><br/>
                    </div>    
                </div>
                
                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label>Applying for Job</label>
                    </div>
                    <div className = 'col-sm-8'>
                        <div>
                            <select className=" form-control form-control-lg form-select form-select-lg" value = {jobTitle} onChange = {handleJobTitleChange}>
                                <option value="select">--Select--</option>
                                {
                                    jobTitleArr.map((title,i) => {
                                        return <option value = {title} key = {i}>{title}</option>
                                    })
                                } 
                            </select><br/>
                        </div>
                    </div>    
                </div>

                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label className="form-label">Experience</label>
                    </div>
                    <div className = 'col-sm-8'>
                        <input className = 'form-control form-control-lg' type="text" name = 'experience' value = {experience} onChange = {handleChange} placeholder = 'Experience (2 years, 3 months)' required/><br/>
                    </div>    
                </div>

                <div className = 'row'>
                    <div className = 'col-sm-4 col-form-label col-form-label-lg'>
                        <label className="form-label" >Technical skills</label>                       
                    </div>
                    <div className = 'col-sm-8'>
                        <textarea className = 'form-control form-control-lg' type = 'textarea' name = 'skills' value = {skills} onChange = {handleChange} placeholder = 'Technical Skills' required></textarea><br/>
                    </div>    
                </div>                           
                <input type="submit" className= 'btn btn-primary btn-lg' value = 'send application'/>
            </form>
        </div>    
    </div>
    )
}

export default CandidateForm