import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const CandidatesTable = (props) => {
    const {jobTitle, handleView, handleStatusShortlist, handleStatusReject} = props

    return (
        <div>
            <table class='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {jobTitle.map((ele) => {
                            return  <tr key = {ele._id}>
                                        <td>{ele.name}</td>
                                        <td>{ele.skills}</td>
                                        <td>{ele.experience}</td>
                                        <td>{ele.createdAt.slice(0,10)}</td>
                                        <td><button class='btn btn-primary' onClick = {() => {
                                            handleView(ele)
                                        }}>View Details</button></td>

                                        <td>
                                            {
                                                ele.status === 'applied' ? (
                                                    <div>
                                                        <button class='btn btn-success' onClick = {() => {
                                                            handleStatusShortlist(ele)
                                                        }}>Shortlist</button>

                                                        <button class='btn btn-danger' onClick = {() => {
                                                            handleStatusReject(ele)
                                                        }}>Reject</button>    
                                                    </div>
                                                    
                                                ) : (
                                                    ele.status === 'shortlisted' ? (
                                                        <button class="btn btn-info" disabled>Shortlisted</button>
                                                    ) : (
                                                        <button class="btn btn-info" disabled>Rejected</button>  
                                                    )
                                                    
                                                    
                                                )
                                            }
                                            
                                        </td>


                                    </tr>
                        })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default CandidatesTable