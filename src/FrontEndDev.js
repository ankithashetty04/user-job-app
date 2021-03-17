import React from 'react'
import CandidatesTable from './CandidatesTable'

const FrontEndDev = (props) =>{   
    const {candidates, handleView, handleStatusShortlist, handleStatusReject} = props 
   
    const frontEndDev = candidates.filter((ele) => {
        return ele.jobTitle === 'Front-End Developer'
    })
   
    return(
        <div>
           <h2>Front End Developers</h2>
            <p>List of candidates applied for Front-end developer job</p>
            {frontEndDev && <CandidatesTable jobTitle = {frontEndDev} 
                                            handleView= {handleView} 
                                            handleStatusShortlist = {handleStatusShortlist}
                                            handleStatusReject = {handleStatusReject}
                                            />}
        </div>

    )
}

export default FrontEndDev