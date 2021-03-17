import React,{useState,useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

import FrontEndDev from './FrontEndDev'
import NodeJsDev from './NodeJsDev'
import MeanStackDev from './MeanStack'
import FullStackDev from './FullStack'
import './modal.css'

const AdminDashboard = (props) => {
    const [candidates, setCandidates] = useState([])
    const [jobStatus,setJobStatus] = useState(false)
    const [modal,setModal] = useState({})
    const [toggle, setToggle] = useState(false)
    const url = 'https://dct-application-form.herokuapp.com'

    useEffect(() => {
        axios.get(`${url}/users/application-forms`)

        .then((res) => {
            const result = res.data
            setCandidates(result)
            console.log(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[jobStatus])

    const handleStatusShortlist = (candidate) => {
        //console.log(candidates._id)
        axios.put(`${url}/users/application-form/update/${candidate._id}`, {status:'shortlisted'})
        .then((res) => {
            const result = res.data
            console.log(result)
            setJobStatus(!jobStatus)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const handleStatusReject = (candidate) => {
        axios.put(`${url}/users/application-form/update/${candidate._id}`, {status:'rejected'})
        .then((res) => {
            const result = res.data
            console.log(result)
            setJobStatus(!jobStatus)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const handleView = (canData) => {

        const data = {
            name:canData.name,
            email: canData.email,
            skills: canData.skills,
            experience: canData.experience,
            status: canData.status
        }

        setModal(data)
        setToggle(true)
    }

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h1>{candidates.length}</h1>
            <div class='container'>
                <div class='col-md-12'>
                    <p>
                        <Link class='col-md-4' to ='/frontEndDev'>Front-End Developer</Link> |
                        <Link class='col-md-4' to ='/nodeJsDev'>Node.js Developer</Link> |
                        <Link class='col-md-4' to = '/meanStackDev'>MEAN Stack Developer</Link> |
                        <Link class='col-md-4' to = '/fullStackDev'>FULL Stack Developer</Link> |
                    </p>
                </div>
                
            </div>

            {toggle && 
                    <div id= 'modal'>
                        <div id = 'modal-data'>
                            <h3>Name : {modal.name}</h3>
                            <h3>Email: {modal.email}</h3>
                            <h3>Skills: {modal.skills}</h3>
                            <h3>Experience: {modal.experience}</h3>
                            <h3>Status: {modal.status}</h3>

                            <div id = 'closeBtn'>
                                <button class = 'btn btn-danger' onClick = { () => {
                                    setToggle(false)
                                }}>Close</button>
                            </div>
                        </div>                        
                    </div>
            }
            
            <Route  path = "/frontEndDev" 
                    exact = {true} 
                    render = {(props) => <FrontEndDev {...props} 
                                            candidates = {candidates}
                                            handleView = {handleView}
                                            handleStatusShortlist = {handleStatusShortlist}
                                            handleStatusReject = {handleStatusReject}
                                         />} 
                     />

            <Route  path = "/nodeJsDev" 
                    exact = {true}
                    render = {(props) => <NodeJsDev {...props}  candidates = {candidates}
                                                                handleView = {handleView}
                                                                handleStatusShortlist = {handleStatusShortlist}
                                                                handleStatusReject = {handleStatusReject}
                                            /> }
                    />

            <Route  path = "/meanStackDev" 
                    exact = {true}
                    render = {(props) => <MeanStackDev {...props}   candidates = {candidates}
                                                                    handleView = {handleView}
                                                                    handleStatusShortlist = {handleStatusShortlist}
                                                                    handleStatusReject = {handleStatusReject}
                                                                    /> }
                    />

            <Route  path = "/fullStackDev" 
                    exact = {true}
                    render = {(props) => <FullStackDev {...props}   candidates = {candidates}
                                                                    handleView = {handleView}
                                                                    handleStatusShortlist = {handleStatusShortlist}
                                                                    handleStatusReject = {handleStatusReject}
                                                                    /> }
                    />

        </div>
    )
}

export default AdminDashboard