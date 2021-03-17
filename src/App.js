import React from 'react'
import AdminContainer from './AdminContainer'
import {BrowserRouter} from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
         <AdminContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App