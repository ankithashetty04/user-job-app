import React from 'react'
import { Link, Route} from 'react-router-dom'
import AdminContainer from './AdminContainer'
import UserContainer from './UserContainer'


const App = (props) => {
  return (
    <div>
      <p> <Link to = '/jobapplicationform'>Job Application form</Link> |
           <Link to = '/admindashboard'>AdminDashBoard</Link> </p>

      <Route path = '/jobapplicationform' component = {UserContainer}/>
      <Route path = '/admindashboard' component = {AdminContainer}/>

    </div>
  )
}

export default App