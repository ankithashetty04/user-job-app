import React,{useState,useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import FrontEndDev from './FrontEndDev'
import NodeJsDev from './NodeJsDev'
import MeanStackDev from './MeanStack'
import FullStackDev from './FullStack'

const AdminDashboard = (props) => {
    const [candidates, setCandidates] = useState([])
    const [jobStatus,setJobStatus] = useState(false)

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
         alert(`name: ${data.name},
                email: ${data.email},
                skills: ${data.skills},
                experience: ${data.experience}    
                status: ${data.status}
            `)
    }

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h1>{candidates.length}</h1>
            <div>
                <p>
                    <Link to ='/frontEndDev'>Front-End Developer</Link> |
                    <Link to ='/nodeJsDev'>Node.js Developer</Link> |
                    <Link to = '/meanStackDev'>MEAN Stack Developer</Link> |
                    <Link to = '/fullStackDev'>FULL Stack Developer</Link> |
                </p>
            </div>

            
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