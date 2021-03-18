import React from 'react'
import { Link, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import AdminContainer from './AdminContainer'
import UserContainer from './UserContainer'


const App = (props) => {
  return (
    <div className = 'container' >
      <div className = 'col-md-12 row mb-3 mt-3 '> 
          <Link to = '/jobapplicationform'>Job Application form </Link> |
          <Link to = '/admindashboard'> AdminDashBoard</Link> 
      </div>

      <Route path = '/jobapplicationform' component = {UserContainer}/>
      <Route path = '/admindashboard' component = {AdminContainer}/>

    </div>
  )
}

export default App