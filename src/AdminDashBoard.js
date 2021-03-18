import React,{useState,useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './modal.css'
import FrontEndDev from './FrontEndDev'
import NodeJsDev from './NodeJsDev'
import MeanStackDev from './MeanStack'
import FullStackDev from './FullStack'


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
            <div className='container'>
                <div className='col-md-12'>
                    
                        <Link  to ='/admindashboard/frontEndDev'>Front-End Developer</Link> |
                        <Link  to ='/admindashboard/nodeJsDev'>Node.js Developer</Link> |
                        <Link  to = '/admindashboard/meanStackDev'>MEAN Stack Developer</Link> |
                        <Link  to = '/admindashboard/fullStackDev'>FULL Stack Developer</Link> |
                    
                </div>
                
            </div>


            {toggle && 
                    <div id= 'modal' className='modal'>
                        <div  className = 'modal-dailog' >
                            <div className = 'modal-content'>
                                <div className = 'modal-header'>
                                    <h3 className = 'modal-title'> {modal.name}</h3>
                                    <button type="button" 
                                            onClick = { () => {
                                                setToggle(false)
                                            }
                                            }
                                            className="btn btn-danger" 
                                             data-bs-dismiss="modal" aria-label="Close">&times;</button>
                                </div>
                            <div className = 'modal-body'>
                            <div className = 'col-md-12'>
                               
                               <div className = 'row '>
                                   <div className = 'col-md-2'>
                                       <h3>Email: </h3>
                                   </div>
                                   <div className = 'col-md-10'>
                                       <h3>{modal.email}</h3>
                                   </div>
                               </div>
                              
                               <div className = 'row'>
                                   <div className = 'col-md-2'>
                                       <h3>Skills: </h3>
                                   </div>
                                   <div className = 'col-md-10'>
                                       <h3>{modal.skills}</h3>
                                   </div>
                               </div>
   
                               <div className = 'row'>
                                   <div className = 'col-md-2'>
                                       <h3>Experience:  </h3>
                                   </div>
                                   <div className = 'col-md-10'>
                                       <h3>{modal.experience}</h3>
                                   </div>
                               </div>
                              
                               <div className = 'row'>
                                   <div className = 'col-md-2'>
                                       <h3>Status: </h3>
                                   </div>
                                   <div className = 'col-md-10'>
                                       <h3>{modal.status}</h3>
                                   </div>
                               </div>
                                            
                               <div id = 'closeBtn'>
                                <button className = 'btn btn-danger' onClick = { () => {
                                    setToggle(false)
                                }}>Close</button>
                                </div>

                            </div>
                            </div>
                            </div>
                            
                           
                        </div>                        
                    </div>
            }
            
            <Route  path = "/admindashboard/frontEndDev" 
                    exact = {true} 
                    render = {(props) => <FrontEndDev {...props} 
                                            candidates = {candidates}
                                            handleView = {handleView}
                                            handleStatusShortlist = {handleStatusShortlist}
                                            handleStatusReject = {handleStatusReject}
                                         />} 
                     />

            <Route  path = "/admindashboard/nodeJsDev" 
                    exact = {true}
                    render = {(props) => <NodeJsDev {...props}  candidates = {candidates}
                                                                handleView = {handleView}
                                                                handleStatusShortlist = {handleStatusShortlist}
                                                                handleStatusReject = {handleStatusReject}
                                            /> }
                    />

            <Route  path = "/admindashboard/meanStackDev" 
                    exact = {true}
                    render = {(props) => <MeanStackDev {...props}   candidates = {candidates}
                                                                    handleView = {handleView}
                                                                    handleStatusShortlist = {handleStatusShortlist}
                                                                    handleStatusReject = {handleStatusReject}
                                                                    /> }
                    />

            <Route  path = "/admindashboard/fullStackDev" 
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