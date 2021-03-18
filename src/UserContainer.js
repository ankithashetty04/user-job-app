import React,{useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import CandidateForm from './CandidateForm'

const UserContainer = (props) => {
    const [candidatesData,setCandidatesData] = useState([])
    const [isSubmitted,setIsSubmitted] = useState(false)

    const baseUrl = 'https://dct-application-form.herokuapp.com'

    const formSubmit = (candidateData) => {
        axios.post(`${baseUrl}/users/application-form`, candidateData)
        .then((res) => {
            //console.log('result', candidateData)
            const result = res.data
            addData(result)
            console.log('result',result)
            setIsSubmitted(true)
        })
        .catch((err) => {
            alert(err.message)
        })

        alert('application sent')
    }

    const addData = (data) => {
        setCandidatesData([...candidatesData], data)
    }

    const toggleIsSubmitted = () => {
        setIsSubmitted(!isSubmitted)
    }


    useEffect(() => {
        axios.get(`${baseUrl}/users/application-forms`)

        .then((res) => {
            const data = res.data
            setCandidatesData(data)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return(
        <div>

            <Route path = '/jobapplicationform' 
                    render = {(props) => <CandidateForm {...props} 
                    isSubmitted = {isSubmitted}
                    toggleIsSubmitted = {toggleIsSubmitted}
                    formSubmit = {formSubmit}
                 />} 
            />
        </div>
    )
}

export default UserContainer