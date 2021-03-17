import React from 'react'

const CandidatesTable = (props) => {
    const {jobTitle, handleView, handleStatusShortlist, handleStatusReject} = props

    return (
        <div>
            <table border = '1px'>
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
                                        <td><button onClick = {() => {
                                            handleView(ele)
                                        }}>View Details</button></td>

                                        <td>
                                            {
                                                ele.status === 'applied' ? (
                                                    <div>
                                                        <button onClick = {() => {
                                                            handleStatusShortlist(ele)
                                                        }}>Shortlist</button>

                                                        <button onClick = {() => {
                                                            handleStatusReject(ele)
                                                        }}>Reject</button>    
                                                    </div>
                                                    
                                                ) : (
                                                    ele.status === 'shortlisted' ? (
                                                        <button>Shortlisted</button>
                                                    ) : (
                                                        <button>Rejected</button>  
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