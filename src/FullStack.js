import React from 'react'
import CandidatesTable from './CandidatesTable'

const FullStackDev = (props) =>{
    const {candidates, handleView, handleStatusShortlist, handleStatusReject} = props

    const fullStackDev = candidates.filter((ele) => {
        return ele.jobTitle === 'FULL Stack Developer'
    })

    return(
        <div>
            <h2>FULL Stack Developer</h2>
            <p>List of candidates applied for Full Stack developer job</p>
            {fullStackDev && <CandidatesTable jobTitle = {fullStackDev} 
                                                handleView= {handleView}
                                                handleStatusShortlist = {handleStatusShortlist}
                                                handleStatusReject = {handleStatusReject}
                                                />}
        </div>
    )
}

export default FullStackDev