import React from 'react'
import CandidatesTable from './CandidatesTable'

const NodeJsDev = (props) =>{
    const {candidates, handleView,handleStatusShortlist,handleStatusReject} = props

    const nodeJsDev = candidates.filter((ele) => {
        return ele.jobTitle === 'Node.js Developer'
    })

    return(
        <div>
            <h2>Node Js Developers</h2>
            <p>List of candidates applied for Node.js developer job</p>
            {nodeJsDev && <CandidatesTable jobTitle = {nodeJsDev} 
                                            handleView= {handleView}
                                            handleStatusShortlist = {handleStatusShortlist}
                                            handleStatusReject = {handleStatusReject}
                                            />}
        </div>
    )
}

export default NodeJsDev