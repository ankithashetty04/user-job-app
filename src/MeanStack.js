import React from 'react'
import CandidatesTable from './CandidatesTable'

const MeanStackDev = (props) =>{
    const {candidates, handleView, handleStatusShortlist,handleStatusReject} = props

    const meanStackDev = candidates.filter((ele) => {
        return ele.jobTitle === 'MEAN Stack Developer'
    })

    return(
        <div>
             <h2>Node Js Developers</h2>
            <p>List of candidates applied for MEAN Stack developer job</p>
            {meanStackDev && <CandidatesTable   jobTitle = {meanStackDev} 
                                                handleView= {handleView}
                                                handleStatusShortlist = {handleStatusShortlist}
                                                handleStatusReject = {handleStatusReject}
                                                />}
        </div>
    )
}

export default MeanStackDev