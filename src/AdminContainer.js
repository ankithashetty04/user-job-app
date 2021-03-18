import React from 'react'
import {Route} from 'react-router-dom'
import AdminDashboard from './AdminDashBoard'

const AdminContainer = (props) => {
    
    return(
        <div>
          <Route path = '/admindashboard' component = {AdminDashboard}/>
        </div>
    )
}

export default AdminContainer